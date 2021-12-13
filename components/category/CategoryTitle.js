 import React from 'react'
import Link from 'next/link'
import classes from '../../styles/categories/categories.module.scss'

const CategoryTitle = ({category}) => {
    return  <div className={`${classes.categoryContent} title-block`}>
    <h1>{category.title}</h1>
    </div>
    }
    
    export default CategoryTitle