import axios from 'axios';
import config from '../../../config.json'
import routes from '../../../api/routes.json'

export const contactAdd = (data) => dispatch => {
   let info = {
       "id": data.id,
       "name": data.name,
       "email": data.email,
       "phone": data.phone,
       "message": data.message
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