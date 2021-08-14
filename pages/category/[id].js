import {useState, useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import React from 'react' 
import {MainLayout} from '../../components/MainLayout'
import Link from 'next/link'
import { fetchMenus } from '../../store/actions/menus/menus';
import { fetchCategory, fetchCategories } from '../../store/actions/category/category';
import Error from '../../components/templates/error'
import Loader from '../../components/templates/loader'
import CategoryInfo from '../../components/category/CategoryInfo'
import CategoriesList from '../../containers/categories/CategoriesList'

import {useRouter} from 'next/router'
import Router from 'next/router'

const Category = () => {
  
const router = useRouter() 
const dispatch = useDispatch();
const category = useSelector(state => state.category) 
useEffect(async () => {
  dispatch(fetchCategory(router.query.id));    
},[]);  

let categoryInfo = category.categoryInfo[0]
const successData = !(category.load || category.error)
const errorBlock = category.error ? <Error/> : null
const loader = category.load ? <Loader/> : null
let content
if(categoryInfo){
content = <CategoryInfo category={categoryInfo} />
}else{
content = ''  
}
return <MainLayout>
  <div className="category full-width flex-block">
    <div className="left-block">             
      <div className="categories-list"> 
      <CategoriesList/>
      </div>
      </div>
      <div className="content-block"> 
    {errorBlock}  
    {loader}
    {content} 
    </div>
  </div>
</MainLayout>

}
    

Category.getInitialProps = async ({store, query}) => {
  await store.dispatch(fetchCategory(query.id))
  await store.dispatch(fetchCategories())
  await store.dispatch(fetchMenus())
      }
      
export default Category