import { Component } from "react";

//1. class extends Component
class GreetClass extends Component
{
    //props
   // data=10;

    //override
    render=()=>{

        return (
            <div>Greeting Class {this.props.name} </div>
        )

    }

}
export default GreetClass;
