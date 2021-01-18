import React, { useState } from "react";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Projects from "../Components/Projects";
import { projects } from "../data/data";
import Skills from "../Components/Skills";
import ProjectBar from "../Components/ProjectBar";
// import Info from "../Components/About/Info";

const Home = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [project, setProject] = useState({});

	const toggle = () => setIsOpen(!isOpen);

	return (
		<>
			<Hero />
			{/* <Info /> */}
			<About />
			<Contact />
			<ProjectBar isOpen={isOpen} toggle={toggle} project={project} />
			<Projects projects={projects} toggle={toggle} setProject={setProject} />
			<Skills />
			<Footer />
		</>
	);
};

export default Home;
