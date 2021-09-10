import constants from '../../keymirror'

const initialState = {
    data: [],
    load: true,
    error: false  
};

export const ratingReducer = (state = initialState, action) => {
  switch(action.type){
    case constants.FETCH_RATING_SUCCESS:
        return {
            ...state,
            data: action.payload,
            load: false,
            error: false    
        }
    case constants.FETCH_RATING_ERROR:
        return {
            ...state,
            data: [],
            load: false,
            error: true 
        }
    case constants.FETCH_RATING_ADD:
        const stateData = state.data     
        let newRating = stateData.counter + 1 
        let newAverage = (stateData.average * stateData.counter + action.payload.rating * 1)/newRating   
        let newData = {
        counter: newRating,     
        average: newAverage
        }
        return {
            ...state,
            data: newData,
            load: false,
            error: true 
            }
    default: return state; 
  }	
}

