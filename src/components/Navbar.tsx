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
					<ul class='nav-list'>
						<For each={NAV_ITEMS}>
							{(item) => (
								<button onClick={closeNavbar}>
									<li class='nav-item'>
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
								</button>
							)}
						</For>
					</ul>
					<button class='nav-close' id='nav-close' onClick={closeNavbar}>
						<i class='fa-solid fa-xmark' />
					</button>
				</div>

				<div class='nav-btn-group'>
					<button onClick={() => setShowThemePanel(true)}>
						<i class='fa-solid fa-palette' id='nav-theme-btn' />
					</button>
					<button
						class='nav-btn nav-toggle'
						id='nav-toggle'
						onClick={() => setShowNavbar(true)}
					>
						<i class='fa-solid fa-bars' />
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
