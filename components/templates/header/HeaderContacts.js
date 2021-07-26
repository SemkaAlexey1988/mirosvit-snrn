import React from 'react';
import Link from 'next/link'

const HeaderContacts = ({}) => {

  return(
    <div className="header__contacts">
<ul>      
<li><a href="tel:380985472185"><i aria-hidden="true" className="fa fa-phone"></i> +38 098 54-721-85</a></li>
<li><a href="vorzelski@gmail.com"><i className="fas fa-envelope"></i> vorzelski@gmail.com</a></li>
</ul>
  </div>
  )  

}

export default HeaderContacts