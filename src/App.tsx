import { useState } from 'react';
import './App.css';
import About from './components/About';
import Experience from './components/Experience';
import GallerySlider from './components/GallerySlider';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ThemePanel from './components/ThemePanel';
import useTheme from './hooks/useTheme';

function App() {
	const [openThemePanel, setOpenThemePanel] = useState(false);
	const handleOpenThemePanel = () => setOpenThemePanel(true);
	const handleCloseThemePanel = () => setOpenThemePanel(false);

	const [openGallerySlider, setOpenGallerySlider] = useState(false);
	const [images, setImages] = useState<string[]>([]);
	const handleOpenGallerySlider = (images: string[]) => () => {
		setImages(images);
		setOpenGallerySlider(true);
	};
	const handleCloseGallerySlider = () => setOpenGallerySlider(false);

	useTheme();
	return (
		<div className='App'>
			<Navbar handleOpenThemePanel={handleOpenThemePanel} />
			<main className='main-content'>
				<Home />
				<About />
				<Skills />
				<Experience />
				<Projects handleOpenGallerySlider={handleOpenGallerySlider} />
			</main>
			{openGallerySlider && (
				<GallerySlider
					images={images}
					handleCloseGallerySlider={handleCloseGallerySlider}
				/>
			)}
			{openThemePanel && (
				<ThemePanel handleCloseThemePanel={handleCloseThemePanel} />
			)}
		</div>
	);
}

export default App;
