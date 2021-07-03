import React from 'react'

// import images and store them as values
import Icon1 from '../../images/pic6.svg'
import Icon2 from '../../images/pic4.svg'
import Icon3 from '../../images/pic5.svg'

// import styled components
import { ServicesContainer, ServicesH1, ServicesCard, ServicesH2, ServicesIcon, ServicesWrapper, ServicesP } from './ServicesElement'
// Services Component
const Services = () => {
    return (
        <>
            <ServicesContainer id="services">
                <ServicesH1>
                    Our Services
                </ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={Icon1} />
                        <ServicesH2>
                            Who Are We
                        </ServicesH2>
                        <ServicesP>
                            Your success is our priority. If you suceed we feel like we succeeded. 
                        </ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon2} />
                        <ServicesH2>
                            Our Prices Are Competitive
                        </ServicesH2>
                        <ServicesP>
                            With competitive pricing we take pride in the quality of services provide and help you grow your business
                        </ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon3} />
                        <ServicesH2>
                            100% Money Back Guarantee
                        </ServicesH2>
                        <ServicesP>
                            All of our services are backed by a 100% money back guarantee if the promised service is not delivered on schedule
                        </ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>
        </>
    )
}

export default Services
