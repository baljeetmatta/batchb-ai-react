import { useContext } from "react";
import { UserContext } from "./comp/UserContext";

const Dashboard=()=>{
    const {user}=useContext(UserContext);

    return (
        <>
        <div>Dashboard {user} </div>
        </>
    )
}
export default Dashboard;
