import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTelegram, FaTwitter } from 'react-icons/fa';
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
                        <WebsiteRights>Zamdaa LLC Ⓒ 2021 copyright {new Date().getFullYear} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconsLink href='https://www.facebook.com/zamdaa' target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconsLink>
                            <SocialIconsLink href='https://www.instagram.com/mashintureesmn/' target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconsLink>
                            <SocialIconsLink href='https://t.me/zmdofficial' target="_blank" aria-label="Telegram">
                                <FaTelegram />
                            </SocialIconsLink>
                            <SocialIconsLink href='https://www.linkedin.com/company/zamdaa' target="_blank" aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconsLink>
                            <SocialIconsLink href="https://twitter.com/zamdaa_app" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconsLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
