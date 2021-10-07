import axios from 'axios';
import config from '../../../config.json'
import routes from '../../../api/routes.json'

export const contactAdd = (data) => dispatch => {
   let info = {
       "name": data.name,
       "email": data.email,
       "phone": data.phone,
       "message": data.message,
       "date_added": data.date_added
   }
   
   axios.post(`${config.api}${routes.contactForm}`, info).then((response) => {  
      dispatch({
         type: 'FETCH_CONTACT_ADD',
         payload: info 
         })  
   }).catch((error) => {
   console.log(error)    
   });
   

};