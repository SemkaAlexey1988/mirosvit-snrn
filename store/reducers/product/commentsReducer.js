import constants from '../../keymirror'

const initialState = {
    data: [],
    load: true,
    error: false  
};

export const commentsReducer = (state = initialState, action) => {
  switch(action.type){
    case constants.FETCH_COMMENTS_SUCCESS:
        return {
        ...state,
        data: action.payload,
        load: false,
        error: false    
        }
    case constants.FETCH_COMMENTS_ERROR:
        return {
        ...state,
        data: [],
        load: false,
        error: true 
        }
    case constants.FETCH_COMMENT_ADD:
    let commentAdd = state.data.concat(action.payload)     
        return {
        data: commentAdd,
        load: false,
        error: false 
        }
    default: return state; 
}	
}

