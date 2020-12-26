import React, { useState } from 'react'
import Navigation from '../Components/Navigation'
import Sidebar from '../Components/Sidebar'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navigation toggle={toggle} />
        </>
    )
}

export default Home
