 import React from 'react'
import Link from 'next/link'

import classes from '../../styles/contacts/contacts.module.scss'

const ContactsInfo = ({contacts}) => {

    return <React.Fragment>
        {contacts.map(contact => {
    return <div key={contact.id} className={classes.contactsPageLeft}>
        <h2>{contact.title}</h2>
    <p>{contact.description}</p>
    <p className={classes.contactsMail}><Link href={"mailto:" + contact.email} as={"mailto:" + contact.email}><a><i aria-hidden="true" className="fa fa-envelope"></i>{contact.email}</a></Link></p>
    <p className={classes.contactsPhone}><Link href={"tel:" + contact.phone} as={"tel:" + contact.phone}><a><i aria-hidden="true" className="fa fa-phone"></i>{contact.phone}</a></Link></p>
    <p className={classes.contactsMap}><Link target="_blank" rel="noopener noreferrer" href={contact.map_link} as={contact.map_link}><a><i aria-hidden="true" className="fa fa-map-marker"></i>{contact.address}</a></Link></p>
    </div>
    }) 
    } 
    </React.Fragment>
    }
    
    export default ContactsInfo