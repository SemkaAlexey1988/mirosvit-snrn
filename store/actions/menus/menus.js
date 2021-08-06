import axios from 'axios';
import config from '../../../config.json'
import routes from '../../../api/routes.json'

export const fetchMenus = () => async dispatch =>  {
   const id = '1'
   await axios(`${config.api}${routes.menus}/${id}`).then(result=>{
         dispatch({
            type: 'FETCH_MENUS_SUCCESS',
            payload: result.data  
      })
      }).catch((err)=>{
         dispatch({
            type: 'FETCH_MENUS_ERROR'
         }); 
   });

}