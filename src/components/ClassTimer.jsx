import { Component } from "react";

export default class ClassTimer extends Component
{
    constructor(props)
    {
        super(props);
       

    }
    componentDidMount()
    {
         setInterval(this.changeCounter,1000);

    }
     changeCounter=()=>{
        this.setState({count:this.state.count+1});

     }
    state={
        count:1
    };

    render=()=>{
        return (
            <>           
             Count:{this.state.count}

            </>

        )
    }
}