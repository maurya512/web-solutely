import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrapper, SidebarRoutes } from './SidebarElements'

const Sidebar = () => {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about">
                        About
                    </SidebarLink>
                    <SidebarLink to="services">
                        Services
                    </SidebarLink>
                    <SidebarLink to="signup">
                        Sign Up
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrapper>
                    <SidebarRoutes to="/signin">
                        Sign In
                    </SidebarRoutes>
                </SideBtnWrapper>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
