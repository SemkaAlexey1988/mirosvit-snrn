import {useState, useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import React from 'react' 
import {MainLayout} from '../../components/MainLayout'
import { fetchProduct } from '../../store/actions/product/product';
import { fetchOptions } from '../../store/actions/product/options';
import { fetchAttributes } from '../../store/actions/product/attributes';
import { fetchComments, commentAdd } from '../../store/actions/product/comments';
import { fetchRating, ratingAdd } from '../../store/actions/product/rating';
import { fetchCartAll, fetchCartMax, addToCart, updateCartQuantity, deleteCartProduct } from '../../store/actions/product/cart';
import ProductInfo from '../../components/product/ProductInfo'
import ProductContent from '../../components/product/ProductContent'
import ProductImages from '../../components/product/ProductImages'
import ProductOptions from '../../components/product/ProductOptions'
import ProductAttributes from '../../components/product/ProductAttributes'
import CommentsInfo from '../../components/product/CommentsInfo'
import CommentsForm from '../../components/product/CommentsForm'
import RatingInfo from '../../components/product/RatingInfo'
import RatingAdd from '../../components/product/RatingAdd'
import CartInfo from '../../components/product/CartInfo'
import Error from '../../components/templates/error'
import Loader from '../../components/templates/loader'

import reduceProducts from '../../utils/reduceProducts';
import dateFormat from '../../utils/dateFormat';
import cartTransformer from '../../utils/cartTransformer';
import updateCartTransformer from '../../utils/updateCartTransformer';

import Link from 'next/link'
import {useRouter} from 'next/router'
import Router from 'next/router'

import classes from '../../styles/product/product.module.scss'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Product = () => {
   
const router = useRouter() 
const dispatch = useDispatch();
const product = useSelector(state => state.product) 
const options = useSelector(state => state.options) 
const attributes = useSelector(state => state.attributes) 
const comments = useSelector(state => state.comments) 
const rating = useSelector(state => state.rating) 

useEffect(async () => {
  dispatch(fetchProduct(router.query.id));
  dispatch(fetchOptions(router.query.id));
  dispatch(fetchAttributes(router.query.id));
  dispatch(fetchComments(router.query.id));
  dispatch(fetchRating(router.query.id));
  dispatch(fetchCartMax());
  dispatch(fetchCartAll());
},[]);  

const commentValues = (data) => {
  data.product_id = product.data[0].product_id
  dispatch(commentAdd(data));
}

const valueRating = (value) => {

  let productId = product.data[0].product_id
  let storageValue = `ratingStatus-${productId}`; 
  let currentStorage = localStorage.getItem(storageValue);
  let currentStorageId =  parseInt(currentStorage) 
  if(currentStorageId !== productId){
  let data = {
  productId: productId,  
  value: value   
  }
  dispatch(ratingAdd(data));
  localStorage.setItem(storageValue, productId);  
} 
}

const sendData = (value) => {
  if(value.add){ 
    let formatDate = dateFormat();
    let productId = product.data[0].product_id;
    let newMaxId
    let currentStorage = localStorage.getItem('cart');
    if(currentStorage){
      newMaxId = currentStorage
      }else{
      let maxId = product.cartMax[0].maxid; 
      newMaxId = maxId + 1  
      localStorage.setItem('cart', newMaxId); 
      }
      dispatch(fetchCartAll(newMaxId)) 

    let actionSelector = cartTransformer(product.cartItems, productId)  
    if(!actionSelector.productsQuantity || !actionSelector.finalStatus){
    //  Add
    let data = {
      custumer_id: newMaxId, 
      product_id: productId, 
      quantity: 1, 
      date_added: formatDate   
    }
    dispatch(addToCart(data))  
    }else if(actionSelector.finalStatus){
    //  Update
   let newQuantity = updateCartTransformer(product.cartItems, productId)
      let custumerId = localStorage.getItem('cart');
      let data = {
        quantity: newQuantity,
        custumer_id: custumerId,
        product_id: productId     
        } 
        dispatch(updateCartQuantity(data))   
  } 
    }
}

const changeQuantity = ({quantity, productId}) => {
    let quantytyValue  
    quantity < 1 ? quantytyValue = quantity + 1 : quantytyValue = quantity 
    let custumerId = localStorage.getItem('cart');
    let data = {
      quantity: quantytyValue,
      custumer_id: custumerId,
      product_id: productId     
    }    
    dispatch(updateCartQuantity(data)) 
}

const targetDelProduct = ({productId}) => {
  let custumerId = localStorage.getItem('cart');
  let data = {
  custumer_id: custumerId,
  product_id: productId    
  }
  dispatch(deleteCartProduct(data))
}

let productInfo = product.data[0]
const successData = !(product.load || product.error)
const errorBlock = product.error ? <Error/> : null
const loader = product.load ? <Loader/> : null
let productInformation
let productImage
let productContent
if(productInfo){
  productImage = <ProductImages product={productInfo}/>
  productInformation = <ProductInfo product={productInfo} /> 
  productContent = <ProductContent product={productInfo} />
}else{
  productInformation = ''
  productImage = ''
  productContent = ''
}

let totalPrice = reduceProducts(product.cartItems)
return <MainLayout>
  <div className={classes.product}>
  <div className={classes.productFirst}> 
  <div className={classes.productCart}>
  <div className={classes.productCartLeft}>
  {productImage}
  </div>
  <div className={classes.productCartRight}> 
      {errorBlock}
      {loader}
      {productInformation}
      <ProductOptions options={options.data} />
      <CartInfo addCart={sendData} cart={product.cartItems} totalPrice={totalPrice} newQuantity={changeQuantity}
            delProduct={targetDelProduct}/>
  </div>
      </div>
      </div>
      <div className={classes.productSecond}>

      <Tabs>
    <TabList>
      <Tab>Description</Tab>
      <Tab>Attributes</Tab>
      <Tab>Comments</Tab>
    </TabList>

    <TabPanel>
    <div className={classes.productName}>
      {productContent}
      </div>
    </TabPanel>
    <TabPanel>
    <div className={classes.productAttributes}>
      <ProductAttributes attributes={attributes.data} /> 
      </div>
    </TabPanel>
    <TabPanel>
    <div className={classes.productComments}>
      <CommentsInfo comments={comments.data} />
    <div className={classes.Rating}>
      <RatingInfo rating={rating.data} /> 
      <RatingAdd star={valueRating} /> 
    </div>
      <CommentsForm addComment={commentValues} />
      </div>
    </TabPanel>
  </Tabs>  
     
      </div>
  </div>


</MainLayout>

}
    

Product.getInitialProps = async ({store, query}) => {
  await store.dispatch(fetchProduct(query.id))
  await store.dispatch(fetchOptions(query.id))
  await store.dispatch(fetchAttributes(query.id))
  await store.dispatch(fetchComments(query.id))
  await store.dispatch(fetchRating(query.id))
      }
      
export default Product