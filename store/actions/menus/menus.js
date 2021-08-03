import axios from 'axios';
import config from '../../../config.json'
import routes from '../../../api/routes.json'

export const fetchMenus = () => async dispatch =>  {
   const id = '1'
   const result = await axios(`${config.api}${routes.menus}/${id}`);
   dispatch({
      type: 'FETCH_MENUS_SUCCESS',
      payload: result.data  
   })
}