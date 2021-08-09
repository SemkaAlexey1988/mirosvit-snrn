import React, {useState} from 'react';
import Link from 'next/link'
import HeaderContacts from './HeaderContacts'
import HeaderLogo from './HeaderLogo'
import HeaderPopup from './HeaderPopup'
import Menu from '../../../containers/templates/menu'

const Header = ({}) => {
  return(
    <header className="site-header">
      <div className="container">
        <div className="column_1-3">
          <HeaderContacts/> 
        </div>      
        <div className="column_1-3">
          <HeaderLogo/>
        </div>  
        <div className="column_1-3">
         <HeaderPopup/> 
        </div> 
        <Menu/>
      </div>
    </header>	
  )
}

export default Header