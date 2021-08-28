import React, {useState} from 'react'
import Link from 'next/link'

const ProductsListInfo = ({productsList}) => {
    return  <React.Fragment> 
    <div className="container">
    {productsList.map(products => {
    return <div key={products.product_id} className="column_1-4">
    <Link href={`/product/${products.url}`} as={`/product/${products.url}`}><a><img src={products.image} alt={products.name} className="products-specials__img" /></a></Link>
    <Link href={`/product/${products.url}`} as={`/product/${products.url}`}><a><h2 className="products-specials__name">{products.name}</h2></a></Link>
    <p>{products.price}</p>
    <p>{products.description}</p>
    <p>{products.sku}</p>
    </div>
    })
    }
    </div>
    </React.Fragment>
    }
    
    export default ProductsListInfo