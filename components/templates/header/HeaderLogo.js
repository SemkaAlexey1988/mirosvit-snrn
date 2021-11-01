import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const HeaderLogo = ({}) => {

  return(
<React.Fragment>    
<Link href={'/'}><a className="logo"><Image src="/assets/images/logo.png" width="255px" height="80px" /></a></Link>
</React.Fragment>  
  )  

}

export default HeaderLogo