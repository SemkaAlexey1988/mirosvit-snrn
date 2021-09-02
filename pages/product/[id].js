import {useState, useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import React from 'react' 
import {MainLayout} from '../../components/MainLayout'
import { fetchProduct } from '../../store/actions/product/product';
import ProductInfo from '../../components/product/ProductInfo'
import Error from '../../components/templates/error'
import Loader from '../../components/templates/loader'
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
const successData = !(product.load || product.error)
const errorBlock = product.error ? <Error/> : null
const loader = product.load ? <Loader/> : null
let content
if(productInfo){
content = <ProductInfo product={productInfo} /> 
}else{
content = ''
}
return <MainLayout>
  <div className="product full-width flex-block">
      {errorBlock}
      {loader}
      {content}
  </div>
</MainLayout>

}
    

Product.getInitialProps = async ({store, query}) => {
  await store.dispatch(fetchProduct(query.id))
      }
      
export default Product