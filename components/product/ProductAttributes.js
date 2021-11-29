 import React from 'react'
import Link from 'next/link'
import classes from '../../styles/product/product.module.scss'

const ProductAttributes = ({attributes}) => {
    return  <React.Fragment> 
  <div className={classes.productAttributes}>
  {attributes.map((attribute, index)=>{
  return <p key={index}>
  <span>{attribute.attribute_name}</span>: {attribute.attribute_value}
  </p>  
  })

  } 
  </div> 
    </React.Fragment>
    }
    
    export default ProductAttributes