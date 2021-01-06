import React, { useState } from "react";
import Navigation from "../Components/Navigation";
import Sidebar from "../Components/Sidebar";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Projects from "../Components/Projects";
import { projects } from "../data/data";
import Skills from "../Components/Skills";

const Home = () => {
	return (
		<>
			<Hero />
			<About />
			<Contact />
			<Projects projects={projects} />
			<Skills />
			<Footer />
		</>
	);
};

export default Home;
