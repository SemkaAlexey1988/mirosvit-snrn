import React, {useState} from 'react';
import Link from 'next/link'
import HeaderContacts from './HeaderContacts'

const Header = ({}) => {
  return(
    <header className="site-header">
      <div className="container">
        <div className="column_1-3">
          <HeaderContacts/> 
        </div>      
        <div className="column_1-3">
         {/*<HeaderLogo/>*/}
        </div>  
        <div className="column_1-3">
         {/* <HeaderPopup/> */} 
        </div> 
        <div className="menu-wrapper">
        <p>Test</p> 
<ul className="menu-main">
<li><Link href={'/'}><a>Main</a></Link></li>
<li><Link href={'/about'}><a>About</a></Link></li>
<li><Link href={'/posts'}><a>Posts</a></Link></li>
</ul> 
        </div>
      </div>
    </header>	
  )
}

export default Header