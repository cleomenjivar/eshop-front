import React, { Component } from "react";
import axios from "axios";

export default class Products extends React.Component {
    constructor(props) {
        super(props)
    this.state = {
        "brand": "Iphone", 
        "model": "11",
        "price": 10.5
        };

        this.handleSubmit=this.handleSubmit.bind(this)
        }
    
    handleSubmit(event) {
        event.preventDefault()
        console.log(this.state)
        axios.post("https://camaji.herokuapp.com/api/products",{"data":{"brand":parseInt(this.state.brand),"model":this.state.model,"price":parseInt(this.state.price)}})
        .then(response => response.json)
        .then(function (response) {
            console.log(response)
        })

    }
    
    render() {
        return(
            <div>
                <h1>Testing the Cart Page</h1>
                    {/* <form method="POST" onSubmit={this.handleSubmit}>
                        <input type="submit" />
                </form> */}
            </div>
        )
    };
}

// export default ___,
