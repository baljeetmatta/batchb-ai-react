// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Greet from "./Greet"
// import Button from "./Button"
// import GreetClass from './GreetClass'
// import ButtonClass from './ButtonClass'
// function App() {

import Count from "./Count";


//   // const clientHandler=()=>{
//   //     alert("Client Handler")
//   // }

//   //  const clientHandlerAnother=()=>{
//   //     alert("Client Handler Another")
//   // }
//   const clientHandler=(e)=>{
//     console.log(e.target.innerText);
//   }
//     return (
//       <div>
//       {/* <Greet name="Code" age={10}/>
//        <Greet name="Chitkara" age={10}/>
//       <Greet/> */}
//       {/* <Button value="Send" click={clientHandler}/>
//        <Button value="Login" click={clientHandler}/> */}
// {/* 
// <GreetClass name="Code"/> */}
// <ButtonClass value="Send" click={clientHandler}/>




//       </div>
//     )

// }

// export default App
import "./App.css"
import Forms from "./Forms";
import VForms from "./VForms";
import CountClass from "./CountClass";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useNavigate } from "react-router-dom";
const App = () => {
  const navigate = useNavigate();


  return (
    // <VForms/>
    // <CountClass/>
    // <VForms/>
    <div>
      Application
      <Navbar />
      <button onClick={() => {
        navigate("/contact");

      }}>Contact</button>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/products/" >
          <Route path="clothes" element={<div>Clothing products</div>} />
          <Route path="electronics" element={<div>Electronics products</div>} />
          <Route path="mobiles" element={<div>Mobile products</div>} />
        </Route>
      </Routes>

    </div>
  )

}
export default App;
