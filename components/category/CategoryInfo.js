 import React from 'react'
import Link from 'next/link'

const CategoryInfo = ({category}) => {
    return  <div className="category__content">
    <h1>{category.title}</h1>
    <p>{category.description}</p>
    </div>
    }
    
    export default CategoryInfo