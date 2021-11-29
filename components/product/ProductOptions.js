 import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import classes from '../../styles/product/product.module.scss'

const ProductOptions = ({options}) => {
    return  <React.Fragment> 
  <ul className={classes.productOptions}>
  {options.map((option, index)=>{
  return <li key={index}>
  <Link href={`/product/${option.url}`} as={`/product/${option.url}`}><a>
  <Image src={option.image} alt={option.name} width="50px" height="50px" />  
  </a></Link>
  </li>    
  })

  } 
  </ul> 
    </React.Fragment>
    }
    
    export default ProductOptions