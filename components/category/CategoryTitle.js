 import React from 'react'
import Link from 'next/link'

const CategoryTitle = ({category}) => {
    return  <div className="category__content title-block">
    <h1>{category.title}</h1>
    </div>
    }
    
    export default CategoryTitle