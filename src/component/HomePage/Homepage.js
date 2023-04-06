// import React, { useState } from 'react'
import './Homepage.css'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'
// import Sidebar from '../Sidebar/Sidebar'
// import ImageSlider from './ImageSlider'
import Footer from './footer'
// import RoadMap from './RoadMap'
// import Cimg1 from './Homeimg/Cimg1.jpg'
// import Cimg2 from './Homeimg/Cimg2.jpg'

function Homepage() {

  // const Slides = [
  //   { url: 'http://localhost:3000/Cimg1.jpg', title: 'first' },
  //   { url: 'http://localhost:3000/Cimg2.jpg', title: 'second' },
  //   { url: 'http://localhost:3000/Cimg3.jpg', title: 'third' },
  //   { url: 'http://localhost:3000/Cimg4.jpg', title: 'fourth' },
  // ]
  // const Text = [
  //   { Texth:"<h1>Enjoy The New Experience",title:"first" },
  //   { Texth:"<h1>Enjoy The New Age" ,title:"second"},
  //   { Texth:"<h1>Enjoy The New Milkiway" ,title:"third" },
  //   { Texth:"<h1>Enjoy The Clasical ",title:"fourth" },
  // ]


  return (
    <div className="HomeP" >
      <div>
        <Navbar />

      </div>


      {/* <article className='article'>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem placeat perspiciatis debitis!</h3>
      </article> */}

      <main className='main-content'>
        <div className="McontentText">
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia aperiam ad, fugiat consequatur animi deleniti doloremque tempora aspernatur consectetur repellendus? Nostrum at quasi in impedit voluptatibus libero saepe explicabo excepturi.</p>
          <p>
          </p>
          <button className='Mbtn' ><Link className ='Mbtn' to="/Login">Know more</Link> </button>
        </div>
        {/* <div className="ImageS">
          
        <ImageSlider Slides={Slides} />
        </div> */}
        {/* 
        <div className="MainCard">
          <h3>Great Start</h3>
        </div> */}
        <div className="fullCard">
          {/* <RoadMap/> */}
        <div className="iScreen"></div>
        </div>



   




       </main>
      <div className="Box" >
        <div className="Bcard" id='Box1'>
        <div className="Bcard" id='Box2'>Lorem, ipsum dolor sit amet consectetur adipisicing.</div>
        </div>
       <div className="Mtext"><h2>Lorem ipsum dolor sit</h2></div>
        {/* <div className="Bcard" id='Box3'>Lorem, ipsum dolor sit amet consectetur adipisicing.</div>
        <div className="Bcard" id='Box4'>Lorem, ipsum dolor sit amet consectetur adipisicing </div> */}

      </div>

      
      <div className="Mfooter">
        <Footer />
      </div>

    </div>





  )
}

export default Homepage