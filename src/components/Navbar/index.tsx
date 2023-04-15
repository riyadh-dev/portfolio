import { useCallback, useEffect, useRef, useState } from 'preact/hooks';
import { JSXInternal } from 'preact/src/jsx';
import './styles.css';

const NAV_ITEMS = [
	{
		name: 'Home',
		href: '#home',
	},
	{
		name: 'About',
		href: '#about',
	},
	{
		name: 'Skills',
		href: '#skills',
	},
	{
		name: 'Experience',
		href: '#experience',
	},
	{
		name: 'Projects',
		href: '#projects',
	},
	{
		name: 'Contact',
		href: '#contact',
	},
];

const Navbar = ({
	handleOpenThemePanel,
}: {
	handleOpenThemePanel: () => void;
}) => {
	const navMenu = useRef<HTMLDivElement>(null);
	const handleOpenNavMenu = () => navMenu.current?.classList.add('show');
	const handleCloseNavMenu = () => navMenu.current?.classList.remove('show');
	const handleCloseNavMenuFromLi: JSXInternal.MouseEventHandler<
		HTMLUListElement
	> = (e) => {
		if ((e.target as HTMLLIElement).classList.contains('nav-link'))
			handleCloseNavMenu();
	};

	const [currentSection, setCurrentSection] = useState(
		window.location.hash ?? '#home'
	);

	const setObservers = useCallback(() => {
		const sections = document.querySelectorAll<HTMLElement>('section[id]');
		for (const section of sections) {
			const observer = new IntersectionObserver(
				(entries) => {
					if (entries[0].isIntersecting) setCurrentSection(`#${section.id}`);
				},
				{ threshold: 0.5 }
			);
			observer.observe(section);
		}
	}, []);

	useEffect(() => {
		window.addEventListener('load', setObservers);
		return () => {
			window.removeEventListener('load', setObservers);
		};
	});

	return (
		<header id='header' className='header'>
			<nav className='nav container px-15'>
				<div className='nav-logo'>
					<h2>Riyadh</h2>
				</div>

				<div ref={navMenu} className='nav-menu'>
					<ul className='nav-list' onClick={handleCloseNavMenuFromLi}>
						{NAV_ITEMS.map((item, index) => (
							<li key={index} className='nav-item'>
								<a
									href={item.href}
									className={`nav-link ${
										currentSection === item.href ? 'active-link' : ''
									}`}
								>
									{item.name}
								</a>
							</li>
						))}
					</ul>
					<div className='nav-close' id='nav-close'>
						<i className='fa-solid fa-xmark' onClick={handleCloseNavMenu} />
					</div>
				</div>

				<div className='nav-btn-group'>
					<i
						className='fa-solid fa-palette'
						id='nav-theme-btn'
						onClick={handleOpenThemePanel}
					/>
					<div className='nav-btn nav-toggle' id='nav-toggle'>
						<i className='fa-solid fa-bars' onClick={handleOpenNavMenu} />
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
