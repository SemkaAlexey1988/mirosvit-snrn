import constants from '../../keymirror'

const initialState = {
  specials: [],
  load: true,
  error: false  
};

export const specialsReducer = (state = initialState, action) => {
  switch(action.type){
  case constants.FETCH_SPECIALS_SUCCESS:
  return {
  ...state,  
  specials: action.payload,   
  load: false,
  error: false 
  }
  case constants.FETCH_SPECIALS_ERROR:
  return {
  ...state,  
  specials: [],   
  load: false,
  error: true
  }
  default: return state
}	
}

