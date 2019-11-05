import React, { Component } from "react";

class Button3 extends  Component{
    constructor(props) {
        super(props);
        this.state = {
            boolean: false,
            text:"Hi!"
        }
 }

    hundleClick = () => {
        console.log("socond button is clicked!!")
        
        if (this.state.boolean) {
            this.setState({
                boolean:false,
                text:"Hi"
            })
        } else {
            this.setState({
                boolean:true,
                text:"How are you??"
            })
        }
}

render(){
    return (
        <div>
            <h1>Pattern1:ON/OFF</h1> 
            <h2>{this.state.text}</h2>
            <button onClick={this.hundleClick}>ON/OFF</button>
        </div>
    )
}
    
}

export default Button3;