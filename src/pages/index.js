import React, { useState } from 'react'
import Navigation from '../Components/Navigation'
import Sidebar from '../Components/Sidebar'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Contact from '../Components/Contact'

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
        </>
    )
}

export default Home
