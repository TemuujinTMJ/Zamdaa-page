import React, {useState, useEffect} from 'react'
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll'
import logo from '../../images/zamdaa-logo.png'

import { 
    Nav, 
    NavbarContainer, 
    NavLinks, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem,
    NavBtn,
    NavBtnLink,

    DropDownLi,
    Dropbtn,
    DropDownContent
} from './NavbarElements'

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav =()=> {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);
    
    const toggleHome = () => {
        scroll.scrollToTop();
    };


    return (
        <>
        <IconContext.Provider value={{ color: '#fff'}}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo  to="/" onClick={toggleHome} src={logo}>Zamdaa</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        {/* <NavItem>
                            <NavLinks onClick={toggleHome}>IEO</NavLinks>
                        </NavItem> */}
                        <NavItem>
                            <DropDownLi>
                                <Dropbtn onClick={toggleHome}>
                                    IEO
                                </Dropbtn>
                                <DropDownContent>
                                    <br />
                                    {/* <NavLinks onClick={toggleHome}>Бүртгүүлэх</NavLinks> */}
                                    <NavLinks onClick={toggleHome}>Бүртгүүлэх</NavLinks>
                                    <br />
                                    {/* <NavLinks onClick={toggleHome}>Нэвтрэх</NavLinks> */}
                                    <NavLinks to="/login">Нэвтрэх</NavLinks>
                                    <br />
                                    <NavLinks onClick={toggleHome}>Миний булан</NavLinks>
                                    <br />
                                    <NavLinks onClick={toggleHome}>Худалдан авах</NavLinks>
                                </DropDownContent>
                            </DropDownLi>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                            to='about'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            >Бидний тухай</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                            to='services'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            >Төслүүд</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to={""} target='_blank'><span>Whitepaper Удахгүй</span></NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar;
