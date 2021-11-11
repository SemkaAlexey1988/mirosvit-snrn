import React from 'react'
import Head from 'next/head'
import {MainLayout} from '../components/MainLayout'
import Link from 'next/link'
import Image from 'next/image'
import { fetchMenus } from '../store/actions/menus/menus';
import { fetchSpecials } from '../store/actions/main/specials';
import Specials from '../containers/main/Specials';
import MainInfo from '../components/main/MainInfo';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



const Index = () => {   

return <MainLayout title={'Main page'}>
<React.Fragment>
    <div className="main-page">
<Head>
<title>Main page</title>
<meta name="description" content="This is a main page of next application." />
</Head>          
    <Carousel>
        <div>
            <img src="/images/287.jpg" />
            <p className="legend">Beautiful sea</p>
        </div>
        <div>
            <img src="/images/335.jpg" />
            <p className="legend">Beautiful city</p>
        </div>
        <div>
            <img src="/images/338.jpg" />
            <p className="legend">Beautiful Kyiv</p>
        </div>
    </Carousel>
    <div className="main-page__content">
    <h2>Specials products</h2>
    <Specials/>
    <MainInfo/>
    </div> 
  </div>  
</React.Fragment> 
</MainLayout>  
}

Index.getInitialProps = async ({store}) => {
    await store.dispatch(fetchMenus())
    await store.dispatch(fetchSpecials())
        }

export default Index