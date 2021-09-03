import constants from '../../keymirror'

const initialState = {
  data: [],
  load: true,
  error: false  
};

export const optionsReducer = (state = initialState, action) => {
  switch(action.type){
    case constants.FETCH_PRODUCT_OPTIONS_SUCCESS:  
    return {
    ...state,
    data: action.payload,
    load: false,
    error: false    
    }
    case constants.FETCH_PRODUCT_OPTIONS_ERROR:
    return {
    ...state,
    data: [],
    load: false,
    error: true 
    }
    default: return state;   
}	
}

