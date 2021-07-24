import * as types from '../types'
const initialState = {
 posts: [],
 post: {},
 loading: false,
 error: null
}

export const postsReducer = (state = initialState, action) => {
switch(action.type){
case types.GET_POSTS:
console.log(action.payload)    
return {
...state,
posts: action.payload,
loading: false,
error: null
}
default:
return state
}
}