import { useParams } from "react-router-dom";

const Products=()=>{

       const params= useParams();


    return (
        <>
        <div>
        Products Parent -{params.category} - {params.price}
        </div>
        </>
    )
}
export default Products;
