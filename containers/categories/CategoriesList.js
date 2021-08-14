import {useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux'  
import React from 'react'
import {fetchCategories} from '../../store/actions/category/category'

import CategoriesListInfo from '../../components/category/CategoriesListInfo'

const CategoriesList = () => {

  const refInput = useRef();    
  const dispatch = useDispatch();
  const category = useSelector(state => state.category) 

  useEffect(async () => {
    dispatch(fetchCategories());    
  },[]);

  const successData = !(category.load || category.error)
  const errorBlock = category.error ? <div className="error"></div> : null
  const loader = category.load ? <div className="load"></div> : null
  const content = <CategoriesListInfo categoriesList={category.data} />


    return <React.Fragment>
       {errorBlock}  
       {loader}
       {content} 
      </React.Fragment>
   
}
    
    export default CategoriesList