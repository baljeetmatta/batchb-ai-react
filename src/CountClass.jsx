import { Component } from "react";
//state, setState
export default class CountClass extends Component {
    state={
        counter:1
    }
//    counter = 1;
    clickHandler = () => {
        // this.setState({counter:this.state.counter+1});
        //  this.setState({counter:this.state.counter+1});
        //   this.setState({counter:this.state.counter+1});
        this.setState((prev)=>({counter:prev.counter+1}))
        this.setState((prev)=>
            { 
                return {counter:prev.counter+1}
            })
            
         this.setState((prevState)=>({counter:prevState.counter+1}))

          this.setState((prev)=>({counter:prev.counter+1}))
           this.setState((prev)=>({counter:prev.counter+1}))

  //      this.counter++;

    }
    render = () => {

        return (
            <div>
               Count: {this.state.counter}
                <button onClick={this.clickHandler}>Clicked</button>
            </div>
        )
    }
}