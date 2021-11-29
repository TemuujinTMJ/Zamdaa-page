import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElements';
import { LogoImg } from './HeroElements';
import tokenlogo from '../../images/tokenlogo.png'
// import pdf from '../../images/WP.pdf'
import { 
    HeroContainer, 
    HeroBg, 
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight,
} from './HeroElements';
// import { Button } from 'react-scroll';

const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)

    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <LogoImg src={tokenlogo} />
                <HeroH1>ZMD Токен гэж юу вэ?</HeroH1>
                <HeroP> Хүн бүрт хамааралтай түгжрэлийн асуудлыг оновчтой шийдвэрлэх, орчин үеийн зорчигч тээврийн шийдлийн токен </HeroP>
                <HeroBtnWrapper>
                    <Button onMouseEnter={onHover} onMouseLeave={onHover}>
                     ZMD токен сонирхох {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;