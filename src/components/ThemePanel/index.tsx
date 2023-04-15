import { useEffect } from 'preact/hooks';
import { JSXInternal } from 'preact/src/jsx';
import useTheme from '../../hooks/useTheme';
import THEME from './data';
import './styles.css';

const ThemePanel = ({
	handleCloseThemePanel: closeThemePanel,
}: {
	handleCloseThemePanel: () => void;
}) => {
	const handleCloseThemePanel: JSXInternal.MouseEventHandler<HTMLDivElement> = (
		e
	) => {
		if ((e.target as HTMLDivElement).id === 'theme-panel-container')
			closeThemePanel();
	};

	const {
		activeBackgroundColorIndex,
		activeColorHueIndex,
		activeFontSizeIndex,
		setActiveBackgroundColorIndex,
		setActiveColorHueIndex,
		setActiveFontSizeIndex,
	} = useTheme();

	useEffect(() => () => {
		localStorage.setItem('activeFontSizeIndex', activeFontSizeIndex.toString());
		localStorage.setItem('activeColorHueIndex', activeColorHueIndex.toString());
		localStorage.setItem(
			'activeBackgroundColorIndex',
			activeBackgroundColorIndex.toString()
		);
	});

	useEffect(() => {
		document.body.style.overflow = 'hidden';
		return () => {
			document.body.style.position = '';
			document.body.style.overflow = 'auto';
		};
	}, []);

	return (
		<div
			className='theme-panel-container'
			id='theme-panel-container'
			onClick={handleCloseThemePanel}
		>
			<div className='theme-panel'>
				<h2>Customize The Theme</h2>
				<p>Manage the font size, color and theme mode.</p>

				<div className='theme-font-size'>
					<h3>Font Size</h3>
					<div className='theme-font-size-slider'>
						<h6>Aa</h6>
						<ul>
							{THEME.fontSizes.map((_, index) => (
								<li
									key={index}
									onClick={() => setActiveFontSizeIndex(index)}
									className={`font-size-${index + 1} ${
										index === activeFontSizeIndex ? 'active' : ''
									}`}
								/>
							))}
						</ul>
						<h3>Aa</h3>
					</div>
				</div>

				<div className='theme-color'>
					<h3>Color</h3>
					<ul>
						{THEME.colorHues.map((_, index) => (
							<li
								key={index}
								onClick={() => setActiveColorHueIndex(index)}
								className={`color-${index + 1} ${
									index === activeColorHueIndex ? 'active' : ''
								}`}
							/>
						))}
					</ul>
				</div>

				<div className='theme-background'>
					<h3>Theme Mode</h3>
					<ul>
						{THEME.backgrounds.map(({ text }, index) => (
							<li
								key={index}
								onClick={() => setActiveBackgroundColorIndex(index)}
								className={`bg-${index + 1} ${
									index === activeBackgroundColorIndex ? 'active' : ''
								}`}
							>
								<span />
								<h5>{text}</h5>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default ThemePanel;
