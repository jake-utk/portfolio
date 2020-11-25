import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home/Home";

function App() {
	return (
		<div className='App'>
			<header></header>

			<Home />

			<footer>
				Developed by <a href='https://github.com/jake-utk' target="_blank">Jake Addis</a> ©
				2021. Please hire me!
			</footer>
		</div>
	);
}

export default App;
