import axios from 'axios';
import config from '../../../config.json'
import routes from '../../../api/routes.json'

export const fetchCategory = (id) => async dispatch =>  {
   await axios(`${config.api}${routes.category}/${id}`).then(result =>{
      dispatch({
         type: 'FETCH_CATEGORIES_INFO_SUCCESS',
         payload: result.data  
      })
   }).catch((err)=>{
      dispatch({
         type: 'FETCH_CATEGORIES_INFO_ERROR'
      })
   });   
}