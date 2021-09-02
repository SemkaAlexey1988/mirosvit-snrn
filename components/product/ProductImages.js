 import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ProductImages = ({product}) => {
    return  <React.Fragment> 
      <div className="product__images">
      <Image src={product.image} alt={product.name} width="1000px" height="1000px" />
      </div>
    </React.Fragment>
    }
    
    export default ProductImages