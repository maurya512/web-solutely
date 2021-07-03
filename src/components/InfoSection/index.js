import React from 'react'

// import styled components from InfoElement
import { InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine, Heading, SubTitle, BtnWrap, Img, ImgWrap, Column2 } from './InfoElements'
import { Button } from '../ButtonElement'

const InfoSection = ({ lightBg, imgStart, topLine, lightText, headline, description, darkText, buttonLabel, img, alt, id, primary, dark, dark2 }) => {

    // useState function to set hover functionality of the button
    // const [hover, setHover] = useState(false)

    // const onHover = () => {
    //     setHover(!hover)
    // }

    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>
                                    {topLine}
                                </TopLine>
                                <Heading lightText={lightText}>
                                    {headline}
                                </Heading>
                                <SubTitle darkText={darkText}>
                                    {description}
                                </SubTitle>
                                <BtnWrap>
                                    <Button to="home" smooth={true}
                                        duration={500} spy={true} exact="true" offset={-80} primary={primary ? 1 : 0} dark={dark ? 1 : 0} dark2={dark2 ? 1 : 0}>
                                        {buttonLabel}
                                    </Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
