import { useLoaderData } from "react-router-dom";

    const Test=()=>{
       const data= useLoaderData();

    return (
        <>
        Test page called {data}</>
    )
}
export default Test;