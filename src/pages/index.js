import React, { useState } from 'react'
import Navigation from '../Components/Navigation'
import Sidebar from '../Components/Sidebar'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'
import Projects from '../Components/Projects'
import Skills from '../Components/Skills'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navigation toggle={toggle} />
            <Hero />
            <About />
            <Contact />
            <Projects />
            <Skills />
            <Footer />
        </>
    )
}

export default Home
