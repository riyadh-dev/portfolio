/* eslint-disable solid/reactivity */
import { createEffect, createSignal } from 'solid-js';
import THEME from './components/ThemePanel/data';

export const activeFontSizeIndexSignal = createSignal(2);
export const activeColorHueIndexSignal = createSignal(2);
export const activeBackgroundColorIndexSignal = createSignal(1);

export const themeInit = () => {
	activeFontSizeIndexSignal[1](
		parseInt(localStorage.getItem('activeFontSizeIndex') ?? '2', 10)
	);
	activeColorHueIndexSignal[1](
		parseInt(localStorage.getItem('activeColorHueIndex') ?? '2', 10)
	);
	activeBackgroundColorIndexSignal[1](
		parseInt(localStorage.getItem('activeBackgroundColorIndex') ?? '1', 10)
	);
};

export const themeEffect = () =>
	createEffect(() => {
		localStorage.setItem(
			'activeFontSizeIndex',
			activeFontSizeIndexSignal[0]().toString()
		);
		localStorage.setItem(
			'activeColorHueIndex',
			activeColorHueIndexSignal[0]().toString()
		);
		localStorage.setItem(
			'activeBackgroundColorIndex',
			activeBackgroundColorIndexSignal[0]().toString()
		);

		const docStyle = document.querySelector('html')?.style;
		if (docStyle) {
			docStyle.fontSize = THEME.fontSizes[activeFontSizeIndexSignal[0]()];
			docStyle.setProperty(
				'--primary-color-hue',
				THEME.colorHues[activeColorHueIndexSignal[0]()]
			);
			docStyle.setProperty(
				'--light-color-lightness',
				THEME.backgrounds[activeBackgroundColorIndexSignal[0]()].values[0]
			);
			docStyle.setProperty(
				'--dark-color-lightness',
				THEME.backgrounds[activeBackgroundColorIndexSignal[0]()].values[1]
			);
			docStyle.setProperty(
				'--white-color-lightness',
				THEME.backgrounds[activeBackgroundColorIndexSignal[0]()].values[2]
			);
		}
	});
