import { useEffect, useState } from "react"

const Ctimer = () => {
    const [count, setCount] = useState(1);
    const changeHandler = () => {
        setCount(prev=>prev + 1);

    }
    useEffect(()=>{
          let   id=setInterval(changeHandler,1000);
            //each render
           // return ()=>{clearInterval(id)}

    },[])//once
   

console.log("Called");


    return (
        <div> Count:{count}
            <button onClick={changeHandler}>Change</button>
        </div>
    )
}
export default Ctimer;