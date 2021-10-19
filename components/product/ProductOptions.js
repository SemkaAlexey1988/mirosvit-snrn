 import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ProductOptions = ({options}) => {
  console.log(options)
  console.log('yes')
    return  <React.Fragment> 
  <ul className="product-options">
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