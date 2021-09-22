import axios from 'axios';
import config from '../../../config.json'
import routes from '../../../api/routes.json'

export const fetchManufacturerFilter = () => async dispatch =>  {
  await axios(`${config.api}${routes.manufacturerFilter}`).then(result=>{  
   dispatch({
      type: 'FETCH_MANUFACTURER_FILTER_SUCCESS',
      payload: result.data  
   })
}).catch((err)=>{
   dispatch({
      type: 'FETCH_MANUFACTURER_FILTER_ERROR'
   }); 
});
}


export const fetchAttributesFilter = () => async dispatch =>  {
   await axios(`${config.api}${routes.attributesFilter}`).then(result=>{  
    dispatch({
       type: 'FETCH_ATTRIBUTES_FILTER_SUCCESS',
       payload: result.data  
    })
 }).catch((err)=>{
    dispatch({
       type: 'FETCH_ATTRIBUTES_FILTER_ERROR'
    }); 
 });
 }


 export const fetchMinMax = (id) => async dispatch =>  {
   await axios(`${config.api}${routes.minmaxpriceFilter}/${id}`).then(result=>{  
    dispatch({
       type: 'FETCH_FILTER_MINMAXPRICE_SUCCESS',
       payload: result.data[0]  
    })
 }).catch((err)=>{
    dispatch({
       type: 'FETCH_FILTER_MINMAXPRICE_ERROR'
    }); 
 });
 }