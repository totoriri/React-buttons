import React, { Component } from "react"


class Button4 extends Component{
    constructor(props) {
        super(props)
        this.state = {
            status:true
        }
    }
    
    shortHandClick = () => {
        console.log("oh,this is way too useful shorthand!!")

        this.setState({
            // status: false
            status:!this.state.status
        })
    }

    render() {
        return (
                <div>
                <h1>Pattern2:ON/OFF</h1>
                <h2>{this.state.status?"Hi!":"How are you?"}</h2>
                    <button onClick={this.shortHandClick}>ON/OFF</button>
            </div>
        )
    }
}

export default Button4