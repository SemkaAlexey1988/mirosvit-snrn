 import React from 'react'
import Link from 'next/link'

import classes from '../../styles/contacts/contacts.module.scss'

const ContactsMap = ({contacts}) => {

    return <React.Fragment>
        {contacts.map(contact => {
    return <div key={contact.id} className="map-block">
    <div className="map">
    <iframe title="Google map" frameBorder="0" style={{ border: "0"}} width="100%" height="450" src={contact.map}></iframe>
    </div> 
    </div>
    }) 
    } 
    </React.Fragment>
    }
    
    export default ContactsMap