// import React, { useState } from 'react'
import React from 'react';
import Typed from 'typed.js';

import './Homepage.css'
// import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'
// import Sidebar from '../Sidebar/Sidebar'
// import ImageSlider from './ImageSlider'
import Footer from './footer'
import Pb from './Homeimg/Pb.png'
import Lb from './Homeimg/Ib.png'
import Tb from './Homeimg/Tb.png'
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


  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["<i> And I'am a </i> coding enthusiast, who's exploring her potential."],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);




  return (
    <div className="HomeP bg" >


      <main className='main-content bg'>
        <div className="LeftContext">
          <h2 className='Mh2'>
            Hi, I'am Ashutosh Singh
            <span id='el' ref={el} />
          </h2>


          <button className='Mbtn' ><Link className='Mbtn' to="/Login">Know more</Link> </button>
        </div>

        <div className="RightContext">

        </div>
      </main>
      <section className='ProjectSection bg-black'>
        <h2>Project Details</h2>
        <hr />
        <div className="Project">

          <div className="Lcontainer">

            <div className="Portfolioweb">
              <h3>Portfolio Website</h3>
              <h5>
                React, Html, Css, JavaScript
              </h5>
              <p>
                Created a Portfolio website using React.js
                ,Html, Css and JavaScript. 
              </p>
              <a href="https://ashuthakur1605.github.io/Portfolio-website/">(Click here)</a>

            </div>

            <div className="port">
              <img src={Lb} alt="" />
            </div>

            <div className="Portfolioweb">
              <h3>Text Editor
              </h3>
              <h5>
                React, JavaScript , BootStrap

              </h5>
              <p>
                Created a text editor website using React,
                JavaScript, Bootstrap.
              </p>
                <a href="https://ashuthakur1605.github.io/website/">  (Click here) </a> 
            </div>

          </div>

          <div className="Rcontainer">
            <div className="port"><img src={Pb} alt="" /></div>

            <div className="Portfolioweb">
              <h3>I-Note Website</h3>
              <h5>
                React , Node.js , Css, BootStrap
              </h5>
              <p>
                Created a I-Note website using React.js,
                Css, Bootstrap and JavaScript.
              </p>
               <a href="https://ashuthakur1605.github.io/WeNotebook/"> (Click here)</a> 
            </div>

            <div className="port">
              <img src={Tb} alt="" />
            </div>
          </div>
        </div>
      </section>



    







      <footer className="Mfooter bg">
        <Footer />
      </footer>

    </div>





  )
}

export default Homepage