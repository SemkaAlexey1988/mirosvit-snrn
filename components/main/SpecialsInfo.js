import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import classes from '../../styles/main/specials.module.scss'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const SpecialsInfo = ({specials}) => {
    let slidesCount 
    let pageWidthValue
    if (typeof window !== 'undefined') {
    pageWidthValue = window.innerWidth
        }

if(pageWidthValue > 768){
    return <div className={classes.productsSpecialsWrap}>
    { specials.map(special => {
        return <div key={special.product_id} className={classes.productsSpecials}>       
            <Link href={`/product/${special.url}`} as={`/product/${special.url}`}><a><Image src={special.image} alt={special.name} className={classes.productsSpecials__img} width="500px" height="500px" /></a></Link>
            <Link href={`/product/${special.url}`} as={`/product/${special.url}`}><a><h2 className={classes.productsSpecials__name}>{special.name}</h2></a></Link>
            <p>{special.price} USD</p>
            <p>{special.description}</p>
        </div>
     })
    }
       </div>
}else{
    return <Carousel className={classes.productsSpecialsWrap}>
    { specials.map(special => {
        return <div key={special.product_id} className={classes.productsSpecials}>       
            <Link href={`/product/${special.url}`} as={`/product/${special.url}`}><a><Image src={special.image} alt={special.name} className={classes.productsSpecials__img} width="500px" height="500px" /></a></Link>
            <Link href={`/product/${special.url}`} as={`/product/${special.url}`}><a><h2 className={classes.productsSpecials__name}>{special.name}</h2></a></Link>
            <p>{special.price} USD</p>
            <p>{special.description}</p>
        </div>
     })
    }
       </Carousel>

}
      
}
    
export default SpecialsInfo