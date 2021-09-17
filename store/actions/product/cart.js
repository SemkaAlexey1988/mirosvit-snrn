import axios from 'axios';
import config from '../../../config.json'
import routes from '../../../api/routes.json'

export const fetchCartMax = (id) => async dispatch =>  {
   await axios(`${config.api}${routes.cartMax}`).then(result =>{
      dispatch({
         type: 'FETCH_CARTMAX_SUCCESS',
         payload: result.data  
      })
   }).catch((err)=>{
         console.log(err);
         });   
}

export const addToCart = (data) => dispatch => {
   let info = {
      "custumer_id": data.custumer_id,
      "product_id": data.product_id,
      "quantity": data.quantity,
      "date_added": data.date_added
  }
   
   axios.post(`${config.api}${routes.cartAddToCart}`, info).then((response) => {  
      dispatch({
         type: 'FETCH_CART_ADD',
         payload: info 
         })  
   }).catch((error) => {
   console.log(error)    
   });
   
};

export const fetchCartAll = () => async dispatch => {
   await axios(`${config.api}${routes.cartMax}`).then(response =>{
      let newMaxId
      let currentStorage = localStorage.getItem('cart');
      if(currentStorage){
      newMaxId = currentStorage
      }else{
      let maxId = response.data[0].maxid; 
      newMaxId = maxId + 1  
      localStorage.setItem('cart', newMaxId); 
      }
      axios(`${config.api}${routes.cartAll}/${newMaxId}`).then(responseCart =>{
      dispatch({
         type: 'FETCH_CART_SUCCESS',
         payload: responseCart.data  
      })
   }).catch((err)=>{
         console.log(err);
         dispatch({
         type: 'FETCH_CART_ERROR' 
         })
         }); 
      }).catch((err)=>{
         console.log(err);
         });
}

export const updateCartQuantity = (data) => dispatch => {
   let info = {
      "quantity": data.quantity,
      "custumer_id": data.custumer_id,
      "product_id": data.product_id,
  }
  axios.put(`${config.api}${routes.cartUpdateQuantity}`, info).then((response) => {  
   dispatch({
      type: 'FETCH_CART_UPDATE_QUANTITY',
      payload: info 
      })  
  }).catch((error) => {
   console.log(error)    
  });
}

export const deleteCartProduct = (data) => dispatch => {
   let info = {
      "custumer_id": data.custumer_id,
      "product_id": data.product_id,
   }
   fetch(`${config.api}${routes.cartDeleteProduct}`, {
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json'},
      method: 'DELETE',
       body: JSON.stringify({
            "custumer_id": data.custumer_id,
            "product_id": data.product_id
          }), 
      mode: 'cors'
      })
        .then(response => response)
        .then(json => { 
           dispatch({
              type: 'FETCH_CART_DELETE',
              payload: info 
              })
           }).catch((error) => {
              console.log(error)
              });
}