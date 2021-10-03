import {useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux'  
import React from 'react'
import {fetchSpecials} from '../../store/actions/main/specials'

import SpecialsInfo from '../../components/main/SpecialsInfo'

const Specials = () => {

  const refInput = useRef();    
  const dispatch = useDispatch();
  const {specials} = useSelector(state => state.specials) 


  useEffect(async () => {
    dispatch(fetchSpecials());    
  },[]);


    return <React.Fragment><SpecialsInfo specials={specials}/></React.Fragment>
   
}
    
    export default Specials