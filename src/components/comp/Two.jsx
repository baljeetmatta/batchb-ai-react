// const Two=(props)=>{

import { useContext } from "react";
import { UserContext } from "./UserContext";

//     return (
//         <>
//         <div>
//            Two: {props.user.name}
//         </div>
        
//         </>
//     )

// }
// export default Two;

const Two=()=>{
const data=useContext(UserContext)
    return (
        <>
        <div>
           Two: {data.name}
        </div>
        
        </>
    )

}
export default Two;