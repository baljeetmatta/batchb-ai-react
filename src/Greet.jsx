//Plain Javascript code
import React from 'react'
// export default function greet() {
//     let data=20;
//     return (
//         <>
//             <div>Greeting </div>
//            <b>CodeQuotient</b>
//            {data}
//         </>


//     );

// }
const Greet = (props) => {
    console.log(props.name);

  //  const name=props.name?props.name:'Guest';
    const name=props.name ||'Guest'
    return <div>Greeting to {name} {props.age}</div>
    /*
    if (props.name)
        return (
            <div>Greeting to {props.name} {props.age}</div>
        )
    else {


        return (
            <div>Greeting to Guest</div>
        )
    }
        */

}
export default Greet;
