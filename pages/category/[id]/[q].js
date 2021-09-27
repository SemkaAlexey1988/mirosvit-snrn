import {useState, useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import React from 'react' 
import {MainLayout} from '../../../components/MainLayout'
import Link from 'next/link'
import { fetchMenus } from '../../../store/actions/menus/menus';
import { fetchCategory, fetchCategories } from '../../../store/actions/category/category';
import { fetchProductsList, fetchProductsCount } from '../../../store/actions/category/productsList';
import { fetchManufacturerFilter, fetchAttributesFilter, fetchMinMax } from '../../../store/actions/common/filter';
import Error from '../../../components/templates/error'
import Loader from '../../../components/templates/loader'
import CategoryInfo from '../../../components/category/CategoryInfo'
import CategoriesList from '../../../containers/categories/CategoriesList'
import ProductsList from '../../../containers/categories/ProductsList'
import Filter from '../../../containers/templates/filter/Filter';

import {useRouter} from 'next/router'
import Router from 'next/router'

const Category = () => {
   
const router = useRouter() 

let queryParams = router.query.q 
let queryParamPage
let queryParamFilter

const dispatch = useDispatch();
const category = useSelector(state => state.category) 
const filter = useSelector(state => state.filter) 
useEffect(async () => { 
  dispatch(fetchCategory(router.query.id)); 
  dispatch(fetchProductsList(router.query.id, queryParamPage, queryParamFilter)); 
  dispatch(fetchProductsCount(router.query.id, queryParamFilter)); 
  dispatch(fetchManufacturerFilter());
  dispatch(fetchAttributesFilter()); 
  dispatch(fetchMinMax(router.query.id)); 
},[router.query.q]); 

if(router.query.q.indexOf('page=') > -1){
  queryParamPage = parseInt(router.query.q.replace(/page=/g, ""))
}else{
  queryParamPage = 1
}

if(router.query.q.indexOf('filter=') > -1){
  queryParamFilter = router.query.q.replace(/filter=/g, "")
}else{
  queryParamFilter = ''
}

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
      <Filter price={filter.minmax} id={router.query.id} filter={queryParamFilter} 
    manufacturers={filter.manufacturers} attributes={filter.attributes} />
      </div>
      </div>
      <div className="content-block"> 
      <ProductsList id={router.query.id} page={queryParamPage} filter={queryParamFilter} />
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
  let queryParamFilter
  if(queryParams.indexOf('page=') > -1){
  queryParamPage = parseInt(queryParams.replace(/page=/g, ""))
  }else{
  queryParamPage = 1
  }
  if(queryParams.indexOf('filter=') > -1){
    queryParamFilter = queryParams.replace(/filter=/g, "")
  }else{
    queryParamFilter = ''
  }

  await store.dispatch(fetchCategory(query.id))
  await store.dispatch(fetchCategories())
  await store.dispatch(fetchMenus())
  await store.dispatch(fetchProductsList(query.id, queryParamPage, queryParamFilter))
  await store.dispatch(fetchProductsCount(query.id, queryParamFilter))
  await store.dispatch(fetchManufacturerFilter())
  await store.dispatch(fetchAttributesFilter())
  await store.dispatch(fetchMinMax(query.id))
      }
      
export default Category