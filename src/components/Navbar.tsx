import NAV_ITEMS from '@/static/nav-items';
import { For, Show, createSignal, onMount } from 'solid-js';
import { Portal } from 'solid-js/web';
import ThemePanel from './ThemePanel';

import '@/styles/navbar.css';

export default function Navbar() {
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
				{ threshold: 0.4 },
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
					<button
						aria-label='close nav-bar'
						class='nav-close'
						id='nav-close'
						onClick={closeNavbar}
					>
						<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
							<path d='M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z' />
						</svg>
					</button>
					<div class='nav-list'>
						<For each={NAV_ITEMS}>
							{(item) => (
								<button onClick={closeNavbar}>
									<a
										href={item.href}
										class='nav-link nav-item'
										classList={{
											'active-link': currentSection() === item.href,
										}}
									>
										{item.name}
									</a>
								</button>
							)}
						</For>
					</div>
				</div>

				<div class='nav-btn-group'>
					<button
						aria-label='open theme panel'
						onClick={() => setShowThemePanel(true)}
					>
						<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
							<path d='M512 256c0 .9 0 1.8 0 2.7c-.4 36.5-33.6 61.3-70.1 61.3H344c-26.5 0-48 21.5-48 48c0 3.4 .4 6.7 1 9.9c2.1 10.2 6.5 20 10.8 29.9c6.1 13.8 12.1 27.5 12.1 42c0 31.8-21.6 60.7-53.4 62c-3.5 .1-7 .2-10.6 .2C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z' />
						</svg>
					</button>
					<button
						aria-label='toggle nav-bar'
						class='nav-btn nav-toggle'
						id='nav-toggle'
						onClick={() => setShowNavbar(true)}
					>
						<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
							<path d='M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z' />
						</svg>
					</button>
				</div>
			</nav>
			<Show when={showThemePanel()}>
				<Portal>
					<ThemePanel closeThemePanel={closeThemePanel} />
				</Portal>
			</Show>
		</header>
	);
}
