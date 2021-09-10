import axios from 'axios';
import config from '../../../config.json'
import routes from '../../../api/routes.json'

export const fetchOptions = (id) => async dispatch =>  {
   await axios(`${config.api}${routes.productOptions}/${id}`).then(result =>{
      dispatch({
         type: 'FETCH_PRODUCT_OPTIONS_SUCCESS',
         payload: result.data  
      })
   }).catch((err)=>{
      dispatch({
         type: 'FETCH_PRODUCT_OPTIONS_ERROR'
      })
   });   
}