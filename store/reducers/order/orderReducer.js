import constants from '../../keymirror'

const initialState = {
    data: [] 
};

export const orderReducer = (state = initialState, action) => {
  switch(action.type){
    case constants.FETCH_ORDER_ADD:
    let orderAdd = state.data.concat(action.payload)     
        return {
        ...state,    
        data: orderAdd
        }
    default: return state; 
}	
}

