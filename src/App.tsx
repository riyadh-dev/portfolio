import type { Component } from 'solid-js';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

const App: Component = () => {
	return (
		<>
			<Navbar />
			<main class='main-content'>
				<Home />
				<About />
				<Skills />
				<Experience />
				<Projects />
				<Contact />
				<Footer />
			</main>
		</>
	);
};

export default App;
