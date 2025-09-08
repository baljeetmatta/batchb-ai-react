// import One from "./One";
// import UserProfile from "./UserProfile";

// const UserDashboard=()=>{
//     let obj={
//         name:"Test",
//         "city":"ABC"
//     };
//     return (
//         <>
//         Name: {obj.name}
//         <UserProfile user={obj} />
//          <One user={obj} />

//         </>
//     )
    
// }
// export default UserDashboard

import One from "./One";
import { UserContext } from "./UserContext";
import UserProfile from "./UserProfile";

const UserDashboard=()=>{
    let obj={
        name:"Test",
        "city":"ABC"
    };
    return (
        <>
        Name: {obj.name}
        <UserContext.Provider value={obj}>
        <UserProfile />
         <One />
         </UserContext.Provider>

        </>
    )
    
}
export default UserDashboard