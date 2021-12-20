import React, {useState} from 'react'
import Link from 'next/link'
import classes from '../../styles/categories/categories.module.scss'

const ProductsListInfo = ({productsList}) => {
    return  <React.Fragment> 
    <div className={`${classes.products} container`}>
    {productsList.map(products => {
    return <div key={products.product_id} className="column_1-3"><div className={classes.productWrap} >  
    <Link href={`/product/${products.url}`} as={`/product/${products.url}`}><a><img src={products.image} alt={products.name} className="products__img" /></a></Link> 
    <Link href={`/product/${products.url}`} as={`/product/${products.url}`}><a className={classes.productsLink}><h2 className={classes.productsName}>{products.name}</h2></a></Link>
    <div className={classes.productsBox}>
    <p className={classes.productsPrice}>{products.price} USD</p>
    <p className={classes.productsSku}>{products.sku}</p>
    </div>
    <p className={classes.productsDescription} data-value="description">{products.description}</p>
    </div>
    </div>
    })
    }
    </div>
    </React.Fragment>
    }
    
    export default ProductsListInfo