import axios from 'axios';
import config from '../../../config.json'
import routes from '../../../api/routes.json'

export const fetchAttributes = (id) => async dispatch =>  {
   await axios(`${config.api}${routes.productAttributes}/${id}`).then(result =>{
      dispatch({
         type: 'FETCH_PRODUCT_ATTRIBUTES_SUCCESS',
         payload: result.data  
      })
   }).catch((err)=>{
      dispatch({
         type: 'FETCH_PRODUCT_ATTRIBUTES_ERROR'
      })
   });   
}