import React from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/sidebar'
import { useState } from 'react'
import HeroSection from '../../components/HeroSection'
import InfoSection from '../../components/InfoSection'
import { homeObjOne } from '../../components/InfoSection/Data'
import Register from '../../components/Register'
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
            <Register />
            <Footer />
        </>
        
    )
}

export default Login
