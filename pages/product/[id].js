import {useState, useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import React from 'react' 
import {MainLayout} from '../../components/MainLayout'
import { fetchProduct } from '../../store/actions/product/product';
import { fetchOptions } from '../../store/actions/product/options';
import { fetchComments } from '../../store/actions/product/comments';
import ProductInfo from '../../components/product/ProductInfo'
import ProductImages from '../../components/product/ProductImages'
import ProductOptions from '../../components/product/ProductOptions'
import CommentsInfo from '../../components/product/CommentsInfo'
import Error from '../../components/templates/error'
import Loader from '../../components/templates/loader'
import Link from 'next/link'

import {useRouter} from 'next/router'
import Router from 'next/router'

const Product = () => {
   
const router = useRouter() 
const dispatch = useDispatch();
const product = useSelector(state => state.product) 
const options = useSelector(state => state.options) 
const comments = useSelector(state => state.comments) 
useEffect(async () => {
  dispatch(fetchProduct(router.query.id));
  dispatch(fetchOptions(router.query.id));
  dispatch(fetchComments(router.query.id));
},[]);  

let productInfo = product.data[0]
const successData = !(product.load || product.error)
const errorBlock = product.error ? <Error/> : null
const loader = product.load ? <Loader/> : null
let content
let productImage
if(productInfo){
productImage = <ProductImages product={productInfo}/>
content = <ProductInfo product={productInfo} /> 
}else{
content = ''
productImage = ''
}
return <MainLayout>
  <div className="product full-width flex-block">
  <div className="product__first"> 
  <div className="product-cart container">
  <div className="product-cart__left column_1-2"> 
  {productImage}
  </div>
  <div className="product-cart__right column_1-2"> 
      {errorBlock}
      {loader}
      {content}
      <ProductOptions options={options.data} />
      <CommentsInfo comments={comments.data} />
  </div>
      </div>
      </div>
  </div>
</MainLayout>

}
    

Product.getInitialProps = async ({store, query}) => {
  await store.dispatch(fetchProduct(query.id))
  await store.dispatch(fetchOptions(query.id))
  await store.dispatch(fetchComments(query.id))
      }
      
export default Product