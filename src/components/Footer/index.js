import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

// import styled components from their corresponding files
import { FooterContainer, FooterWrap, FooterLinkItems, FooterLink, FooterLinkTitle, FooterLinksContainer, FooterLinksWrapper, SocialIconLink, SocialIcons, SocialLogo, SocialMediaWrap, SocialMediaIcons, WebsiteRights } from './FooterElement'
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
                {/* a designated footer area for social media icons */}
                <SocialMediaIcons>
                    <SocialMediaWrap>
                        <SocialLogo to="/">
                            WebSolutely
                        </SocialLogo>
                        <WebsiteRights>
                            WebSolutely © {new Date().getFullYear()} All Rights Reserved
                        </WebsiteRights>
                        <SocialIcons>
                            {/* _blank opens the link in a new tab. ideal for redirecting the users to a different page on a new tab */}
                            <SocialIconLink href="//www.facebook.com/mauryap512" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMediaIcons>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
