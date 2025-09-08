import { useContext } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "./components/comp/UserContext";

const PrivateRoutes=()=>{

    const navigate=useNavigate();

   const data= useContext(UserContext);

console.log(data);
return(
    <>
    Private Route
   {data.user!=undefined? <Outlet/>:<Navigate to="/login"/>}
    </>
)

}
export default PrivateRoutes;