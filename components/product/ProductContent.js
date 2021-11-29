 import React from 'react'
import Link from 'next/link'
import Parser from 'html-react-parser';
import classes from '../../styles/product/product.module.scss'

const ProductContent = ({product}) => {
    return  <div className={classes.productContent}>
    <p>{Parser(String(product.content))}</p>
    </div> 
    }
    
    export default ProductContent