import React from 'react'
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon,
    SideBtnWrap,
    SidebarLink,
    SidebarMenu,
    SidebarWrapper,
    SidebarRoute    
} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle} >
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about">About</SidebarLink>
                    <SidebarLink to="about">About</SidebarLink>
                    <SidebarLink to="about">About</SidebarLink>
                    <SidebarLink to="about">About</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    {/* <SidebarRoute to="/Whitepaper">Whitepaper</SidebarRoute> */}
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
