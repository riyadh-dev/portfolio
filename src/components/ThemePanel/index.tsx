import { For, JSX, onCleanup, onMount } from 'solid-js';
import {
	activeBackgroundColorIndexSignal,
	activeColorHueIndexSignal,
	activeFontSizeIndexSignal,
} from '~/theme';
import THEME from './data';
import './styles.css';

const ThemePanel = (props: { closeThemePanel: () => void }) => {
	const [activeFontSizeIndex, setActiveFontSizeIndex] =
		activeFontSizeIndexSignal;
	const [activeColorHueIndex, setActiveColorHueIndex] =
		activeColorHueIndexSignal;
	const [activeBackgroundColorIndex, setActiveBackgroundColorIndex] =
		activeBackgroundColorIndexSignal;

	onMount(() => (document.body.style.overflow = 'hidden'));

	onCleanup(() => {
		document.body.style.position = '';
		document.body.style.overflow = 'auto';
	});

	const handleCloseThemePanel: JSX.EventHandlerUnion<
		HTMLDivElement,
		MouseEvent
	> = (e) => {
		if (e.target.id === 'theme-panel-container') props.closeThemePanel();
	};

	return (
		<div
			class='theme-panel-container'
			id='theme-panel-container'
			onClick={handleCloseThemePanel}
		>
			<div class='theme-panel'>
				<h2>Customize The Theme</h2>
				<p>Manage the font size, color and theme mode.</p>

				<div class='theme-font-size'>
					<h3>Font Size</h3>
					<div class='theme-font-size-slider'>
						<h6>Aa</h6>
						<ul>
							<For each={THEME.fontSizes}>
								{(_, index) => (
									<li
										onClick={() => setActiveFontSizeIndex(index())}
										class={`font-size-${index() + 1}`}
										classList={{ active: index() === activeFontSizeIndex() }}
									/>
								)}
							</For>
						</ul>
						<h3>Aa</h3>
					</div>
				</div>

				<div class='theme-color'>
					<h3>Color</h3>
					<ul>
						<For each={THEME.colorHues}>
							{(_, index) => (
								<li
									onClick={() => setActiveColorHueIndex(index())}
									class={`color-${index() + 1}`}
									classList={{ active: index() === activeColorHueIndex() }}
								/>
							)}
						</For>
					</ul>
				</div>

				<div class='theme-background'>
					<h3>Theme Mode</h3>
					<ul>
						<For each={THEME.backgrounds}>
							{({ text }, index) => (
								<li
									onClick={() => setActiveBackgroundColorIndex(index())}
									class={`bg-${index() + 1}`}
									classList={{
										active: index() === activeBackgroundColorIndex(),
									}}
								>
									<h4>{text}</h4>
								</li>
							)}
						</For>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default ThemePanel;
