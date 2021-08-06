import axios from 'axios';
import config from '../../../config.json'
import routes from '../../../api/routes.json'

export const fetchSpecials = () => async dispatch =>  {
  await axios(`${config.api}${routes.specials}`).then(result=>{  
dispatch({
   type: 'FETCH_SPECIALS_SUCCESS',
   payload: result.data  
})
}).catch((err)=>{
   dispatch({
      type: 'FETCH_SPECIALS_ERROR'
   }); 
});
}