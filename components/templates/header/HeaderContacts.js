import React from 'react';
import Link from 'next/link'

const HeaderContacts = ({}) => {

  return(
    <div className="header__contacts">
<ul>      
<li><Link href="tel:380985472185" as="tel:380985472185"><a><i aria-hidden="true" className="fa fa-phone"></i> <span>+38 098 54-721-85</span></a></Link></li>
<li><Link href="mailto:vorzelski@gmail.com" as="mailto:vorzelski@gmail.com"><a><i className="fas fa-envelope"></i> <span>vorzelski@gmail.com</span></a></Link></li>
</ul>
  </div>
  )  

}

export default HeaderContacts