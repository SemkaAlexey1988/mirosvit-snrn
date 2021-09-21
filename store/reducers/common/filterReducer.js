import constants from '../../keymirror'

const initialState = {
    minmax: [],
    manufacturers: [],
    attributes: [],
    load: true,
    error: false  
};

export const filterReducer = (state = initialState, action) => {
    switch(action.type){
        case constants.FETCH_FILTER_MINMAXPRICE_SUCCESS:
        return {
        ...state,
        minmax: action.payload,
        load: false,
        error: false    
        }                
        case constants.FETCH_FILTER_MINMAXPRICE_ERROR:
        return {
        ...state,
        minmax: [],
        load: false,
        error: true 
        }
        case constants.FETCH_MANUFACTURER_FILTER_SUCCESS:    
        return {
        ...state,
        manufacturers: action.payload,
        load: false,
        error: false    
        }
        case constants.FETCH_MANUFACTURER_FILTER_ERROR:
        return {
        ...state,
        manufacturers: [],
        load: false,
        error: true 
        }
        case constants.FETCH_ATTRIBUTES_FILTER_SUCCESS:    
        return {
        ...state,
        attributes: action.payload,
        load: false,
        error: false    
        }
        case constants.FETCH_ATTRIBUTES_FILTER_ERROR:
        return {
        ...state,
        attributes: [],
        load: false,
        error: true 
        }
        default: return state;     
        }	
}

