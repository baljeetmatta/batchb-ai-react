import { useState } from "react"

const VForms=()=>{
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [city,setCity]=useState("")
    const nameHandler=(e)=>{

        setName(e.target.value);
    }
     const emailHandler=(e)=>{
       setEmail(e.target.value) 
    }
     const cityHandler=(e)=>{
        setCity(e.target.value)
    }
    const clickHandler=()=>{
        alert(name+" "+email+" "+city);
        
    }
    return(
        <div>
            <div>Name <input value={name} onChange={()=>{nameHandler('name')}} type="text"/></div>
            <div>Email <input type="text" value={email} onChange={emailHandler}/></div>
            <div>City <input type="text" value={city} onChange={cityHandler}/></div>
            <button onClick={clickHandler}>Save</button>
            <div>Name : {name}</div>
            <div>Email :{email}</div>
            <div>City :{city}</div>


            
        </div>
    )
}
export default VForms;