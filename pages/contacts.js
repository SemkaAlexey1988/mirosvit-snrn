import {useState, useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux'  
import React from 'react'
import {MainLayout} from '../components/MainLayout'
import {fetchContacts} from '../store/actions/contacts/contacts'
import { fetchMenus } from '../store/actions/menus/menus';
import ContactsInfo from '../components/contacts/ContactsInfo'


const Contacts = () => {

  const refInput = useRef();    
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts) 
  useEffect(async () => {
    dispatch(fetchContacts());    
  },[]);

  const successData = !(contacts.load || contacts.error)

    return <MainLayout title={'List of articles'}>
        <React.Fragment> 
    <ContactsInfo contacts={contacts.data} />
    </React.Fragment>
    </MainLayout>
    }


    Contacts.getInitialProps = async ({store}) => {
await store.dispatch(fetchMenus())
await store.dispatch(fetchContacts())
    }
    
    export default Contacts