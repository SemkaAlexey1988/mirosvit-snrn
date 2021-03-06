import {useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux'  
import React from 'react'
import { fetchProductsList, fetchProductsCount } from '../../store/actions/category/productsList';
import ProductsListInfo from '../../components/category/ProductsListInfo';
import Pagination from '../../components/category/Pagination';
import settings from '../../settings';
import classes from '../../styles/categories/categories.module.scss'


const ProductsList = ({id, page, filter}) => {

  let filterValue
  if(filter && filter != ''){
    filterValue = `&filter=${filter}`
  }else{
    filterValue = ``
  }
  const dispatch = useDispatch();
  const productsList = useSelector(state => state.productsList) 

  useEffect(async () => {
    dispatch(fetchProductsList(id, page)); 
    dispatch(fetchProductsCount(id));   
  },[]);
  
  const successData = !(productsList.load || productsList.error)
  const errorBlock = productsList.error ? <div className="error"></div> : null
  const loader = productsList.load ? <div className="load"></div> : null
  const content = <div className={`${classes.productsWrap} pb`}>
    <ProductsListInfo productsList={productsList.data} />
    <Pagination limit={settings.limit} page={page} path={id} filter={filterValue} count={productsList.productCount.count} />
    </div>

    return <React.Fragment>
       {errorBlock}  
       {loader}
       {content} 
      </React.Fragment>
   
}
    
    export default ProductsList