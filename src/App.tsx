import { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ThemePanel from './components/ThemePanel';
import useTheme from './hooks/useTheme';

function App() {
	const [openThemePanel, setOpenThemePanel] = useState(false);
	const handleOpenThemePanel = () => setOpenThemePanel(true);
	const handleCloseThemePanel = () => setOpenThemePanel(false);

	useTheme();

	return (
		<div className='App'>
			<Navbar handleOpenThemePanel={handleOpenThemePanel} />
			<main className='main-content'>
				<Home />
			</main>
			{openThemePanel && (
				<ThemePanel handleCloseThemePanel={handleCloseThemePanel} />
			)}
		</div>
	);
}

export default App;
