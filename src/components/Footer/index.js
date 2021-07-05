import React from 'react'

// import styled components from their corresponding files
import { FooterContainer, FooterWrap, FooterLinkItems, FooterLink, FooterLinkTitle, FooterLinksContainer, FooterLinksWrapper } from './FooterElement'
const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>
                                About Us
                            </FooterLinkTitle>
                            <FooterLink to="/signin">
                                How It Works
                            </FooterLink>
                            <FooterLink to="/signin">
                                Testimonials
                            </FooterLink>
                            <FooterLink to="/signin">
                                Social Media
                            </FooterLink>
                            <FooterLink to="/signin">
                                Terms and Conditions
                            </FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>
                                Videos
                            </FooterLinkTitle>
                            <FooterLink to="/signin">
                                Submit A Request
                            </FooterLink>
                            <FooterLink to="/signin">
                                Agency
                            </FooterLink>
                            <FooterLink to="/signin">
                                Social Media
                            </FooterLink>
                            <FooterLink to="/signin">
                                Terms and Conditions
                            </FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>
                                Contact Us
                            </FooterLinkTitle>
                            <FooterLink to="/signin">
                                Contact
                            </FooterLink>
                            <FooterLink to="/signin">
                                Locations
                            </FooterLink>
                            <FooterLink to="/signin">
                                Social Media
                            </FooterLink>
                            <FooterLink to="/signin">
                                Terms and Conditions
                            </FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>
                                Security Measures
                            </FooterLinkTitle>
                            <FooterLink to="/signin">
                                Money Back Guarantee
                            </FooterLink>
                            <FooterLink to="/signin">
                                Reviews
                            </FooterLink>
                            <FooterLink to="/signin">
                                Social Media
                            </FooterLink>
                            <FooterLink to="/signin">
                                Terms and Conditions
                            </FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
