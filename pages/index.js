import React from 'react'
import Head from 'next/head'
import {MainLayout} from '../components/MainLayout'
import Link from 'next/link'
import Image from 'next/image'
import { fetchMenus } from '../store/actions/menus/menus';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Index = () => {
return <MainLayout title={'Main page'}>
<React.Fragment>
<Head>
<title>Main page</title>
<meta name="description" content="This is a main page of next application." />
</Head>          
<h1>Main page</h1>
    <Carousel>
        <div>
            <Image src="/images/287.jpg" layout="fill" />
            <p className="legend">Legend 1</p>
        </div>
        <div>
            <Image src="/images/335.jpg" layout="fill" />
            <p className="legend">Legend 2</p>
        </div>
        <div>
            <Image src="/images/338.jpg" width="1200px" height="600px" />
            <p className="legend">Legend 3</p>
        </div>
    </Carousel>
</React.Fragment> 
</MainLayout>  
}

Index.getInitialProps = async ({store}) => {
    await store.dispatch(fetchMenus())
        }

export default Index