import React, { useState } from "react";
import Hero from "../Components/Hero";
import Info from "../Components/Info";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Projects from "../Components/Projects";
import { projects, infoOne, infoTwo } from "../data/data";
import Skills from "../Components/Skills";
import ProjectBar from "../Components/ProjectBar";

const Home = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [project, setProject] = useState({});

	const toggle = () => setIsOpen(!isOpen);

	return (
		<>
			<Hero />
			<Info {...infoOne} />
			<Info {...infoTwo} />
			<Skills />
			<ProjectBar isOpen={isOpen} toggle={toggle} project={project} />
			<Projects projects={projects} toggle={toggle} setProject={setProject} />
			<Contact />
			<Footer />
		</>
	);
};

export default Home;
