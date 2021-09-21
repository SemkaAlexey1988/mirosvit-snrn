import {useState, useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import React from 'react' 
import {MainLayout} from '../components/MainLayout'
import { fetchCartAll, fetchCartMax, updateCartQuantity, deleteCartProduct } from '../store/actions/product/cart';
import { addOrder } from '../store/actions/order/order';

import reduceProducts from '../utils/reduceProducts';
import dateFormat from '../utils/dateFormat';

import Link from 'next/link'
import {useRouter} from 'next/router'
import Router from 'next/router'

import CartInfo from '../components/order/CartInfo'
import OrderForm from '../components/order/OrderForm';

const Order = () => {

const [data, setData] = useState({ 
  productId: 0,
  custumerId: 0,
  balance: 0    
})   
   
const router = useRouter() 
const dispatch = useDispatch();
const product = useSelector(state => state.product) 

const orderValues = (value) => {
  let formatDate = dateFormat(); 
  let cartId = localStorage.getItem('cart');
  let data = {
  cartId: cartId,
  name: value.name,
  email: value.email,
  phone: value.phone,
  comment: value.comment,
  date_added: formatDate   
  }
  dispatch(addOrder(data));
  }

useEffect(async () => {
  dispatch(fetchCartMax());
  dispatch(fetchCartAll());
},[]);  

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

let cartItems = product.cartItems
let totalPrice = reduceProducts(product.cartItems)

if(cartItems){
  cartItems = <CartInfo cart={product.cartItems} totalPrice={totalPrice} newQuantity={changeQuantity}
  delProduct={targetDelProduct}/>
}else{
  cartItems = ''
}

return <MainLayout>
   <div className="order">
   {cartItems}
   <OrderForm addOrderValues={orderValues} /> 
   </div>
</MainLayout>

}
    

Order.getInitialProps = async ({store, query}) => {

      }
      
export default Order