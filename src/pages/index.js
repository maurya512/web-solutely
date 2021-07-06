// import dependencies
import React, { useState } from 'react'

// import files, components
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import InfoSection from '../components/InfoSection'
import { homeObjFour, homeObjOne, homeObjTwo } from '../components/InfoSection/Data'
import Services from '../components/Services'
import Footer from '../components/Footer'
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
            {/* pass in the data from the InfoSection's Data */}
            <InfoSection {...homeObjOne} />
            {/* second data object */}
            <InfoSection {...homeObjTwo} />
            {/* third data object */}
            {/* <InfoSection {...homeObjThree} /> */}
            {/* Services Component */}
            <Services />
            {/* sign up section */}
            <InfoSection {...homeObjFour} />
            <Footer />
        </>
    )
}

export default Home
