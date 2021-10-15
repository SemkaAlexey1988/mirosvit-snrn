 import React from 'react'
import Link from 'next/link'

const CategoryInfo = ({category}) => {
    return  <div className="category__content">
        <div className="category__content-info">
    <div className="category__description-text">{category.description}</div>
    </div>
    </div>
    }
    
    export default CategoryInfo