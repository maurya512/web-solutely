// styled components for the footer
import styled from 'styled-components'
import {Link} from 'react-router-dom'

// styled components for Footercontainer
export const FooterContainer = styled.footer`
background-color: #101522;
`

// styled components for FooterWrap
export const FooterWrap = styled.div`
padding: 48px 24px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 1100px;
margin: 0 auto;
`
// styled components for FooterLinksContainer
export const FooterLinksContainer = styled.div`
display: flex;
justify-content: center;

@media screen and (max-width: 820px) {
    padding-top: 32px;
}
`
// styled components for FooterLinksWrapper 
export const FooterLinksWrapper = styled.div`
display: flex;

@media screen and (max-width: 820px) {
    flex-direction: column;
}
`
// styled components for FooterLinkItems 
export const FooterLinkItems = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin: 16px;
text-align: left;
width: 160px;
box-sizing: border-box;
color: #fff;

@media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%
}
`

// styled components for FooterLinkTitle 
export const FooterLinkTitle = styled.h1`
font-size: 14px;
margin-bottom: 16px;
`

// styled components for FooterLink
export const FooterLink = styled(Link)`
color: #fff;
text-decoration: none;
margin-bottom: 0.5rem;
font-size: 14px;

&:hover {
    color: #Dee507;
    transition: 0.3s ease-out;
}
`



