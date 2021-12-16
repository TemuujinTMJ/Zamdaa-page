import React from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/sidebar'
import { useState } from 'react'
import HeroSection from '../../components/HeroSection'
import InfoSection from '../../components/InfoSection'
import { homeObjOne } from '../../components/Profile/Data'
import Profile from '../../components/Profile'
import Footer from '../../components/Footer'

const Login = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return(
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <Profile {...homeObjOne} />
            <Footer />
        </>
        
    )
}

export default Login
