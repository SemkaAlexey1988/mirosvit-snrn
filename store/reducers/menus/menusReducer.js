import constants from '../../keymirror'

const initialState = {
    data: [],
    load: true,
    error: false  
};

export const menusReducer = (state = initialState, action) => {
    switch(action.type){
    case constants.FETCH_MENUS_SUCCESS:
    return {
    ...state,  
    data: action.payload,   
    load: false,
    error: false 
    }
    case constants.FETCH_MENUS_ERROR:
    return {
    ...state,  
    data: [],   
    load: false,
    error: true
    }
    default: return state
  }	
  }