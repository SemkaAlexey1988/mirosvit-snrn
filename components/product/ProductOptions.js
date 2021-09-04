 import React from 'react'
import Link from 'next/link'

const ProductOptions = ({options}) => {
    return  <React.Fragment> 
  <ul className="product-options">
  {options.map((option, index)=>{
  return <li key={index}>
  <Link href={`/product/${option.url}`} as={`/product/${option.url}`}><a>{option.name}</a></Link>
  </li>    
  })

  } 
  </ul> 
    </React.Fragment>
    }
    
    export default ProductOptions