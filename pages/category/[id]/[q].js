import {useState, useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import React from 'react' 
import {MainLayout} from '../../../components/MainLayout'
import Link from 'next/link'
import { fetchMenus } from '../../../store/actions/menus/menus';
import { fetchCategory, fetchCategories } from '../../../store/actions/category/category';
import { fetchProductsList, fetchProductsCount } from '../../../store/actions/category/productsList';
import Error from '../../../components/templates/error'
import Loader from '../../../components/templates/loader'
import CategoryInfo from '../../../components/category/CategoryInfo'
import CategoriesList from '../../../containers/categories/CategoriesList'
import ProductsList from '../../../containers/categories/ProductsList'

import {useRouter} from 'next/router'
import Router from 'next/router'

const Category = () => {
   
const router = useRouter() 

let queryParams = router.query.q 
let queryParamPage

const mounted = useRef();

const dispatch = useDispatch();
const category = useSelector(state => state.category) 
useEffect(async () => {
  if (!mounted.current) {
    if(queryParams.indexOf('page=') > -1){
      queryParamPage = parseInt(queryParams.replace(/page=/g, ""))
    }else{
      queryParamPage = 1
    }
  dispatch(fetchCategory(router.query.id)); 
  dispatch(fetchProductsList(router.query.id, queryParamPage)); 
  dispatch(fetchProductsCount(router.query.id)); 
} else { 
  if(queryParams.indexOf('page=') > -1){
    queryParamPage = parseInt(queryParams.replace(/page=/g, ""))
  }else{
    queryParamPage = 1
  }
  dispatch(fetchCategory(router.query.id)); 
  dispatch(fetchProductsList(router.query.id, queryParamPage)); 
  dispatch(fetchProductsCount(router.query.id)); 
}
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
      <ProductsList id={router.query.id} page={queryParamPage} />
    {errorBlock}  
    {loader}
    {content} 
    </div>
  </div>
</MainLayout>

}
    

Category.getInitialProps = async ({store, query}) => {
  
  let queryParams = query.q 
  let queryParamPage
  if(queryParams.indexOf('page=') > -1){
  queryParamPage = parseInt(queryParams.replace(/page=/g, ""))
  }else{
  queryParamPage = 1
  }
  await store.dispatch(fetchCategory(query.id))
  await store.dispatch(fetchCategories())
  await store.dispatch(fetchMenus())
  await store.dispatch(fetchProductsList(query.id))
  await store.dispatch(fetchProductsCount(query.id))
      }
      
export default Category