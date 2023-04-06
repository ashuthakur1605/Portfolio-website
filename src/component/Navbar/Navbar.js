import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { useState } from 'react'
const Navbar = () => {
    const [Navbar, setNavbar] = useState('naviC')
    const [Hnavbar_class, setHNavbarclass] = useState("Hnavbar")
    const [bur_class, setburclass] = useState("burgerl unclicked")
    const [menu_class, setMenuclass] = useState("menu hidden")
    const [IsmenuClicked, setIsmenuClicked] = useState(false)

    const BurClicked = () => {
        if (!IsmenuClicked) {
            // console.log("visible")
            setburclass("burgerl clicked")
            setMenuclass("menu visible")
            setHNavbarclass("Hnavbar")
            setNavbar("navi")

        }
        else {
            // console.log("hidden")
            setburclass("burgerl unclicked")
            setMenuclass("menu hidden")
            setHNavbarclass("Hnavbar")
            setNavbar("naviC")

        }
        setIsmenuClicked(!IsmenuClicked)
    }



    return (
        <nav id='Navbar'>
            <div className={Navbar}>
                <div className="Logo"></div>
                <Link to="/Home" id='Home' className='navbar'>Home</Link>
                <Link to="/About us" id='About us' className='navbar'>About us</Link>
                {/* <Link to="/Project" id='Project' className='navbar'>Project</Link>
                    <Link to="/Our Work" id='Our Work' className='navbar'>Our Work</Link> */}
                <Link to="/Contact us" id='Contact us' className='navbar'>Contact us</Link>

                <Link to="/Login" id='Login' className='contact-us'>Login</Link>

                {/* <Link to="/SignIn" id='Sign-up' className='navbar contact-us'>Sign Up</Link> */}
                <div className="Hamburger" onClick={BurClicked}  >
                    <div className={bur_class} id='Ham1' ></div>
                    <div className={bur_class} id='Ham2' ></div>
                    <div className={bur_class} id='Ham3' ></div>
                </div>


                <div className={menu_class}>

                    <div className="HamMenu">

                        <Link to="/Home" id='Home' className={Hnavbar_class}>Home</Link>
                        <Link to="/About us" id='About us' className={Hnavbar_class}>About us</Link>
                        <Link to="/Contact us" id='Contact us' className={Hnavbar_class}>Contact us</Link>
                        <Link to="/Login" id='Contact us' className={Hnavbar_class}>Login</Link>

                    </div>
                </div>


            </div>

        </nav>
    )
}
export default Navbar