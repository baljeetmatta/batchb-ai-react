import { useState } from "react";
const Forms=()=>{

    //let name="Test";
    const [name,setName]=useState("Test");

    const clickHandler=()=>{

       // alert(name);
       //name="Changed";
       setName("Changed");


    }
    const nameChangeHandler=(e)=>{
        //name=e.target.value;
        setName(e.target.value);

    }
    return (
        <div>
            <div>Name: <input value={name}  type="text" onChange={nameChangeHandler}/></div>
           <button onClick={clickHandler}>Save</button>
        </div>
    )
}
export default Forms;