import {useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux'  
import React from 'react'
import { fetchProductsList, fetchProductsCount } from '../../store/actions/category/ProductsList';
import ProductsListInfo from '../../components/category/ProductsListInfo';


const ProductsList = ({id}) => {
   
  const dispatch = useDispatch();
  const productsList = useSelector(state => state.productsList) 

  useEffect(async () => {
    dispatch(fetchProductsList(id)); 
    dispatch(fetchProductsCount(id));   
  },[]);

  const successData = !(productsList.load || productsList.error)
  const errorBlock = productsList.error ? <div className="error"></div> : null
  const loader = productsList.load ? <div className="load"></div> : null
  const content = <ProductsListInfo productsList={productsList.data} />

    return <React.Fragment>
       {errorBlock}  
       {loader}
       {content} 
      </React.Fragment>
   
}
    
    export default ProductsList