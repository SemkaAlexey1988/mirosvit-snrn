 import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import classes from '../../styles/product/product.module.scss'

const ProductImages = ({product}) => {
    return  <React.Fragment> 
      <div className={classes.productImages}>
      <Image src={product.image} alt={product.name} width="1000px" height="1000px" />
      </div>
    </React.Fragment>
    }
    
    export default ProductImages