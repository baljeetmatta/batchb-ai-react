import { useEffect, useState } from "react"

const Ctimer = () => {
    const [count, setCount] = useState(1);
    const changeHandler = () => {
        setCount(count + 1);

    }
    useEffect(()=>{
          let   id=setInterval(changeHandler,1000);
            //each render
            return ()=>{clearInterval(id)}

    },[count])//once
   

console.log("Called");


    return (
        <div> Count:{count}
            <button onClick={changeHandler}>Change</button>
        </div>
    )
}
export default Ctimer;