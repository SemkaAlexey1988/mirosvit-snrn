import axios from 'axios';
import config from '../../config.json'
import routes from '../../api/routes.json'

export const fetchSpecials = () => async dispatch =>  {
const result = await axios(`${config.api}${routes.specials}`);   
dispatch({
   type: 'FETCH_SPECIALS_SUCCESS',
   payload: result.data  
})
}