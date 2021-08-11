import {useState, useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import React from 'react' 
import {MainLayout} from '../../components/MainLayout'
import Link from 'next/link'
import { fetchMenus } from '../../store/actions/menus/menus';
import { fetchCategory } from '../../store/actions/category/category';

import {useRouter} from 'next/router'
import Router from 'next/router'

const Category = () => {
  
const router = useRouter() 
const dispatch = useDispatch();
const category = useSelector(state => state.category) 
useEffect(async () => {
  dispatch(fetchCategory(router.query.id));    
},[]);  

console.log('A')
console.log(category.categoryInfo[0])
console.log('Z')

let categoryInfo = category.categoryInfo[0]
if(categoryInfo){
return <MainLayout>
  <React.Fragment> 
  <h1>{categoryInfo.title}</h1>
  </React.Fragment>
</MainLayout>
}else{
  return <MainLayout>
  <React.Fragment> 
  <h1>11</h1>
  </React.Fragment>
</MainLayout> 
}
}


        /*
        Category.getInitialProps = async ({query}) => {   

            const result = await axios(`https://mirosvit-shop.herokuapp.com/category/${query.id}`);
            const post = await result.data 
      
            return { post }
                } 
                */     

       

Category.getInitialProps = async ({store, query}) => {
  await store.dispatch(fetchCategory(query.id))
  await store.dispatch(fetchMenus())
      }
      
export default Category