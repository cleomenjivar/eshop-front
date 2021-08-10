import React from "react";
import axios from "axios";

// export default class ProductList extends React.Component {
//         state = {
//           Products: []
//         }
    
//         componentDidMount() {
//             axios.get("https://camaji.herokuapp.com/api/products")
//             .then((res) => {
//                 console.log(res);
//                 // this.setState({Products: res.data})
//                 // console.log(res)
//             })
//         }

//         this.handleSubmit=this.handleSubmit.bind(this)

// export default class ProductList extends React.Component {
//     constructor(props) {
//         super(props)
//     this.state = {
//         "brand": "Iphone", 
//         "model": "11",
//         "price": 10.5
//         };

        // this.handleSubmit=this.handleSubmit.bind(this)
        // }
    
    // handleSubmit(event) {
    //     event.preventDefault()
    //     console.log(this.state)
    //     axios.post("https://camaji.herokuapp.com/api/products",{"data":{"brand":parseInt(this.state.brand),"model":this.state.model,"price":parseInt(this.state.price)}})
        // .then(response => response.json)
    //     .then(function (response) {
    //         console.log(response)
    //     })

    // }
    
//     render() {
//         return(
//             <div>
//                 <h1>IT IS FK WORKING</h1>
//                     {/* <form method="POST" onSubmit={this.handleSubmit}>
//                         <input type="submit" />
//                 </form> */}
//             </div>
//         )
//     };
// }

export default class ProductList extends React.Component {
        constructor(props) {
            super(props)
    
            this.state = {
                products: []
            }
        }
    
        componentDidMount() {
            axios.get(`https://camaji.herokuapp.com`)
            .then(response => {
                console.log(response)
                this.setState({ products: response.data })
            })
            .catch(error => {
                console.log(error)
            })
        }
    
        render() {
            const { products } = this.state
            return (
              <div>
                  List of products
                  {
                      products.length ?
                      products.map(product => <div key={product.id}>{product.title}</div>) : null
                  }
              </div>
            )
          }
        }