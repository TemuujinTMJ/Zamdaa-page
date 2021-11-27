import React from 'react'
import { Button } from '../ButtonElements';
import img from '../../images/infocar.png'
import { 
    Column2,
    ImgWrap,
    InfoContainer,
    Column1,
    InfoRow,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    Img,
    InfoWrapper
    
 } from './InfoElements'


const InfoSection = ({
    lightBg, 
    id, 
    imgStart, 
    headline, 
    topLine, 
    lightText, 
    description,
    description1,
    // description2, 
    darkText, 
    buttonLabel, 
    alt,
    primary,
    dark,
    dark2
}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <Subtitle darkText={darkText}>{description1}</Subtitle>
                                {/* <Subtitle darkText={darkText}>{description2}</Subtitle> */}
                                <BtnWrap>
                                    <Button to='home'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                    primary={primary ? 1 : 0}
                                    dark={dark ? 1 : 0}
                                    dark2={dark2 ? 1 : 0}
                                    >{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>   
        </>
    )
}

export default InfoSection
