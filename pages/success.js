import {useState, useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux'  
import React from 'react'
import {MainLayout} from '../components/MainLayout'
import {fetchWords} from '../store/actions/common/words'
import { fetchMenus } from '../store/actions/menus/menus';
import SuccessInfo from '../components/order/SuccessInfo'
import Error from '../components/templates/error'
import Loader from '../components/templates/loader'
import classes from '../styles/order/order.module.scss'


const Success = () => {
   
  const dispatch = useDispatch();
  const words = useSelector(state => state.words) 
  useEffect(async () => {
    let pageType = 'order'
    let languageId = 1  
    let targetWords = {
    page_type: pageType,
    language_id: languageId
    }
    dispatch(fetchWords(targetWords));    
  },[]);

  const successData = !(words.load || words.error)
  const errorBlock = words.error ? <Error/> : null
  const loader = words.load ? <Loader/> : null
  const content = <SuccessInfo words={words.data} />

    return <MainLayout title={'List of articles'}>
        <React.Fragment> 
        {errorBlock}  
        {loader}
        {content} 
        </React.Fragment>
        </MainLayout>
    }


    Success.getInitialProps = async ({store}) => {
      let pageType = 'order'
      let languageId = 1  
      let targetWords = {
      page_type: pageType,
      language_id: languageId
      }
await store.dispatch(fetchMenus())
await store.dispatch(fetchWords(targetWords))
    }
    
    export default Success