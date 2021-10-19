 import React from 'react'
import Link from 'next/link'

const ProductInfo = ({product}) => {
    return  <React.Fragment> 
    <div className="product-info">
    <h2>{product.name}</h2>
    <p className="product__sku"><span>SKU: </span>{product.sku}</p>
    <p className="product__price">{product.price} <span>USD</span></p>
    <p>{product.description}</p>
    </div> 
    </React.Fragment>
    }
    
    export default ProductInfo