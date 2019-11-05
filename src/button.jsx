import React, { Component } from "react";

class Button extends Component{
    state = {
        count: "1"
    }

    click = () => {
        console.log(`This button is ${this.state.count}st button`)
    }

    render() {
        // return <div><button onClick="click()">click me!</button></div>
        return (
            <div>
                <h1>This is just for console.log</h1>
                <button onClick={() => this.click()}>Easiest button</button>
            </div>
        );
    }
}

export default Button;