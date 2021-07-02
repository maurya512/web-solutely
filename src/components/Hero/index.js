import React, { useState } from 'react'
// import { FaArrowRight } from 'react-icons/fa'
// src file for the video
import Video from '../../video/vid1.mp4'
// import styled components from corresponding files
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
import { Button } from '../ButtonElement'

const Hero = () => {

    // useState to change the shapes on the button
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HeroContainer id="home">
            <HeroBg>
                {/* describing playback and source of the video */}
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            {/* text for the hero container */}
            <HeroContent>
                <HeroH1>
                    Web Development and Design Made Easy
                </HeroH1>
                <HeroP>
                    Allow us to cater to your online business needs
                </HeroP>
                <HeroBtnWrapper>
                    {/* will call the function when mouse hovers over on and off the button */}
                    <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
                        {/* a button with changing arrow shapes when hovered over it */}
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
