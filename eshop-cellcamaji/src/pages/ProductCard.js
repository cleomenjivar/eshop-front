import React from 'react'
import {Link} from 'react-router-dom'

function ProductCard(props) {
        return (
            <div className="product-card" >
                <Link to={"./products/${props.product.id}"}>
                </Link>
                {props.product.model}
                {props.product.price}
                {/* {props.product.image[0].imageUrl} */}
            </div>
        )
    }

export default ProductCard
