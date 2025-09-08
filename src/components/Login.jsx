// import { useState } from "react";

import { useContext, useRef, useState } from "react";

// const Login=()=>{

//     const [user,setUser]=useState({
//         username:"",
//         password:""
//     })
//     const verifyLogin=()=>{
//         console.log(user);



//     }
//     const changeObject=(key,value)=>
//     {
//         let obj={...user};
//         obj[key]=value;
//         setUser(obj);
//     }
//     return (
//         <div>

//                 <div><label>Username</label> <input value={user.username} onChange={(e)=>changeObject("username",e.target.value)} type="text"/></div>
//                  <div><label>Password</label> <input type="password" value={user.password}  onChange={(e)=>changeObject("password",e.target.value)}/></div>
//                  <div><button onClick={verifyLogin}>Login</button></div>
//         </div>
//     )
// }
// export default Login;
import { useNavigate } from "react-router-dom";
import { UserContext } from "./comp/UserContext";
const Login=()=>{
const navigate=useNavigate();

const data= useContext(UserContext);

    const [disable,setDisable]=useState(false);
    const [error,setError]=useState("");

   let usernameRef= useRef();
     let passwordRef= useRef();

const loginHandler=()=>{
   // console.log(usernameRef.current?.value);
   // console.log(passwordRef.current?.value);
   setDisable(true)
   fetch("./users.json")
   .then((response)=>{
    return response.json();
   }).then((response)=>{
        let results=response.filter((item)=>{
            if(item.username==usernameRef.current.value && item.password==passwordRef.current.value)
                return true;

        })
        console.log(results.length);
        if(results.length>0)
        {
            data.setUser(usernameRef.current.value);

            navigate("/user/Dashboard");
        }
        else
            setError("Invalid user/password")


        
   })

}


    return (
        <div>
            {error}    
                    <div><label>Username</label> <input ref={usernameRef} type="text"/></div>
             <div><label>Password</label> <input type="password" ref={passwordRef}/></div>
             <button disabled={disable} onClick={loginHandler}>Login</button>
        </div>
    )
}
export default Login;``