import constants from '../../keymirror'

const initialState = {
  data: [],
  cartMax: [],
  cartItem: [],
  cartItems: [],
  load: true,
  error: false  
};

export const productReducer = (state = initialState, action) => {
  switch(action.type){
    case constants.FETCH_PRODUCT_SUCCESS:
    return {
    ...state,
    data: action.payload,
    load: false,
    error: false    
    }
    case constants.FETCH_CARTMAX_SUCCESS:
        return {
        ...state,   
        cartMax: action.payload,   
        load: false,
        error: false
        }  
    case constants.FETCH_CART_SUCCESS:
        return {
        ...state,   
        cartItems: action.payload,   
        load: false,
        error: false
        } 
    case constants.FETCH_CART_ADD:
        let cartAdd = state.cartItems.concat(action.payload)
        return {
        ...state,   
        cartItems: cartAdd,   
        load: false,
        error: false 
        }         
    case constants.FETCH_CART_UPDATE_QUANTITY:
        let elementIndexArray = state.cartItems
        let elementsList = []
        const elementInexId = elementIndexArray.map(element => elementsList.push(element.product_id)) 
        const elementIndex = elementsList.findIndex(id => id == action.payload.product_id)
        let maxQuantity = elementIndexArray[elementIndex].balance
        if(action.payload.quantity > maxQuantity){
        elementIndexArray[elementIndex].quantity = maxQuantity    
        }else{
        elementIndexArray[elementIndex].quantity = action.payload.quantity 
        }
        elementIndexArray[elementIndex].totalprice = elementIndexArray[elementIndex].price * action.payload.quantity
        let arrayBefore = elementIndexArray.slice(0, elementIndex)
        let unitedArray = arrayBefore.concat([elementIndexArray[elementIndex]], elementIndexArray.slice(elementIndex + 1)) 
        console.log('www')
        console.log(unitedArray)
        return {
        ...state,   
        cartItems: unitedArray,
        load: false,
        error: false 
        }         
    case constants.FETCH_CART_ALL_SUCCESS:
        return {
        ...state,   
        cartItems: action.payload,   
        load: false,
        error: false
        } 
    case constants.FETCH_CART_DELETE:
        let elementDArray = state.cartItems
        let elementsDList = []
        elementsDList = elementDArray.filter((element) => {return element.product_id != action.payload.product_id})   
        return {
        ...state,   
        cartItems: elementsDList,   
        load: false,
        error: false 
        }          
    case constants.FETCH_PRODUCT_ERROR:
    return {
    ...state,
    data: [],
    load: false,
    error: true 
    }
    default: return state;  
}	
}

