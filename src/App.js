import React from 'react'
// import ReactDOM from "react-dom/client";
import './App.css' 
import Login from './component/Login-page/Login'
import SignIn from './component/SignIn-page/SignIn'
import Navbar from './component/Navbar/Navbar'
import Homepage from './component/HomePage/Homepage';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <>
    <div className="App">
      <BrowserRouter>
    <div>
        <Navbar />
    </div>
    
      <Routes>
        <Route path='/Portfolio-website/'element={<Homepage/>}/>
        <Route path='/Login' element={<Login/>} />
        <Route path='/SignIn' element={<SignIn/>} />

        
      </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App


// import React from "react";
// import ReactDOM from "react-dom/client";
// import Login from './component/Login-page/Login'
// import SignIn from './component/SignIn-page/SignIn'
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import "./index.css";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div><Login/></div>,
//   },
//   {
//     path: "/",
//     element: <div><SignIn/></div>,
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );













































































// // import logo from './logo.svg';
// import './App.css';
// import React, { useState, useEffect} from "react";
// // import { click } from '@testing-library/user-event/dist/click';
// // import {
// //   BrowserRouter as Router,
// //   Switch,
// //   Route,
// // } from "react-router-dom";
// // import Navbar from '../component/Navbar';
// // function App() {
// //   return (
// //     <Router>
// //       <Navbar/>
// //     <Switch>
// //     {/* <Route path="/">
      
// //     </Route> */}
// //     {/* <Route path="/about">
// //       <About />
// //     </Route> */}
    
// //   </Switch>
// // </Router>
// //   );
// // }

// // export default App;


// // import { useState } from 'react';
// // function App() {
// //   const [toggle, setToggle] = useState(false)

// //   const clickhandler = ()=>{
    
// //     setToggle(!toggle)
// //   }
// //   useEffect(()=>{
// //     document.title = toggle ? 'dsfds' : 'Think Again'
// //     // document.title = toggle ? 'welcome to Little Lemon resturant': 'using use effect hook'
// //   }, [toggle])


// function App() {
//   // const [name ,  setName]  = useState('flufy')

//   // const NameLooper = () =>{
//   //   if(name==='flufy'){
//   //     setName('rexy')
//   //   }
//   //   else if(name==='rexy'){
//   //     setName('pluto')
//   //   }
//   //   else{
//   //     setName('flufy')
//   //   }

//   // }

//   const [btcData, setBtcData] = useState({}); 
// const fetchData = () =>{
//     fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`) 
//       .then((response) => response.json()) 
//       .then((jsonData) => setBtcData(jsonData.bpi.EUR)) 
//       .catch((error) => console.log(error)); 
//   }
//  useEffect(()=>{
//     fetchData();
//  },[]

//  );
//   return ( 
//     <> 
//       <h1>Current BTC/USD data</h1> 
//       <p>Code: {btcData.code}</p> 
//       <p>Symbol: {btcData.symbol}</p> 
//       <p>Rate: {btcData.rate}</p> 
//       <p>Description: {btcData.description}</p> 
//       <p>Rate Float: {btcData.rate_float}</p> 
//     </> 


// // <div>
// // <h1>I'm thinking to name my pet {name}</h1>
// // <button onClick={NameLooper}>Pic your pet name</button>
// // </div>

//     // <div>
//     //   <h1 id='titlel'>Welcome To Little Lemon Resturant and Using the use Effect hook</h1>
//     //   <button onClick={clickhandler}>
//     //     Toggle Message
//     //   </button>
//     //   {toggle && <h2>Welcome to Little Lemon Resturant Again</h2>}
//     // </div>
//   )
// }
// export default App;







// import React from "react";

// function App() {
//   const [user, setUser] = React.useState([]);

//   const fetchData = () => {
//     fetch("https://randomuser.me/api/?results=1")
//       .then(response => response.json())
//       .then(data => setUser(data))
      


//   };

//   React.useEffect(() => {
//     fetchData();
//   }, []);

//   return Object.keys(user).length > 0 ? (
//     <div style={{padding: "40px"}}>
//       <h1>Customer data</h1>
//       <h2>Name: {user.results[0].name.first}</h2>
//       <img src={user.results[0].picture.large} alt=''/>

//     </div>
//   ) : (
//     <h1>Data pending...</h1>
//   );
// }

// export default App;




// import "./App.css";
// import { RadioGroup, RadioOption } from "./Radio";
// import { useState } from "react";

// function App() {
//   const [selected, setSelected] = useState("");
//   return (
//     <div className="App">
//       <h2>How did you hear about Little Lemon?</h2>
//       <RadioGroup onChange={setSelected} selected={selected}>
//         <RadioOption value="social_media">Social Media</RadioOption>
//         <RadioOption value="friends">Friends</RadioOption>
//         <RadioOption value="advertising">Advertising</RadioOption>
//         <RadioOption value="other">Other</RadioOption>
//       </RadioGroup>
//       <button disabled={!selected}>Submit</button>
//     </div>
//   );
// }

// export default App;
