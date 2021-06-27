// styled components for the sidebar
// import dependencies 
import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { Link as LinkS } from 'react-scroll'
import { Link as LinkR } from 'react-router-dom'
// import { is } from '@babel/types'

// styled components for the SidebarContainer 
export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    // checks to see if the sidebar is open using ternary operators of sorts
    // checks for true or false
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')}; 
`

// styled components for the close icon
export const CloseIcon = styled(FaTimes)`
color: #fff;
`

// styled components for Icon
export const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`

// styled components for wrapper
export const SidebarWrapper = styled.div`
color: #fff;
`

// styled components for sidebar link
export const SidebarLink = styled(LinkS)`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
transition: 0.2s ease-in-out;
text-decoration: none;
color: #fff;
cursor: pointer;

&:hover {
    color: #DEE507;
    transition: 0.2s ease-in-out;
}
`

// styled components for styled btn wrapper
export const SideBtnWrapper = styled.div`
display: flex;
justify-content: center;
`

// styled components for Sidebar Routes
export const SidebarRoutes = styled(LinkR)`
border-radius: 50px;
background: #DEE507;
white-space: nowrap;
padding: 16px 64px;
color: #010606;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
}
`

// styled components for sidebar menu
export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and(max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }
`
