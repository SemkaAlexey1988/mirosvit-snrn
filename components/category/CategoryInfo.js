 import React from 'react'
import Link from 'next/link'
import classes from '../../styles/categories/categories.module.scss'

const CategoryInfo = ({category}) => {
    return  <div className={classes.categoryContent}>
        <div className={classes.categoryContentInfo}>
    <div className={classes.categoryDescriptionText}>{category.description}</div>
    </div>
    </div>
    }
    
    export default CategoryInfo