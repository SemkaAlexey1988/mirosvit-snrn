import React, {useState} from 'react'
import Link from 'next/link'
import classes from '../../styles/categories/categories.module.scss'

const Pagination = ({limit, page, path, count, filter}) => {

    let pages = Math.ceil(count/limit) 
    let pageVal = Number(page)
    const items = []
    for (let i = 0; i < pages; i++) {
    let link = i+1
    items.push(<li key={i} className={pageVal == link ? `page active` : `page`}><Link href={`/category/${path}/page=${link}${filter}`} as={`/category/${path}/page=${link}${filter}`}><a>{link}</a></Link></li>)
}
    return  <React.Fragment> 
      <div className={classes.pagination}>
        <ul className={classes.paginationUl}>
          {items} 
        </ul>  
      </div>
    </React.Fragment>
    }
    
    export default Pagination