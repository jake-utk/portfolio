import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home/Home";
import AboutMe from "./Components/AboutMe/AboutMe";
import Resume from "./Components/Resume/Resume";
import Contact from "./Components/Contact/Contact";
import BurgerMenu from "./Components/BurgerMenu/BurgerMenu";
import { Route, Link } from "react-router-dom";

function App() {
	return (
		<div className='App'>
			<BurgerMenu
				pageWrapId={"page-wrap"}
				outerContainerId={"outer-container"}
			/>
			<div id='page-wrap'>
				<div className='logo-header'>
					<Link to='/resume' className='header-link'>
						<h1>*CURRENTLY FOR HIRE*</h1>
					</Link>
				</div>
				<div className='main'>
					<Route path='/' exact component={Home} />
					<Route path='/aboutme' component={AboutMe} />
					<Route path='/projects' />
					<Route path='/resume' component={Resume} />
					<Route path='/contact' component={Contact} />
				</div>
			</div>
			<footer>
				Developed by{" "}
				<a href='https://github.com/jake-utk' target='_blank'>
					Jake Addis
				</a>{" "}
				© 2021. Please hire me!
			</footer>
		</div>
	);
}

export default App;
