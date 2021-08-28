import axios from 'axios';
import config from '../../../config.json'
import routes from '../../../api/routes.json'
import settings from '../../../settings';


export const fetchProductsList = (id, page, filter) => async dispatch =>  {
   if(!page){
   page=1 
   } 
   await axios(`${config.api}${routes.productsList}/${id}&page=${page}&limit=${settings.limit}&filter=${filter}`).then(result =>{ 
      dispatch({
         type: 'FETCH_PRODUCTS_LIST_SUCCESS',
         payload: result.data  
      })
   }).catch((err)=>{
      dispatch({
         type: 'FETCH_PRODUCTS_LIST_ERROR'
         })
   })
}

export const fetchProductsCount = (id, filter) => async dispatch => {
   await axios(`${config.api}${routes.productsCount}/${id}&filter=${filter}`).then(result => {        
      dispatch({
        type: 'FETCH_PRODUCTS_COUNT_SUCCESS',
        payload: result.data[0]
        })    
        }).catch((err)=>{
        console.log('error', err);
        })  
    };



