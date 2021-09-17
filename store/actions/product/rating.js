import axios from 'axios';
import config from '../../../config.json'
import routes from '../../../api/routes.json'

export const fetchRating = (id) => async dispatch =>  {
   await axios(`${config.api}${routes.productRating}/${id}`).then(result =>{
      dispatch({
         type: 'FETCH_RATING_SUCCESS',
         payload: result.data[0]  
      })
   }).catch((err)=>{
      dispatch({
         type: 'FETCH_RATING_ERROR'
      })
   });   
}

export const ratingAdd = (data) => dispatch => {
   let info = {
      "product_id": data.productId,
      "rating": data.value
   } 
   axios.post(`${config.api}${routes.productRatingAdd}`, info).then((response) => {  
      dispatch({
         type: 'FETCH_RATING_ADD',
         payload: info 
         })  
   }).catch((error) => {
   console.log(error)    
   });
   

};