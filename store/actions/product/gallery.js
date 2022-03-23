import axios from 'axios';
import config from '../../../config.json'
import routes from '../../../api/routes.json'

export const fetchGallery = (id) => async dispatch =>  {
   await axios(`${config.api}${routes.productGallery}/${id}`).then(result =>{
      dispatch({
         type: 'FETCH_PRODUCT_GALLERY_SUCCESS',
         payload: result.data  
      })
   }).catch((err)=>{
      dispatch({
         type: 'FETCH_PRODUCT_GALLERY_ERROR'
      })
   });   
}