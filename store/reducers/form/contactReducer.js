import constants from '../../keymirror'

const initialState = {
    data: [],
    load: true,
    error: false  
};

export const contactReducer = (state = initialState, action) => {
  switch(action.type){
    case constants.FETCH_CONTACT_ADD:
    let contactAdd = state.data.concat(action.payload)     
        return {
        data: contactAdd,
        load: false,
        error: false 
        }
    default: return state; 
}	
}

