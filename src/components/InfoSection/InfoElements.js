// styled components for InfoElements
import styled from 'styled-components'

// styled components for InfoContainer
export const InfoContainer = styled.div`
color: #fff;
background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#010606')};


@media screen and (max-width: 768px) {
    padding: 100px 0;
}
`

// styled components for InfoWrapper
export const InfoWrapper = styled.div`
display: grid;
z-index: 1;
height: 860px;
width: 100%;
max-width: 1100px;
margin-right: auto;
margin-left: auto;
padding: 0 24px;
justify-content: center;
`

// styled components for InfoRow
export const InfoRow = styled.div`
display: grid;
grid-auto-columns: minmax(auto, 1fr);
align-items: center;
// css grid positioning of columns side by side
grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

@media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}; 
}
`

// styled components for Column1
export const Column1 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col1;
`

// styled components for Column2
export const Column2 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col2;
`

// styled components for TextWrapper 
export const TextWrapper = styled.div`
max-width: 540px;
padding-top: 0;
padding-bottom: 60px;
`

// styled components for TopLine
export const TopLine = styled.p`
color: #01bf71;
font-size: 16px;
line-height: 16px;
font-weight: 700;
letter-spacing: 1.4px;
text-transform: uppercase;
margin-bottom: 16px;
`

// styled components for Heading
export const Heading = styled.h1`
margin-bottom: 24px;
font-size: 48px;
line-height: 1.1;
font-weight: 600;
color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};

@media screen and (max-width: 480px) {
    font-size: 32px;
}
`

// styled components for Subtitle 
export const SubTitle = styled.p`
max-width: 440px;
margin-bottom: 35px;
font-size: 18px;
line-height: 24px;
color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
`
// styled components for BtnWrapper
export const BtnWrap = styled.div`
display: flex;
justify-content: flex-start;
`

// styled components for ImgWrap
export const ImgWrap = styled.div`
max-width: 555px;
height: 100%;
`

// styled components for Img
export const Img = styled.img`
width: 100%;
margin: 0 0 10px 0;
padding-right: 0;
`

