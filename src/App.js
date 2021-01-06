import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import GlobalStyle from "./globalStyles";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
	useEffect(() => {
		Aos.init({});
	}, []);

	return (
		<Router>
			<GlobalStyle />
			<Switch>
				<Route path='/' component={Home} exact />
			</Switch>
		</Router>
	);
}

export default App;
