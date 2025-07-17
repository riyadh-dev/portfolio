import { createEffect, createSignal, For, onCleanup, onMount } from 'solid-js'
import THEME from '~/static/theme'
import clickOutside from '~/utils/click-outside'

import '~/styles/theme-panel.css'

export default function ThemePanel(props: { closeThemePanel: () => void }) {
	const [fontSize, setFontSize] = createSignal(
		localStorage.getItem('font-size') ?? 'base'
	)
	const [primary, setPrimary] = createSignal(
		localStorage.getItem('primary') ?? 'rose'
	)
	const [bg, setBg] = createSignal(localStorage.getItem('bg') ?? 'dark')

	createEffect(() => {
		document.documentElement.dataset.fontSize = fontSize()
		localStorage.setItem('font-size', fontSize())
	})

	createEffect(() => {
		document.documentElement.dataset.primary = primary()
		localStorage.setItem('primary', primary())
	})

	createEffect(() => {
		document.documentElement.dataset.bg = bg()
		localStorage.setItem('bg', bg())
	})

	onMount(() => (document.body.style.overflow = 'hidden'))

	onCleanup(() => {
		document.body.style.position = ''
		document.body.style.overflow = 'auto'
	})

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
								{(val) => (
									<button
										aria-label={`font-${val}`}
										onClick={[setFontSize, val]}
										data-font-size={val}
										classList={{
											active: val === fontSize(),
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
						<For each={THEME.primary}>
							{(val) => (
								<button
									aria-label={`primary-${val}`}
									onClick={[setPrimary, val]}
									data-primary={val}
									classList={{
										active: val === primary(),
									}}
								/>
							)}
						</For>
					</div>
				</div>

				<div class='theme-background'>
					<h3>Theme Mode</h3>
					<div>
						<For each={THEME.bg}>
							{(val) => (
								<button
									style={{ width: '100%' }}
									onClick={[setBg, val]}
									data-bg={val}
									classList={{
										active: val === bg(),
									}}
								>
									{val}
								</button>
							)}
						</For>
					</div>
				</div>
			</div>
		</div>
	)
}
