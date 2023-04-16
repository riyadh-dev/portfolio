import { For, Show, createSignal, onMount } from 'solid-js';
import { Portal } from 'solid-js/web';
import ThemePanel from '../ThemePanel';
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

const Navbar = () => {
	const [showNavbar, setShowNavbar] = createSignal(false);
	const [showThemePanel, setShowThemePanel] = createSignal(false);
	const [currentSection, setCurrentSection] = createSignal('#home');

	const closeNavbar = () => setShowNavbar(false);
	const closeThemePanel = () => setShowThemePanel(false);

	const observersInit = () => {
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
	};

	onMount(() => {
		observersInit();
		setCurrentSection(window.location.hash);
	});

	return (
		<header id='header' class='header'>
			<nav class='nav container px-15'>
				<div class='nav-logo'>
					<h2>Riyadh</h2>
				</div>

				<div class='nav-menu' classList={{ show: showNavbar() }}>
					<ul class='nav-list'>
						<For each={NAV_ITEMS}>
							{(item) => (
								<li class='nav-item' onClick={closeNavbar}>
									<a
										href={item.href}
										class='nav-link'
										classList={{
											'active-link': currentSection() === item.href,
										}}
									>
										{item.name}
									</a>
								</li>
							)}
						</For>
					</ul>
					<div class='nav-close' id='nav-close'>
						<i class='fa-solid fa-xmark' onClick={closeNavbar} />
					</div>
				</div>

				<div class='nav-btn-group'>
					<i
						class='fa-solid fa-palette'
						id='nav-theme-btn'
						onClick={() => setShowThemePanel(true)}
					/>
					<div class='nav-btn nav-toggle' id='nav-toggle'>
						<i class='fa-solid fa-bars' onClick={() => setShowNavbar(true)} />
					</div>
				</div>
			</nav>
			<Show when={showThemePanel()}>
				<Portal>
					<ThemePanel closeThemePanel={closeThemePanel} />
				</Portal>
			</Show>
		</header>
	);
};

export default Navbar;
