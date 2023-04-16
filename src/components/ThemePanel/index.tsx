import { Accessor, For, onCleanup, onMount } from 'solid-js';
import directive from '~/click-outside';
import { useTheme } from '~/theme';
import THEME from './data';
import './styles.css';

const ThemePanel = (props: { closeThemePanel: () => void }) => {
	const {
		bgColorIdx,
		colorHueIdx,
		fontSizeIdx,
		setBgColorIdx,
		setColorHueIdx,
		setFontSizeIdx,
	} = useTheme();

	onMount(() => (document.body.style.overflow = 'hidden'));

	onCleanup(() => {
		document.body.style.position = '';
		document.body.style.overflow = 'auto';
	});

	const handleColorHueIndxChange = (index: Accessor<number>) => {
		setColorHueIdx(index());
		localStorage.setItem('colorHueIdx', colorHueIdx().toString());
	};

	const handleFontSizeIndxChange = (index: Accessor<number>) => {
		setFontSizeIdx(index());
		localStorage.setItem('fontSizeIdx', fontSizeIdx().toString());
	};

	const handleBgColorIndxChange = (index: Accessor<number>) => {
		setBgColorIdx(index());
		localStorage.setItem('bgColorIdx', bgColorIdx().toString());
	};

	const clickOutside = directive;
	return (
		<div class='theme-panel-container' id='theme-panel-container'>
			<div use:clickOutside={props.closeThemePanel} class='theme-panel'>
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
										onClick={[handleFontSizeIndxChange, index]}
										class={`font-size-${index() + 1}`}
										classList={{ active: index() === fontSizeIdx() }}
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
									onClick={[handleColorHueIndxChange, index]}
									class={`color-${index() + 1}`}
									classList={{ active: index() === colorHueIdx() }}
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
									onClick={[handleBgColorIndxChange, index]}
									class={`bg-${index() + 1}`}
									classList={{
										active: index() === bgColorIdx(),
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
