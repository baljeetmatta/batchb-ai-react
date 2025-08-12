import { Component } from "react";

class ButtonClass extends Component
{
    clickHandler=()=>{
        alert("Clicked on button")
    }
    render=()=>{
        return (
            <button onClick={this.props.click}>{this.props.value}</button>
        )
    }
}
export default ButtonClass;
