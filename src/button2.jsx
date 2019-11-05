import React, { Component } from "react"

class Button2 extends Component{
    constructor(props) {
        super(props)
        this.state = {
            name: "what is my name?"
        }
    }

    oneTimeButton = () => {
        console.log("one time button is clicked!")

        this.setState({
            name:"Risa"
        })
    }

    render() {
        return (
            <div>
                <h1>This is one time button</h1>
                <h2>{this.state.name}</h2>
                <button onClick={this.oneTimeButton}>one time</button>
            </div>
        )
    }
}

export default Button2