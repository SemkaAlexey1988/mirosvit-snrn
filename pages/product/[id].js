import {useState, useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import React from 'react' 
import {MainLayout} from '../../components/MainLayout'
import { fetchProduct } from '../../store/actions/product/product';
import Link from 'next/link'

import {useRouter} from 'next/router'
import Router from 'next/router'

const Product = () => {
   
const router = useRouter() 
const dispatch = useDispatch();
const product = useSelector(state => state.product) 
useEffect(async () => {
  dispatch(fetchProduct(router.query.id)); 
},[]);  

let productInfo = product.data[0]
console.log(productInfo)
//const successData = !(category.load || category.error)
//const errorBlock = category.error ? <Error/> : null
//const loader = category.load ? <Loader/> : null
//let content

return <MainLayout>
  <div className="product full-width flex-block">
product
  </div>
</MainLayout>

}
    

Product.getInitialProps = async ({store, query}) => {
  await store.dispatch(fetchProduct(query.id))
      }
      
export default Product