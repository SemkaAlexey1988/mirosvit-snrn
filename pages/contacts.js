import {useState, useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux'  
import React from 'react'
import {MainLayout} from '../components/MainLayout'
import Link from 'next/link'
import {fetchContacts} from '../store/actions/contacts/contacts'
import { fetchMenus } from '../store/actions/menus/menus';


const Contacts = () => {

  const refInput = useRef();    
  const dispatch = useDispatch();
  const {contacts} = useSelector(state => state.contacts) 
  useEffect(async () => {
    dispatch(fetchContacts());    
  },[]);




    return <MainLayout title={'List of articles'}>
        <React.Fragment>
        {contacts.map(contact => {
    return <div key={contact.id}>
        <h2>{contact.title}</h2>
    <div className="contacts-block">
    <div className="contacts-block__left">
    <p>{contact.description}</p>
    <p><a href={"mailto:" + contact.email}><i aria-hidden="true" className="fa fa-envelope"></i>{contact.email}</a></p>
    <p><a href={"tel:" + contact.phone}><i aria-hidden="true" className="fa fa-phone"></i>{contact.phone}</a></p>
    <p><a target="_blank" rel="noopener noreferrer" href={contact.map_link}><i aria-hidden="true" className="fa fa-map-marker"></i>{contact.address}</a></p>
    </div>
    <div className="contacts-block__right"><div className="map">
    <iframe title="Google map" frameBorder="0" style={{ border: "0"}} width="100%" height="450" src={contact.map}></iframe>
    </div> 
    </div>
    </div>
    </div>
    }) 
    } 
    </React.Fragment>
    </MainLayout>
    }


    Contacts.getInitialProps = async ({store}) => {
await store.dispatch(fetchMenus())
await store.dispatch(fetchContacts())
    }
    
    export default Contacts