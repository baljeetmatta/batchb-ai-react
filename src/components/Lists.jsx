const data=["First","Second","Third"];
import { useState } from "react";
import products from "./products.json"
const Lists=()=>{
    const [allProducts,setProducts]=useState(products);

//for,foreach,map,filter
return (

    <>
    <ul>
    {
            data.map((item,index)=>{
                return <li key={index}>{item}</li>
            })
    }
    </ul>
    <ul>
        {
            allProducts.map((item)=>{
                return <li key={item.id}>{item.name}</li>
            })
    }
    </ul>

    </>
)

}
export default Lists;
