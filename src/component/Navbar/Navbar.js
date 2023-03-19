import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { useState } from 'react'
const Navbar=()=> {
    const [bur_class, setburclass] = useState("burgerl")
    const [menu_class, setMenuclass] = useState("menu hidden")
    const [ IsmenuClicked, setIsmenuClicked ] = useState(false)

    const BurClicked = ()=>{
        if(!IsmenuClicked){
            console.log("visible")
            setburclass("burgerl")
            setMenuclass("menu visible")

        }
        else{
            console.log("hidden")
            setburclass("burgerl")
            setMenuclass("menu hidden")
        }
        setIsmenuClicked(!IsmenuClicked)
    }
    
    

    return (
        <nav id='Navbar'>
            <div className="navi">
                <div className="Logo"></div>
                <Link to="/Home" id='Home' className='navbar'>Home</Link>
                <Link to="/About us" id='About us' className='navbar'>About us</Link>
                {/* <Link to="/Project" id='Project' className='navbar'>Project</Link>
                    <Link to="/Our Work" id='Our Work' className='navbar'>Our Work</Link> */}
                <Link to="/Contact us" id='Contact us' className='navbar'>Contact us</Link>
                <Link to="/Login" id='Contact us' className='navbar'>Login</Link>
                <Link to="/SignIn" id='Contact us' className='navbar'>Sign Up</Link>
                <div className="Hamburger" onClick={BurClicked}  >
                    <div className={bur_class} id='Ham1' ></div>
                    <div className={bur_class} id='Ham2' ></div>
                    <div className={bur_class} id='Ham3' ></div>
                </div>
           

                <div className={menu_class}>
                    
                    <div className="HamMenu">

                <Link to="/Home" id='Home' className='navbar'>Home</Link>
                <Link to="/About us" id='About us' className='navbar'>About us</Link>
                {/* <Link to="/Project" id='Project' className='navbar'>Project</Link>
                    <Link to="/Our Work" id='Our Work' className='navbar'>Our Work</Link> */}
                <Link to="/Contact us" id='Contact us' className='navbar'>Contact us</Link>
                <Link to="/Login" id='Contact us' className='navbar'>Login</Link>
                <Link to="/SignIn" id='Contact us' className='navbar'>Sign Up</Link>
                    </div>
                </div>


            </div>

        </nav>
    )
}
export default Navbar