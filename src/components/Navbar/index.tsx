import { useEffect, useRef, useState } from 'react';
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
	const handleCloseNavMenuFromLi: React.MouseEventHandler<HTMLUListElement> = (
		e
	) => {
		if ((e.target as HTMLLIElement).classList.contains('nav-link'))
			handleCloseNavMenu();
	};

	const [currentSection, setCurrentSection] = useState(
		window.location.hash ?? '#home'
	);

	useEffect(() => {
		const sections = document.querySelectorAll<HTMLElement>('section[id]');
		const navHighlighter = () => {
			//get the current scroll position
			let scrollY = window.pageYOffset;

			//loop through all the sections and get the height, top and id of each section
			sections.forEach((section) => {
				const sectionHeight = section.offsetHeight;
				const sectionTop = section.offsetTop - 76;
				const sectionId = section.getAttribute('id');

				//if the scroll position is greater than the section top and less than the section height + top
				if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
					//add the active class to the section
					setCurrentSection('#' + sectionId);
				}
			});
		};

		window.addEventListener('scroll', navHighlighter);
	});

	return (
		<header id='header' className='header'>
			<nav className='nav container px-15'>
				<div className='nav-logo'>
					<h2>Riyadh</h2>
				</div>

				<div ref={navMenu} className='nav-menu'>
					<ul className='nav-list' onClick={handleCloseNavMenuFromLi}>
						{NAV_ITEMS.map((item) => (
							<li className='nav-item'>
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
						<i className='fa-solid fa-gear' onClick={handleOpenNavMenu} />
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
