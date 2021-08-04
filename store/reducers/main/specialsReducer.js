import constants from '../../keymirror/index.js'

const initialState = {
  data: [],
  load: true,
  error: false  
};

const specials = (state = initialState, action) => {
  switch(action.type){
  case constants.FETCH_SPECIALS_SUCCESS:
  return {
  ...state,  
  data: action.payload,   
  load: false,
  error: false 
  }
  case constants.FETCH_SPECIALS_ERROR:
  return {
  ...state,  
  data: [],   
  load: false,
  error: true
  }
  default: return state
}	
}

export default specials