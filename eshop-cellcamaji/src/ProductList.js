import React from "react";
import axios from "axios";

export default class ProductList extends React.Component {
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
        axios.post("",{"data":{"brand":parseInt(this.state.brand),"model":this.state.model,"price":parseInt(this.state.price)}})
        .then(function (response) {
            console.log(response)
        })

    }
    
    render() {
        return(
            <div>
                <h1>IT IS FK WORKING</h1>
                    <form method="POST" onSubmit={this.handleSubmit}>
                        <input type="submit" />
                </form>
            </div>
        )
    };
}