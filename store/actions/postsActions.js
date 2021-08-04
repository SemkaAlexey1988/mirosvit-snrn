import axios from 'axios';
import config from '../../config.json'
import routes from '../../api/routes.json'

export const fetchPosts = () => async dispatch =>  {
await axios(`${config.api}${routes.categories}`).then(result =>{
   dispatch({
      type: 'GET_POSTS',
      payload: result.data  
   })
}).catch((err)=>{
   dispatch({
      type: 'FETCH_POSTS_ERROR'
   })
});   

}