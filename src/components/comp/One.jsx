import { useContext } from "react";
import { UserContext } from "./UserContext";

const One=()=>{
    const data=useContext(UserContext)
    return (

        <>
        <div>
           One: {data.name}
        </div>
        
        </>
    )

}
export default One;