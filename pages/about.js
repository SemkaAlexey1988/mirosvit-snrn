import React from 'react'
import Router from 'next/router'
import {MainLayout} from '../components/MainLayout'

import classes from '../styles/about/about.module.scss'

const About = () => {
    const linkToHome = () => {
Router.push('/')
    }
    return <MainLayout title={'About page'}>
        <React.Fragment>
    <h1 className={classes.about}>About page</h1> 
<button onClick={linkToHome}>Go home</button>    
    </React.Fragment>
    </MainLayout>
    }
    
    export default About