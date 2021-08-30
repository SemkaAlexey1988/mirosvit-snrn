import {useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux'  
import React from 'react'
import { fetchProductsList, fetchProductsCount } from '../../store/actions/category/ProductsList';
import ProductsListInfo from '../../components/category/ProductsListInfo';
import Pagination from '../../components/category/Pagination';
import settings from '../../settings';


const ProductsList = ({id, page}) => {

  console.log(id)
  console.log(page) 
  const dispatch = useDispatch();
  const productsList = useSelector(state => state.productsList) 

  useEffect(async () => {
    dispatch(fetchProductsList(id, page)); 
    dispatch(fetchProductsCount(id));   
  },[]);
  
  const successData = !(productsList.load || productsList.error)
  const errorBlock = productsList.error ? <div className="error"></div> : null
  const loader = productsList.load ? <div className="load"></div> : null
  const content = <div className="products">
    <ProductsListInfo productsList={productsList.data} />
    <Pagination limit={settings.limit} page={page} path={id} count={productsList.productCount.count} />
    </div>

    return <React.Fragment>
       {errorBlock}  
       {loader}
       {content} 
      </React.Fragment>
   
}
    
    export default ProductsList