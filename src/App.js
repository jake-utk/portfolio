import React, { useState, useEffect } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages";
import Sidebar from "./Components/Sidebar";
import Navigation from "./Components/Navigation";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		Aos.init({});
	}, []);

	return (
		<>
			<Navigation toggle={toggle} />
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<Switch>
				<Route path='/' component={Home} exact />
			</Switch>
		</>
	);
}

export default App;
