import { Outlet } from "react-router-dom";

const ProductParent=()=>{

    return (
        <>
        <div>
            Product Parent Component
            <div>
                Child Element
                <Outlet/>
                </div>

        </div>
        </>
    )
}
export default ProductParent;