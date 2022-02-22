 import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import classes from '../../styles/product/product.module.scss'
import Gallery from "./Carousel";

const ProductImages = ({product}) => {

    return  <React.Fragment> 
      <div className={classes.productImages}>
      <Gallery />
      <Image src={product.image} alt={product.name} width="1000px" height="1000px" />
      </div>
    </React.Fragment>
    }
    
    export default ProductImages