import React from 'react'
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon,
    SideBtnWrap,
    SidebarLink,
    SidebarMenu,
    SidebarWrapper,
    // SidebarRoute
} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle} >
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/">IEO</SidebarLink>
                    <SidebarLink to="about">Бидний тухай</SidebarLink>
                    <SidebarLink to="services">Төслүүд</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarLink>Zamdaa LLC</SidebarLink>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
