import './App.css';
import Navbar from './components/Navbar';
import GlobalStyles from './GlobalStyles';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Project from './components/Project';
import { AnimatePresence } from 'framer-motion';
//Router
import { Switch, Route, useLocation } from 'react-router-dom';

function App() {
	const location = useLocation();
	return (
		<div className="App">
			<GlobalStyles />
			<Navbar />
			<AnimatePresence initial={false} exitBeforeEnter>
				<Switch location={location} key={location.pathname}>
					<Route path="/" exact>
						<Home />
					</Route>
					<Route path="/Project" exact>
						<Project />
					</Route>
					<Route path="/Resume">
						<Resume />
					</Route>
					<Route path="/Contact">
						<Contact />
					</Route>
				</Switch>
			</AnimatePresence>
		</div>
	);
}

export default App;
