import {useState, useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux'  
import React from 'react'
import {MainLayout} from '../components/MainLayout'
import {fetchContacts} from '../store/actions/contacts/contacts'
import { fetchMenus } from '../store/actions/menus/menus';
import ContactsInfo from '../components/contacts/ContactsInfo'
import Error from '../components/templates/error'
import Loader from '../components/templates/loader'


const Contacts = () => {

  const refInput = useRef();    
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts) 
  useEffect(async () => {
    dispatch(fetchContacts());    
  },[]);

  const successData = !(contacts.load || contacts.error)
  const errorBlock = contacts.error ? <Error/> : null
  const loader = contacts.load ? <Loader/> : null
  const content = <ContactsInfo contacts={contacts.data} />

    return <MainLayout title={'List of articles'}>
        <React.Fragment> 
        {errorBlock}  
        {loader}
        {content} 
        </React.Fragment>
        </MainLayout>
    }


    Contacts.getInitialProps = async ({store}) => {
await store.dispatch(fetchMenus())
await store.dispatch(fetchContacts())
    }
    
    export default Contacts