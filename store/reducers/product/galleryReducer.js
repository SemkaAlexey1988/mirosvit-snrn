import constants from '../../keymirror'

const initialState = {
  data: [],
  load: true,
  error: false  
};

export const galleryReducer = (state = initialState, action) => {
  switch(action.type){
    case constants.FETCH_PRODUCT_GALLERY_SUCCESS:  
    return {
    ...state,
    data: action.payload,
    load: false,
    error: false    
    }
    case constants.FETCH_PRODUCT_GALLERY_ERROR:
    return {
    ...state,
    data: [],
    load: false,
    error: true 
    }
    default: return state;   
}	
}

