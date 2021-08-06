import {useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux'  
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {fetchSpecials} from '../../store/actions/main/specials'

import classes from '../../styles/main/specials.module.scss'

const SpecialsInfo = () => {

  const refInput = useRef();    
  const dispatch = useDispatch();
  const {specials} = useSelector(state => state.specials) 

  console.log(specials)

  useEffect(async () => {
    dispatch(fetchSpecials());    
  },[]);


    return <div className={classes.productsSpecialsWrap}>
        { specials.map(special => {
            return <div key={special.product_id} className={classes.productsSpecials}>       
                <Link href={`/product/${special.url}`} as={`/product/${special.url}`}><a><Image src={special.image} alt={special.name} className={classes.productsSpecials__img} width="500px" height="500px" /></a></Link>
                <Link href={`/product/${special.url}`} as={`/product/${special.url}`}><a><h2 className={classes.productsSpecials__name}>{special.name}</h2></a></Link>
                <p>{special.price}</p>
                <p>{special.description}</p>
                <p>{special.sku}</p>
            </div>
    })
  }
    </div>
   
}
    
    export default SpecialsInfo