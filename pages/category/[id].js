import {useState, useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import React from 'react' 
import {MainLayout} from '../../components/MainLayout'
import Link from 'next/link'
import { fetchMenus } from '../../store/actions/menus/menus';
import { fetchCategory, fetchCategories } from '../../store/actions/category/category';
import { fetchProductsList } from '../../store/actions/category/productsList';
import { fetchManufacturerFilter, fetchAttributesFilter, fetchMinMax } from '../../store/actions/common/filter';
import Error from '../../components/templates/error'
import Loader from '../../components/templates/loader'
import CategoryTitle from '../../components/category/CategoryTitle'
import CategoryInfo from '../../components/category/CategoryInfo'
import CategoriesList from '../../containers/categories/CategoriesList'
import ProductsList from '../../containers/categories/ProductsList'
import Filter from '../../containers/templates/filter/Filter';
import classes from '../../styles/categories/categories.module.scss'

import {useRouter} from 'next/router'
import Router from 'next/router'

const Category = () => {
   
const router = useRouter() 
const dispatch = useDispatch();
const category = useSelector(state => state.category) 
const filter = useSelector(state => state.filter) 
useEffect(async () => {
  dispatch(fetchCategory(router.query.id)); 
  dispatch(fetchProductsList(router.query.id));  
  dispatch(fetchManufacturerFilter());
  dispatch(fetchAttributesFilter()); 
  dispatch(fetchMinMax(router.query.id));  
},[]);  

let categoryInfo = category.categoryInfo[0]
const successData = !(category.load || category.error)
const errorBlock = category.error ? <Error/> : null
const loader = category.load ? <Loader/> : null
let contentTitle
let content
if(categoryInfo){
contentTitle = <CategoryTitle category={categoryInfo} />  
content = <CategoryInfo category={categoryInfo} />
}else{
contentTitle = ''  
content = ''  
}
return <MainLayout>
  <div className={`${classes.category} full-width flex-block`}>
      <div className="left-block">             
        <div className={classes.categoriesList}> 
        <CategoriesList/>
        <Filter price={filter.minmax} id={router.query.id} filter={router.query.filter} 
      manufacturers={filter.manufacturers} attributes={filter.attributes} />
        </div>
        </div>
        <div className="content-block"> 
        {contentTitle} 
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
  await store.dispatch(fetchManufacturerFilter())
  await store.dispatch(fetchAttributesFilter())
  await store.dispatch(fetchMinMax(query.id))
      }
      
export default Category