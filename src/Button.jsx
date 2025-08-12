const Button=(props)=>{

    const clickHandler=()=>{
        alert("Button clicked....")

    }
    return (
        <button onClick={props.click}>{props.value}</button>
    )
}
export default Button;