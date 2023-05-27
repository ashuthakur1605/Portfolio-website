import React from 'react'
import Link from './Homeimg/Link.png'
import Git from './Homeimg/Git.svg'
function footer() {
    const footerStyle = {
        // height: '308px',
        display:"flex",
        width: '100%',
        color: "white",
        background:"blueviolet",
        padding: "10rem 1rem 10rem 1rem"

    }
    const Fdown = {
        // display:"flex",
        // alignItems:"flex-end",
        // justifyContent:"center",
        width: "100%",
        // height: "100px",
        fontSize: "16px",
        textAlign:"right"

    }
    const Fup = {
        width: "100%",
        // height: "200px",
        fontSize: "16px",
        textAlign: "center"

    }
    const PImg = {
        heigh: "52px",
        width: "52px",
        margin: "12px 35px 12px 35px",

    }
    const Address = {
        color:"white",
        width:"37%"

    }
    // const Fcontent={
    //     // padding:"12px 12px 12px 50px"

    // }
    return (
        <footer className='footer' style={footerStyle}>
            <div className="F-left" style={Fup}>
                <a href="https://www.linkedin.com/in/Ashutosh--Singh-/"><img src={Link} style={PImg} alt="" /></a>
                <a href="https://github.com/ashuthakur1605"><img src={Git} style={PImg} alt="" /></a>
            </div>

            <div className="F-right" style={Fdown}>

                <p style={Address}>H.no. 370 Gangasagar Garha Jabalpur
                    (M.P)
                    Mobile-7999854182</p>
            </div>
        </footer>
    )
}

export default footer