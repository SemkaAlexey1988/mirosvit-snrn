import * as types from '../types'

export const fetchPosts = () => async dispatch =>  {
// const res = await axios.get('api/posts')    
dispatch({
   type: types.GET_POSTS,
   payload: ['22', '33', '77']  
})
}