import constants from '../../keymirror'

const initialState = {
  data: [],
  categoryInfo: [],
  load: true,
  error: false    
}

export const categoryReducer = (state = initialState, action) => {
  switch(action.type){
    case constants.FETCH_CATEGORIES_LIST_SUCCESS:
      return {
      ...state,
      data: action.payload,
      load: false,
      error: false    
      }
    case constants.FETCH_CATEGORIES_INFO_SUCCESS:
      return {
      ...state,
      categoryInfo: action.payload,
      load: false,
      error: false    
      }
    case constants.FETCH_CATEGORIES_LIST_ERROR:
      return {
      ...state,
      data: [],
      load: false,
      error: true 
      }
    default: return state;     
    }
}

