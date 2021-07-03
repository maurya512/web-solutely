// styling for the services component
import styled from 'styled-components'

// styling for the services container
export const ServicesContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;

    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`
// styling for services wrapper
export const ServicesWrapper = styled.div`
max-width: 1000px;
margin: 0 auto;
display: grid;
/* displays the icons in 3 separate columns */
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 16px;
padding: 0 50px;

@media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
}

@media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
}
`
// styling for ServicesCard
export const ServicesCard = styled.div`
background: #fff;
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
align-items: center;
border-radius: 10px;
max-height: 340px;
padding: 30px;
box-shadow: 0 1px 3px rgba(0,0,0, 0.2);
transition: all 0.2s ease-in-out;

&:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}
`

// styling for services icon
export const ServicesIcon = styled.img`
height: 160px;
width: 160px;
margin-bottom: 10px;
`

// styling for services h1
export const ServicesH1 = styled.h1`
font-size: 2.5rem;
color: #fff;
margin-bottom: 64px;

@media screen and (max-width: 480px) {
    font-size: 2rem;
}
`

// styling for services h2
export const ServicesH2 = styled.h2`
font-size: 1rem;
margin-bottom: 10px;
`

// styling for services p 
export const ServicesP = styled.p`
font-size: 1rem;
text-align: center;
`

