import axios from 'axios';
import config from '../../../config.json'
import routes from '../../../api/routes.json'

export const fetchComments = (id) => async dispatch =>  {
   await axios(`${config.api}${routes.comments}/${id}`).then(result =>{
      dispatch({
         type: 'FETCH_COMMENTS_SUCCESS',
         payload: result.data  
      })
   }).catch((err)=>{
      dispatch({
         type: 'FETCH_COMMENTS_ERROR'
      })
   });   
}

export const commentAdd = (data) => dispatch => {
   let info = {
       "product_id": data.product_id,
       "author": data.name,
       "email": data.email,
       "message": data.comment
   }
   
   axios.post(`${config.api}${routes.commentAdd}`, info).then((response) => {  
      dispatch({
         type: 'FETCH_COMMENT_ADD',
         payload: info 
         })  
   }).catch((error) => {
   console.log(error)    
   });
   

};