import { useEffect, useState } from 'preact/hooks';
import THEME from '../components/ThemePanel/data';

const useTheme = () => {
	const [activeFontSizeIndex, setActiveFontSizeIndex] = useState(
		parseInt(localStorage.getItem('activeFontSizeIndex') ?? '2', 10)
	);
	const [activeColorHueIndex, setActiveColorHueIndex] = useState(
		parseInt(localStorage.getItem('activeColorHueIndex') ?? '2', 10)
	);
	const [activeBackgroundColorIndex, setActiveBackgroundColorIndex] = useState(
		parseInt(localStorage.getItem('activeBackgroundColorIndex') ?? '0', 10)
	);

	const docStyle = document.querySelector('html')?.style;

	useEffect(() => {
		if (docStyle) docStyle.fontSize = THEME.fontSizes[activeFontSizeIndex];
	}, [activeFontSizeIndex, docStyle]);

	useEffect(() => {
		if (docStyle)
			docStyle.setProperty(
				'--primary-color-hue',
				THEME.colorHues[activeColorHueIndex]
			);
	}, [activeColorHueIndex, docStyle]);

	useEffect(() => {
		if (docStyle) {
			docStyle.setProperty(
				'--light-color-lightness',
				THEME.backgrounds[activeBackgroundColorIndex].values[0]
			);
			docStyle.setProperty(
				'--dark-color-lightness',
				THEME.backgrounds[activeBackgroundColorIndex].values[1]
			);
			docStyle.setProperty(
				'--white-color-lightness',
				THEME.backgrounds[activeBackgroundColorIndex].values[2]
			);
		}
	}, [activeBackgroundColorIndex, docStyle]);

	return {
		activeBackgroundColorIndex,
		setActiveBackgroundColorIndex,
		activeColorHueIndex,
		setActiveColorHueIndex,
		activeFontSizeIndex,
		setActiveFontSizeIndex,
	};
};

export default useTheme;
