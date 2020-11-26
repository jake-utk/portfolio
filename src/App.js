import React, { useState } from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import AboutMe from "./Components/AboutMe/AboutMe";
import Resume from "./Components/Resume/Resume";
import Contact from "./Components/Contact/Contact";
import BurgerMenu from "./Components/BurgerMenu/BurgerMenu";
import { Route } from "react-router-dom";
import { AppContext } from "./AppContext";
import Hero from "./Components/Hero/Hero";

function App() {
	const [menuOpenState, setMenuOpenState] = useState(false);

	return (
		<div className='App'>
			<div id='outer-container'>
				<AppContext.Provider value={{ menuOpenState, setMenuOpenState }}>
					<BurgerMenu
						pageWrapId={"page-wrap"}
						outerContainerId={"outer-container"}
					/>
					<div id='page-wrap'>
						<div className='logo-header'>
							<button className='resume-button'>
								<a href='./Resume.pdf' target='_blank' id="resume-button-text">
									Resume
								</a>
							</button>
						</div>
						<Hero />
						<div className='main'>
							<Route path='/' exact component={Home} />
							<Route path='/aboutme' component={AboutMe} />
							<Route path='/projects' />
							<Route path='/resume' component={Resume} />
							<Route path='/contact' component={Contact} />
						</div>
					</div>
				</AppContext.Provider>
				<AboutMe />
			</div>
			<footer>
				Developed by{" "}
				<a href='https://github.com/jake-utk' target='_blank' rel='noreferrer'>
					Jake Addis
				</a>{" "}
				(©2021) using{" "}
				<a href='https://reactjs.org/' target='_blank' rel='noreferrer'>
					React
				</a>
				. Please hire me!
			</footer>
		</div>
	);
}

export default App;
