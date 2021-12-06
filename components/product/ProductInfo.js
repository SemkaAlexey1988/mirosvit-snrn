 import React from 'react'
import Link from 'next/link'
import classes from '../../styles/product/product.module.scss'

const ProductInfo = ({product}) => {
    return  <React.Fragment> 
    <div className={classes.productInfo}>
    <h2 id="product-h">{product.name}</h2>
    <p className={classes.productSku}><span>SKU: </span>{product.sku}</p>
    <p className={classes.productPrice}>{product.price} <span>USD</span></p>
    <p>{product.description}</p>
    </div> 
    </React.Fragment>
    }
    
    export default ProductInfo