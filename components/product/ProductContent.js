 import React from 'react'
import Link from 'next/link'
import Parser from 'html-react-parser';

const ProductContent = ({product}) => {
    return  <div className="product-content">
    <p>{Parser(String(product.content))}</p>
    </div> 
    }
    
    export default ProductContent