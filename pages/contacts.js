import {useState, useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux'  
import React from 'react'
import {MainLayout} from '../components/MainLayout'
import {fetchContacts} from '../store/actions/contacts/contacts'
import { fetchMenus } from '../store/actions/menus/menus';
import { contactAdd } from '../store/actions/form/contact';
import ContactsInfo from '../components/contacts/ContactsInfo'
import ContactsMap from '../components/contacts/ContactsMap'
import ContactForm from '../components/templates/form/ContactForm'
import Error from '../components/templates/error'
import Loader from '../components/templates/loader'
import classes from '../styles/contacts/contacts.module.scss'


const Contacts = () => {

  const refInput = useRef();    
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts) 
  const contact = useSelector(state => state.contact) 
  useEffect(async () => {
    dispatch(fetchContacts());    
  },[]);

  const contactValues = (data) => {
    dispatch(contactAdd(data));
  }

  const successData = !(contacts.load || contacts.error)
  const errorBlock = contacts.error ? <Error/> : null
  const loader = contacts.load ? <Loader/> : null
  const content = <ContactsInfo contacts={contacts.data} />

    return <MainLayout title={'List of articles'}>
        <div className={classes.contactsPage}>
        {errorBlock}  
        {loader}
        {content} 
        <div className={classes.contactsPageRight}>
        <ContactForm addContact={contactValues}/>
        </div>
        </div>
        <ContactsMap contacts={contacts.data} />
        </MainLayout>
    }


    Contacts.getInitialProps = async ({store}) => {
await store.dispatch(fetchMenus())
await store.dispatch(fetchContacts())
    }
    
    export default Contacts