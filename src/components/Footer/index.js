import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { 
    FooterContainer,
    FooterWrap,
    SocialIcons,
    SocialIconsLink,
    SocialLogo,
    SocialMediaWrap,
    WebsiteRights,
    SocialMedia
 } from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia> 
                    <SocialMediaWrap>
                        <SocialLogo to='/'>Zamdaa LLC</SocialLogo>
                        <WebsiteRights>Zamdaa LLC 2021 copyright {new Date().getFullYear} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconsLink href='/' target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconsLink>
                            <SocialIconsLink href='/' target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconsLink>
                            <SocialIconsLink href='/' target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconsLink>
                            <SocialIconsLink href='/' target="_blank" aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconsLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
