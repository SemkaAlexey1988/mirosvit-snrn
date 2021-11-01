import React, {useState} from 'react';
import Link from 'next/link'
import HeaderContacts from './HeaderContacts'
import HeaderLogo from './HeaderLogo'
import HeaderPopup from './HeaderPopup'
import Menu from '../../../containers/templates/menu'

const Header = ({}) => {
  const [data, setData] = useState({ menuStatus: false  }) 
  const showMenu = () => {
    if(data.menuStatus){
      setData({menuStatus: false }); 
    }else{
      setData({menuStatus: true }); 
    }   
  }
  return(
    <header className="site-header">
      <div className="container">
        <div className="column_1-3 contacts-block">
          <HeaderContacts/> 
        </div>      
        <div className="column_1-3 logo-block">
          <HeaderLogo/>
        </div>  
        <div className="column_1-3 popup-block">
         <HeaderPopup/> 
        </div> 
        <div className="menu-block">
          <p className="mobile-menu_main" >
            <i className="fa fa-bars" aria-hidden="true" onClick={showMenu}></i>
          </p> 
          <div className="main-menu_wrapper" style={{display: data.menuStatus ? 'block' : 'none'}}>
            <Menu/>
          </div>
        </div>
      </div>
    </header>	
  )
}

export default Header