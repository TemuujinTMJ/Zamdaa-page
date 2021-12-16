import React from 'react'
// import { Button } from '../ButtonElements'
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
    // BtnWrap,
    Img,
    InfoWrapper
    
 } from './ProfileElements'


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
