import axios from 'axios';
import config from '../../../config.json'
import routes from '../../../api/routes.json'

export const fetchProduct = (id) => async dispatch =>  {
   await axios(`${config.api}${routes.product}/${id}`).then(result =>{
      dispatch({
         type: 'FETCH_PRODUCT_SUCCESS',
         payload: result.data  
      })
   }).catch((err)=>{
      dispatch({
         type: 'FETCH_PRODUCT_ERROR'
      })
   });   
}