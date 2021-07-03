// import images from images folder
import pic1 from '../../images/pic1-1.svg'
import pic2 from '../../images/pic2.svg'

// a reusable component that can be used multiple times with different data files for each separate component
export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Premium Services',
    headline: 'Having a strong online presence is as easy as 1..2..3',
    description: 'At WebSolutely we strive to provide solutions to all your Web Development realted needs.',
    buttonLabel: 'Get Started',
    imgStart: false,
    img: pic1,
    alt: 'A guy waiving',
    dark: true,
    primary: true,
    darkText: false
};

// data for the second object 
export const homeObjTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Our Services',
    headline: 'Exclusive 1-1 consultation for new members.',
    description: 'Speak with our lead project managers to get started with setting up your online services.',
    buttonLabel: 'Learn More',
    imgStart: true,
    img: pic2,
    alt: 'A lady staring at the screen',
    dark: false,
    primary: false,
    darkText: true
}