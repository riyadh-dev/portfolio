import {
	For,
	batch,
	createSignal,
	onCleanup,
	onMount,
	type Accessor,
} from 'solid-js'
import THEME from '~/static/theme'
import clickOutside from '~/utils/click-outside'

import '~/styles/theme-panel.css'

export default function ThemePanel(props: { closeThemePanel: () => void }) {
	onMount(() => (document.body.style.overflow = 'hidden'))

	onCleanup(() => {
		document.body.style.position = ''
		document.body.style.overflow = 'auto'
	})

	const [fontSizeIdx, setFontSizeIdx] = createSignal(0)
	const [colorHueIdx, setColorHueIdx] = createSignal(0)
	const [bgColorIdx, setBgColorIdx] = createSignal(0)

	onMount(() =>
		batch(() => {
			setFontSizeIdx(
				parseInt(localStorage.getItem('fontSizeIdx') ?? '2', 10)
			)
			setColorHueIdx(
				parseInt(localStorage.getItem('colorHueIdx') ?? '2', 10)
			)
			setBgColorIdx(
				parseInt(localStorage.getItem('bgColorIdx') ?? '1', 10)
			)
		})
	)

	const style = document.documentElement.style
	const handleColorHueIndxChange = (index: Accessor<number>) => {
		setColorHueIdx(index())
		style.setProperty('--primary-color-hue', THEME.colorHues[colorHueIdx()])
		localStorage.setItem('colorHueIdx', index().toString())
	}

	const handleFontSizeIndxChange = (index: Accessor<number>) => {
		setFontSizeIdx(index())
		style.fontSize = THEME.fontSizes[index()]
		localStorage.setItem('fontSizeIdx', index().toString())
	}

	const handleBgColorIndxChange = (index: Accessor<number>) => {
		setBgColorIdx(index())

		style.setProperty(
			'--light-color-lightness',
			THEME.backgrounds[bgColorIdx()].values[0]
		)
		style.setProperty(
			'--dark-color-lightness',
			THEME.backgrounds[bgColorIdx()].values[1]
		)
		style.setProperty(
			'--white-color-lightness',
			THEME.backgrounds[bgColorIdx()].values[2]
		)

		localStorage.setItem('bgColorIdx', index().toString())
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-expressions
	clickOutside //preserve import

	return (
		<div class='theme-panel-container' id='theme-panel-container'>
			<div use:clickOutside={props.closeThemePanel} class='theme-panel'>
				<h2>Customize The Theme</h2>
				<p>Manage the font size, color and theme mode.</p>

				<div class='theme-font-size'>
					<h3>Font Size</h3>
					<div class='theme-font-size-slider'>
						<h6>Aa</h6>
						<div>
							<For each={THEME.fontSizes}>
								{(_, index) => (
									<button
										aria-label={`font-size-${index()}`}
										onClick={[
											handleFontSizeIndxChange,
											index,
										]}
										class={`font-size-${index() + 1}`}
										classList={{
											active: index() === fontSizeIdx(),
										}}
									/>
								)}
							</For>
						</div>
						<h3>Aa</h3>
					</div>
				</div>

				<div class='theme-color'>
					<h3>Color</h3>
					<div>
						<For each={THEME.colorHues}>
							{(_, index) => (
								<button
									aria-label={`color-${index()}`}
									onClick={[handleColorHueIndxChange, index]}
									class={`color-${index() + 1}`}
									classList={{
										active: index() === colorHueIdx(),
									}}
								/>
							)}
						</For>
					</div>
				</div>

				<div class='theme-background'>
					<h3>Theme Mode</h3>
					<div>
						<For each={THEME.backgrounds}>
							{({ text }, index) => (
								<button
									style={{ width: '100%' }}
									onClick={[handleBgColorIndxChange, index]}
									class={`bg-${index() + 1}`}
									classList={{
										active: index() === bgColorIdx(),
									}}
								>
									{text}
								</button>
							)}
						</For>
					</div>
				</div>
			</div>
		</div>
	)
}
