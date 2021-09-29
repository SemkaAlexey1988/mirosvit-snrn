 import React from 'react'
import Link from 'next/link'

const CategoryInfo = ({category}) => {
    return  <React.Fragment> 
    <h1>{category.title}</h1>
    <p>{category.description}</p>
    </React.Fragment>
    }
    
    export default CategoryInfo