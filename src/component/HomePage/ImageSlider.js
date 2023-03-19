import React, { useState } from 'react'

const ImageSlider =({Slides}) => {

    const [currentIndex ,setCurrentUser]= useState(0)
    const [changeText,setChangeText]=useState(0)
    // const Texth1 = `${Text[changeText].Text}`
    // console.log(Texth1)
    const StyleSlider={
      border:'2px solid gray',
      height:'500px',
      width:"90%",
     
    }
    const StyleSlide = {
      height:"500px",
      width:"100%",
      backgroundImage:`url(${Slides[currentIndex].url})`,
      backgroundPosition:"center",
      backgroundSize:"center",
      opacity:"1"
      


        
     }
     const ArrowRightStyle ={
      height: "68px",
      width: "68px",
      border:"none",
      borderRadius: "35px",
      backgroundColor: "rgb(168, 182, 168)",
      padding: "16px 26px",
      fontSize: "25px",
      position: "absolute",
      top: "23rem",
      right:"20%",
      font:"&#10095",
      cursor:"pointer"
    }
     const ArrowLeftStyle ={
      height: "68px",
      width: "68px",
      borderRadius: "35px",
      border:"none",
      backgroundColor: "rgb(168, 182, 168)",
      padding: "16px 26px",
      fontSize: "25px",
      position: "absolute",
      top: "23rem",
      left:"20%",
      cursor:"pointer"
    
     }
     const H1Style ={
      display:"none",
     }
     const H2Style ={
      
      display:"flex",
      fontSize:"70px",
      fontFamily: "'Alex Brush', cursive",
      color:"white",
      padding: "44px 0px 0px 55px"
  

     }
     const ArrowRight =()=>{
      let FirstIndex = currentIndex===Slides.length -1;
      let newIndex= FirstIndex? 0 :currentIndex +1
      setCurrentUser(newIndex)


      let FirstText = changeText===Slides.length -1;
      let newText= FirstText? 0 :changeText +1
      setChangeText(newText)


     }
     const ArrowLeft =()=>{
      let LastIndex  = currentIndex===0;
      let newIndex= LastIndex? Slides.length-1 :currentIndex -1
      setCurrentUser(newIndex)

      let LastText = changeText===0;
      let newText= LastText? Slides.length-1 :changeText -1
      setChangeText(newText)
      


     }
     

  return (
    <div style={StyleSlider}>
      <div style={StyleSlide}>
      <div><h1 style={changeText===Slides.length-4?H2Style:H1Style}>Enjoy first</h1></div>
      <div><h1 style={changeText===Slides.length-3?H2Style:H1Style}>Enjoy Second</h1></div>
      <div><h1 style={changeText===Slides.length-2?H2Style:H1Style}>Enjoy Third</h1></div>
      <div><h1 style={changeText===Slides.length-1?H2Style:H1Style}>Enjoy fourth</h1></div>
      
    <button className="Arrow" id='Aright' style={ArrowRightStyle} onClick={ArrowRight} >&#10095;</button>
    <button className="Arrow" id='Aleft' style={ArrowLeftStyle} onClick={ArrowLeft} >&#10094;</button>
      </div>

    </div>
  )
}

export default ImageSlider