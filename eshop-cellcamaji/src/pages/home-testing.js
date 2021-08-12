// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// // import ProductCard from '..Components/ProductCard'

// function Home() {
// 	const [products, setProducts] = useState(null);

// 	useEffect(() => {
// 		getData();

// 	async function getData() {
// 		const response = await fetch("https://camaji.herokuapp.com/api/products/");
// 		const data = await response.json ();

// 		setProducts(data);
// 	}
// }, []);

// return (
// 	<div> 
// 		<h1>Samsung</h1>
// 		{products && (
// 			<div className="products">

// 			{products.map((products, index) => (
// 				<div key={index}>
// 					<h2>{book.name}</h2>
// 				</div>
// 			))}
// 		</div>
// 		)}
// 	</div>
// 	)
// }

// export default Home


//////////////////////////////////////////////////////

// function Home () {
// 	const url = "https://camaji.herokuapp.com/api/products"
// 	const [products, setProducts] = useState({
// 		loading: false,
// 		data: null,
// 		error: false,
// 	})


// 	useEffect(() => {
// 		setProducts({
// 			loading: true,
// 			data: null,
// 			error: false,
// 		})

// 		axios.get(url)
// 			.then(response => {
// 				setProducts({
// 					loading: false,
// 					data: null,
// 					error: false,		
// 				})
// 			})
// 			.catch(() => {
// 				setProducts({
// 					loading: false,
// 					data: null,
// 					error: false,
// 				})
// 			})
// 	}, [url])

// 	let content = null

// 	if(products.error) {
// 		content = 
// 		<p> There was an error, please refresh or try again</p>
// 	}

// 	// if(products.loading) {
// 	// 	content = <Loader></Loader>
// 	// } 
	
// 	if(products.data) {
// 		content = 
// 		products.data.map((product) =>
// 		<div key={product.id}>
// 			<ProductCard />
// 				product={product}
// 		</div>
// 	)}
	

// 	return (
// 		<div>
// 			<h1 className="homepage">
// 				Here are your products:
// 			</h1>
// 			{content}
// 		</div>
// 	)

// }

// export default Home



