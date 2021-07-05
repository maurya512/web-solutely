// import images from images folder
import pic1 from '../../images/pic1-1.svg'
import pic8 from '../../images/pic8.svg'
import pic3 from '../../images/pic3.svg'
import pic7 from '../../images/pic7.svg'

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
    img: pic8,
    alt: 'A lady staring at the screen',
    dark: false,
    primary: false,
    darkText: true
}

// data for the third object
export const homeObjThree = {
    id: 'signup',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Connect With Us',
    headline: 'Creating an account with is extremely easy',
    description: 'Get everything set up and ready as early as the first call*.',
    buttonLabel: 'Sign Up',
    img: pic3,
    alt: 'A person',
    dark: true,
    primary: true,
    darkText: false
}

// data for sign up section
export const homeObjFour = {
    id: 'signup',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Sign Up',
    headline: 'Why wait. Sign up right now and take advantage of all the exclusive services we offer.',
    description: "Signing up for an account with us is the best decision you're gonna make for your business.",
    buttonLabel: 'Sign Up',
    imgStart: true,
    img: pic7,
    alt: 'sign up img',
    dark: false,
    primary: false,
    darkText: true
}