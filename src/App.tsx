import { useState } from 'react';
import './App.css';
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
			{openThemePanel && (
				<ThemePanel handleCloseThemePanel={handleCloseThemePanel} />
			)}
		</div>
	);
}

export default App;
