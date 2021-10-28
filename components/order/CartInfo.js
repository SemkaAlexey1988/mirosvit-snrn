import React, {useState, useEffect, useRef} from 'react'
import Parser from 'html-react-parser';
import Link from 'next/link'

const CartInfo = ({cart, totalPrice, newQuantity, delProduct}) => {

    const pId = useRef(); 
    const quantityEl = useRef(); 

    const [item, setItem] = useState({ itemsEmpty: false  }) 

    const quantityMinus = (e) => {
        let valueQuantity = e.target.value
        let valueArray = valueQuantity.split(',')  
        let newQuatity = Number(valueArray[0]) - 1  
        let pId = Number(valueArray[1]) 
        newQuantity({quantity: newQuatity, productId: pId}) 
    }

    const quantityPlus = (e) => {
        //  alert(e.target.value)
        let valueQuantity = e.target.value
        let valueArray = valueQuantity.split(',')  
        let newQuatity = Number(valueArray[0]) + 1  
        let pId = Number(valueArray[1]) 
        newQuantity({quantity: newQuatity, productId: pId}) 
    }

    const deleteProduct = (e) => {
        let targetProduct = e.target.value
        delProduct({productId: targetProduct}) 
        let minCartValue = cart[0] 
        setItem({itemsEmpty: true }) 
    }

    let totalPriceContent
    if(totalPrice > 0){
    totalPriceContent = `<div class="product__total-price"><strong>Total:</strong> ${totalPrice} USD </div>`
    }else{
    totalPriceContent = `` 
    }

    let itemsStatus
  
    let minCart = cart[0]
    if(minCart){
    itemsStatus = true
    }else{
    itemsStatus = false
    }

    return(
        <div className="cart">

            <div className="cart-block">
           <div className="cart__active" style={{display: itemsStatus ? 'block' : 'none'}}>
            <table className="cart-table">
            <tbody> 
            {cart.map((element, index) => {
              let quantity = element.quantity
              let priceTotal = element.quantity*element.price 
            return <tr ref={pId} key={index} className="cart-item">
              <td className="product-comment__image"><img src={element.image} alt={element.name} width="200px" height="200px" /></td>  
              <td className="product-comment__wrap">
                <p className="product-comment__name">{element.name}</p>
                <p className="product-comment__sku"><span>SKU:</span> {element.sku}</p>
                <p className="product-comment__price"><span>Price:</span> {element.price} USD</p>
              </td>
            <td className="product-comment__quantity">
             <div className="product-manager__quantity">
            <div ref={quantityEl} id={element.quantity}>  
             <button className="product__menus" onClick={quantityMinus} value={`${element.quantity},${element.product_id}`}></button>  
             <span className="product__quantity_current">{element.quantity}</span>
             <button className="product__plus" onClick={quantityPlus} value={`${element.quantity},${element.product_id}`}></button> 
            </div>
            </div>  
            </td>
            <td className="product__priceTotal">{priceTotal} USD</td>
            <td> <button className="product__delete" onClick={deleteProduct} value={element.product_id}>X</button> </td>
            </tr>
            })  
        } 
           
            </tbody> 
            </table>
            {Parser(String(totalPriceContent))}
            </div>
        
            <p className="cart__empty" style={{display: item.itemsEmpty && !itemsStatus ? 'block' : 'none'}}>Cart is empty</p>
       
            </div>
        
          </div>         
        )
    }
    
    export default CartInfo