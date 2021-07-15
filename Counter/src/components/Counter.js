import React, { Component } from "react";
// import { useState } from "react";
// class components
export class Counter extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        })
    }

    decrement() {
        this.setState({
            count: this.state.count - 1
        })
    }

    reset() {
        this.setState({
            count: 0
        })
    }

    render() {
        return ( 
            <>
            <h1 > { this.state.count } </h1> 
            <div className = "btn" >
            <button onClick = {
                () => this.increment() } > Increment </button>
                <button onClick = {
                () => this.decrement() } > Decrement </button> 
            <button onClick = {
                () => this.reset() } > Reset </button> </div>
            </>
        )
    }
}

export default Counter