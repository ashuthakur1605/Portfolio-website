import React from 'react'

function footer() {
    const footerStyle = {

        height: '308px',
        width: '100%',
        // border: '2px solid red',
        backgroundColor: 'grey',
        color:"white",

    }
    const Fdown = {
        // position: "absolute",
        // right: "0px",
        display:"flex",
        alignItems:"flex-end",
        justifyContent:"center",
        // border: "2px solid green",
        width: "100%",
        height: "100px",
        fontSize:"16px",
    }
    const Fup = {
        // position: "absolute",
        // left: "0px",
        // border: "2px solid red",
        width: "100%",
        height: "200px",
        fontSize:"16px",
        textAlign:"center"

    }
    const Fcontent={
        padding:"12px 12px 12px 50px"

    }
    return (
        <footer className='footer' style={footerStyle}>
            <div className="F-left" style={Fup}>
                 

                <div className="HHome" style={Fcontent}>Home</div>
                <div className="AAboutUs" style={Fcontent}>About us</div>
                <div className="CContactus" style={Fcontent}>Contact us</div>
                <div className="SServices" style={Fcontent}>Our Services</div>
                </div>
     
            <div className="F-right" style={Fdown}>

                CopyRight &copy;  All Rights Reserved
            </div>
        </footer>
    )
}

export default footer