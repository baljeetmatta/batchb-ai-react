// // // // import { useState } from 'react'
// // // // import reactLogo from './assets/react.svg'
// // // // import viteLogo from '/vite.svg'
// // // // import './App.css'
// // // // import Greet from "./Greet"
// // // // import Button from "./Button"
// // // // import GreetClass from './GreetClass'
// // // // import ButtonClass from './ButtonClass'
// // // // function App() {


// import { createBrowserRouter, Link, Route, RouterProvider, Routes } from "react-router-dom";
// import Posts from "./components/Posts";
// import Request from "./components/Request";
// import Users from "./components/Users"
// import Login from "./components/Login";

// // import { createBrowserRouter, RouterProvider } from "react-router-dom";
// // import Navbar from "./components/Navbar";

// // // import Count from "./Count";


// // // //   // const clientHandler=()=>{
// // // //   //     alert("Client Handler")
// // // //   // }

// // // //   //  const clientHandlerAnother=()=>{
// // // //   //     alert("Client Handler Another")
// // // //   // }
// // // //   const clientHandler=(e)=>{
// // // //     console.log(e.target.innerText);
// // // //   }
// // // //     return (
// // // //       <div>
// // // //       {/* <Greet name="Code" age={10}/>
// // // //        <Greet name="Chitkara" age={10}/>
// // // //       <Greet/> */}
// // // //       {/* <Button value="Send" click={clientHandler}/>
// // // //        <Button value="Login" click={clientHandler}/> */}
// // // // {/* 
// // // // <GreetClass name="Code"/> */}
// // // // <ButtonClass value="Send" click={clientHandler}/>




// // // //       </div>
// // // //     )

// // // // }

// // // // export default App
// // // import "./App.css"
// // // import Forms from "./Forms";
// // // import VForms from "./VForms";
// // // import CountClass from "./CountClass";
// // // import Home from "./components/Home";
// // // import About from "./components/About";
// // // import Contact from "./components/Contact";
// // // import { Route, Routes } from "react-router-dom";
// // // import Navbar from "./components/Navbar";
// // // import { useNavigate } from "react-router-dom";
// // // import Products from "./components/products";
// // // import NavigateProducts from "./components/NavigateProducts";
// // // import Fashion from "./components/Fashion";
// // // import Mobiles from "./components/Mobiles";
// // // import Electronics from "./components/Electronics";
// // // import ProductParent from "./components/ProductParent";
// // // const App = () => {
// // //   const navigate = useNavigate();


// // //   return (
// // //     // <VForms/>
// // //     // <CountClass/>
// // //     // <VForms/>
// // //     <div>
// // //       Application
// // //       <Navbar />
// // //       <button onClick={() => {
// // //         let data = "fashion"
// // //         //navigate("/products/"+data);
// // //         // navigate(`/products/${data}`);
// // //         navigate("/products", { state: { category: data } });



// // //       }}>Contact</button>
// // //       <Routes>
// // //         <Route path="/" element={<Home />}></Route>
// // //         <Route path="/about" element={<About />}></Route>
// // //         <Route path="/contact" element={<Contact />}></Route>
// // //         {/* <Route path="/products/:category" element={<Products/>}/>
// // //         <Route path="/products" element={<NavigateProducts/>}/> */}
// // //         {/* <Route path="/products/electronics" element={<Electronics/>}/>
// // //          <Route path="/products/mobiles" element={<Mobiles/>}/>
// // //           <Route path="/products/fashion" element={<Fashion/>}/> */}
// // //         <Route path="/products/" element={<ProductParent/>}>
// // //           <Route path="electronics" element={<Electronics />} />
// // //           <Route path="mobiles" element={<Mobiles />} />
// // //           <Route path="fashion" element={<Fashion />} />

// // //         </Route>




// // //         {/*
// // //         /products/ss
// // //         <Route path="/products/" >
// // //           <Route path="clothes" element={<div>Clothing products</div>} />
// // //           <Route path="electronics" element={<div>Electronics products</div>} />
// // //           <Route path="mobiles" element={<div>Mobile products</div>} />
// // //         </Route> */}
// // //       </Routes>

// // //     </div>
// // //   )

// // // }
// // // export default App;

// // import Test from "./components/Test"
// // import Home from "./components/Home"
// // import Lists from "./components/Lists";
// // import Ctimer from "./components/Ctimer";
// // import ClassTimer from "./components/ClassTimer";
// // import Users from "./components/Users";
// // const testFunction=()=>{
// //   return "Hi";

// // }

// // const routes=createBrowserRouter([

// //   {
// //     path:"/",
// //     element:<Ctimer/>,
    
// //   },
// //   {
// //     path:"/about",
// //     element:<Test/>,
// //     loader:testFunction
// //   },
// //   {
// //     path:"/users",
// //     element:<Users/>
// //   }

// // ])

// // const App=()=>{
// //   return (
// //     <>
// //     Application
    
// //    <RouterProvider router={routes}/>
     
    
    
// //     </>
// //   )
// // }
// // export default App;

// const App=()=>{
//   return (
//    <>
   
//    <div><Link to="/login">Login</Link> </div>
//    <Routes>
//     <Route path="/login" element={<Login/>}>Login</Route>
//    </Routes>

   
//    </>
//   )
// }
// export default App;
import { Link, Route, Routes } from "react-router-dom";
import Login from "./components/Login"
import Dashboard from "./components/Dashboard";

const App=()=>{

  return (
    <>
   
    <Routes>
      <Route path="/login" element={<Login/>}></Route>
       <Route path="/dashboard" element={<Dashboard/>}></Route>
    </Routes>
    </>
  )
}
export default App;
