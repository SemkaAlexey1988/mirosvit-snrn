import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import classes from '../../styles/main/mainInfo.module.scss'

const MainInfo = () => {

    return <div className={classes.mainInfoBlock}>
<h2>About us</h2>
<p>This online store is not real. And it was created only as a demo site. 
   For all questions of interest to you, you can write to us through the contact form. 
   You can open the contact form by clicking on the button in the right corner of the page header. 
   Or you can go to the contacts page through the menu at the top of the page.</p>
           </div>
   
}
    
export default MainInfo