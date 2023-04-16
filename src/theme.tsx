import {
	Accessor,
	JSXElement,
	Setter,
	batch,
	createContext,
	createEffect,
	createSignal,
	onMount,
	useContext,
} from 'solid-js';
import THEME from './components/ThemePanel/data';

type TThemeContext = {
	fontSizeIdx: Accessor<number>;
	setFontSizeIdx: Setter<number>;
	colorHueIdx: Accessor<number>;
	setColorHueIdx: Setter<number>;
	bgColorIdx: Accessor<number>;
	setBgColorIdx: Setter<number>;
};

const ThemeContext = createContext<TThemeContext>();

export function ThemeProvider(props: { children: JSXElement }) {
	const [fontSizeIdx, setFontSizeIdx] = createSignal(2);
	const [colorHueIdx, setColorHueIdx] = createSignal(2);
	const [bgColorIdx, setBgColorIdx] = createSignal(1);

	createEffect(() => {
		const docStyle = document.querySelector('html')?.style;
		if (docStyle) {
			docStyle.fontSize = THEME.fontSizes[fontSizeIdx()];
			docStyle.setProperty(
				'--primary-color-hue',
				THEME.colorHues[colorHueIdx()]
			);
			docStyle.setProperty(
				'--light-color-lightness',
				THEME.backgrounds[bgColorIdx()].values[0]
			);
			docStyle.setProperty(
				'--dark-color-lightness',
				THEME.backgrounds[bgColorIdx()].values[1]
			);
			docStyle.setProperty(
				'--white-color-lightness',
				THEME.backgrounds[bgColorIdx()].values[2]
			);
		}
	});

	onMount(() =>
		batch(() => {
			setFontSizeIdx(parseInt(localStorage.getItem('fontSizeIdx') ?? '2', 10));
			setColorHueIdx(parseInt(localStorage.getItem('colorHueIdx') ?? '2', 10));
			setBgColorIdx(parseInt(localStorage.getItem('bgColorIdx') ?? '1', 10));
		})
	);

	const theme = {
		fontSizeIdx,
		setFontSizeIdx,

		colorHueIdx,
		setColorHueIdx,

		bgColorIdx,
		setBgColorIdx,
	};

	return (
		<ThemeContext.Provider value={theme}>
			{props.children}
		</ThemeContext.Provider>
	);
}

export function useTheme() {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error(`useTheme must be used within a ThemeProvider`);
	}
	return context;
}
