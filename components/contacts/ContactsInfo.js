 import React from 'react'
import Link from 'next/link'

const ContactsInfo = ({contacts}) => {

    return <React.Fragment>
        {contacts.map(contact => {
    return <div key={contact.id}>
        <h2>{contact.title}</h2>
    <div className="contacts-block">
    <div className="contacts-block__left">
    <p>{contact.description}</p>
    <p><Link href={"mailto:" + contact.email} as={"mailto:" + contact.email}><a><i aria-hidden="true" className="fa fa-envelope"></i>{contact.email}</a></Link></p>
    <p><Link href={"tel:" + contact.phone} as={"tel:" + contact.phone}><a><i aria-hidden="true" className="fa fa-phone"></i>{contact.phone}</a></Link></p>
    <p><Link target="_blank" rel="noopener noreferrer" href={contact.map_link} as={contact.map_link}><a><i aria-hidden="true" className="fa fa-map-marker"></i>{contact.address}</a></Link></p>
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
    }
    
    export default ContactsInfo