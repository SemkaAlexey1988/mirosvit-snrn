import axios from 'axios';
import config from '../../../config.json'
import routes from '../../../api/routes.json'

export const fetchContacts = () => async dispatch =>  {
  await axios(`${config.api}${routes.contacts}`).then(result=>{  
   dispatch({
      type: 'FETCH_CONTACTS_SUCCESS',
      payload: result.data  
   })
}).catch((err)=>{
   dispatch({
      type: 'FETCH_CONTACTS_ERROR'
   }); 
});
}