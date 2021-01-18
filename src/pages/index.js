import React from "react";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Projects from "../Components/Projects";
import { projects } from "../data/data";
import Skills from "../Components/Skills";
import Info from "../Components/About/Info";

const Home = () => {
	return (
		<>
			<Hero />
			<Info />
			<About />
			<Contact />
			<Projects projects={projects} />
			<Skills />
			<Footer />
		</>
	);
};

export default Home;
