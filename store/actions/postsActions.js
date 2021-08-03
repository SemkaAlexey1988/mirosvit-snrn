import axios from 'axios';
import config from '../../config.json'
import routes from '../../api/routes.json'

export const fetchPosts = () => async dispatch =>  {
const result = await axios(`${config.api}${routes.categories}`);   
dispatch({
   type: 'GET_POSTS',
   payload: result.data  
})
}