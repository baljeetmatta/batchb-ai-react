import { useState } from "react";

const Count=()=>{

    const [counter,setCounter]=useState(0);

   //let counter= useState(0);
   //console.log(counter[1]());


    // let counter=1;
    // const clickHandler=()=>{
    //     counter++;
    //     console.log(counter);
    // }
    const clickHandler=()=>{

       // counter++;
       setCounter(counter+1);
       setCounter((prev)=>(prev+1));
       
       //setCounter(counter+1);
       //setCounter(counter+1);

        console.log(counter);

    }
    return (

        <div>
          Count: {counter}
            <button onClick={clickHandler}>Change {counter}</button>
            {counter}
        </div>
    )

    
}

export default Count;
