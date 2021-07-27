import * as types from '../types'
import axios from 'axios';
import config from '../../config.json'
import routes from '../../api/routes.json'

export const fetchPosts = () => async dispatch =>  {
   console.log(config)
const result = await axios(`${config.api}${routes.categories}`);   
dispatch({
   type: types.GET_POSTS,
   payload: result.data  
})
}