// import dependencies
import React, { useState } from 'react'

// import files, components
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    // a function that will update the state and revert it back to the original state
    const toggle = () => {
        // set the state from false to true
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Hero />
        </>
    )
}

export default Home
