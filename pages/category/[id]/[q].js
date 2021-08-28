import {useState, useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import React from 'react' 
import {MainLayout} from '../../../components/MainLayout'
import Link from 'next/link'
import { fetchMenus } from '../../../store/actions/menus/menus';
import { fetchCategory, fetchCategories } from '../../../store/actions/category/category';
import { fetchProductsList } from '../../../store/actions/category/productsList';
import Error from '../../../components/templates/error'
import Loader from '../../../components/templates/loader'
import CategoryInfo from '../../../components/category/CategoryInfo'
import CategoriesList from '../../../containers/categories/CategoriesList'
import ProductsList from '../../../containers/categories/ProductsList'

import {useRouter} from 'next/router'
import Router from 'next/router'

const Category = () => {
   
const router = useRouter() 
const dispatch = useDispatch();
const category = useSelector(state => state.category) 
useEffect(async () => {
  dispatch(fetchCategory(router.query.id)); 
  dispatch(fetchProductsList(router.query.id));    
},[]);  

console.log('D')
console.log(router.query.q)
console.log('D')

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
  {router.query.q}
  <div className="category full-width flex-block">
    <div className="left-block">             
      <div className="categories-list"> 
      <CategoriesList/>
      </div>
      </div>
      <div className="content-block"> 
      <ProductsList id={router.query.id}/>
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
  await store.dispatch(fetchProductsList(query.id))
      }
      
export default Category