// import Two from "./Two";

// const UserProfile=(props)=>{

//     return (
//         <>
//         <div>
//            Profile: {props.user.name}
//            <Two user={props.user}/>

//         </div>
        
//         </>
//     )

// }
// export default UserProfile;

import { useContext } from "react";
import Two from "./Two";
import { UserContext } from "./UserContext";

const UserProfile=()=>{

   const data= useContext(UserContext)
    return (
        <>
        <div>
           Profile: {data.name}
           <Two />

        </div>
        
        </>
    )

}
export default UserProfile;