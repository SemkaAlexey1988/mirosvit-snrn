import axios from 'axios';
import config from '../../../config.json'
import routes from '../../../api/routes.json'

export const fetchWords = (target) => async dispatch =>  {
  await axios(`${config.api}${routes.commonWords}/${target.language_id}/${target.page_type}`).then(result=>{  
     console.log(result)
   dispatch({
      type: 'FETCH_WORDS_SUCCESS',
      payload: result.data  
   })
}).catch((err)=>{
   dispatch({
      type: 'FETCH_WORDS_ERROR'
   }); 
});
}