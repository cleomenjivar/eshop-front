import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import Loader from '../pages/Loader'

function Home () {
	const url = "https://camaji.herokuapp.com/api/products"
	const [products, setProducts] = useState({
		loading: false,
		data: null,
		error: false,
	})

	useEffect(() => {
		setProducts({
			loading: true,
			data: null,
			error: false,
		})

		axios.get(url)
			.then(response => {
				setProducts({
					loading: false,
					data: null,
					error: false,		
				})
			})
			.catch(() => {
				setProducts({
					loading: false,
					data: null,
					error: false,
				})
			})
	}, [url])

	if(products.error) {
		content = `There was an error, please refresh or try again`
	}

	// if(products.loading) {
	// 	content = <Loader></Loader> 
	// } 
	
	if(products.data) {
		content = 
		`<div>
			<h1 className="brand1">
				{products.data.brand}
			</h1>
			<h1 className="model1">
				{products.data.model}
			</h1>
			<div>
				<img src={products.data.images[0].imageUrl}
				alt={products.data.brand}
				/>
			</div>
			<div className="price-result"> 
				$ {products.data.price}
			</div>
		</div>`
	} 

	return (
		<div>
			<h1 className="homepage">
				Here are your products:
			</h1>
			{content}
		</div>
	)

}

export default Home








// import React from "react";
// import axios from "axios";

// export default class ProductList extends React.Component {
//         constructor(props) {
//             super(props)
    
//             this.state = {
//                 products: []
//             }
//         }
    
//         componentDidMount() {
//             axios.get(`https://camaji.herokuapp.com/api/products`)
//             .then(response => {
//                 console.log(response)
//                 this.setState({ products: response.data })
//             })
//             .catch(error => {
//                 console.log(error)
//             })
//         }
    
//         render() {
//             const { products } = this.state
//             return (
//               <div>
//                   List of products
//                   {
//                       products.length ?
//                       products.map(product => <div key={product.id}>{product.title}</div>) : null
//                   }
//               </div>
//             )
//           }
//         }