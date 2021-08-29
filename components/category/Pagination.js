import React, {useState} from 'react'
import Link from 'next/link'

const Pagination = ({limit, page, path, count, filter}) => {
    let filterPath
    if(filter){
    filterPath = `&filter=${filter}` 
    }else{
    filterPath = ``  
    } 
    let pages = Math.ceil(count/limit) 
    let pageVal = Number(page)
    const items = []
    for (let i = 0; i < pages; i++) {
    let link = i+1
    items.push(<li key={i}><Link href={`/category/${path}/page=${link}${filterPath}`} as={`/category/${path}/page=${link}${filterPath}`} className={pageVal == link ? `active` : ``}><a>{link}</a></Link></li>)
}
    return  <React.Fragment> 
      <div className="pagination">
        <ul className="pagination__ul">
          {items} 
        </ul>  
      </div>
    </React.Fragment>
    }
    
    export default Pagination