import constants from '../../keymirror'

const initialState = {
  data: [],
  productCount: [],
  load: true,
  error: false  
};

export const productsListReducer = (state = initialState, action) => {
  switch(action.type){
  case constants.FETCH_PRODUCTS_LIST_SUCCESS:
  return {
  ...state,  
  data: action.payload,   
  load: false,
  error: false 
  }
  case constants.FETCH_PRODUCTS_COUNT_SUCCESS:
    return {
    ...state,  
    productCount: action.payload,   
    load: false,
    error: false 
    }
  case constants.FETCH_PRODUCTS_LIST_ERROR:
  return {
  ...state,  
  data: [],   
  load: false,
  error: true
  }
  default: return state
}	
}

