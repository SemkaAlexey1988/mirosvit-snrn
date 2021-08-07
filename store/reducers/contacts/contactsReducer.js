import constants from '../../keymirror'

const initialState = {
  contacts: [],
  load: true,
  error: false    
}

export const contactsReducer = (state = initialState, action) => {
  switch(action.type){
  case constants.FETCH_CONTACTS_SUCCESS:
  return {
  ...state,  
  contacts: action.payload,   
  load: false,
  error: false 
  }
  case constants.FETCH_CONTACTS_ERROR:
  return {
  ...state,  
  contacts: [],   
  load: false,
  error: true
  }
  default: return state
}	
}

