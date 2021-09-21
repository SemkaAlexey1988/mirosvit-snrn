import axios from 'axios';
import config from '../../../config.json'
import routes from '../../../api/routes.json'

export const addOrder = (data) => dispatch => {
   let info = {
      "cart_id": data.cartId,
      "name": data.name,
      "email": data.email,
      "phone": data.phone,
      "comment": data.comment,
      "date_added": data.date_added 
  }
   
   axios.post(`${config.api}${routes.orderAdd}`, info).then((response) => {   
      dispatch({
         type: 'FETCH_ORDER_ADD',
         payload: info 
         }) 
      localStorage.removeItem('cart'); 
      window.location.href = `${config.siteURL}${routes.orderSuccess}`    
   }).catch((error) => {
   console.log(error)    
   });
   

};