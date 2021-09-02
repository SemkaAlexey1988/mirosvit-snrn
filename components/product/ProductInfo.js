 import React from 'react'
import Link from 'next/link'

const ProductInfo = ({product}) => {
    console.log(product)
    return  <React.Fragment> 
    <div className="product-info">
    <h2>{product.name}</h2>
    <p><span>SKU: </span>{product.sku}</p>
    <p>{product.price} <span>USD</span></p>
    <p>{product.description}</p>
    </div> 
    </React.Fragment>
    }
    
    export default ProductInfo