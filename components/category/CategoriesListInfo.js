import React, {useState} from 'react'
import Link from 'next/link'



const CategoriesListInfo = ({categoriesList}) => {

    const [data, setData] = useState(0) 

    const toggleClick = (id) => { 
      setData(id);
    }
   
    let partUrl = '/category/'; 
    return  <React.Fragment> 
    <ul className="categoriesMenu">
    {categoriesList.map((category) => {
    if(category.child[0]){
   
    return <li key={category.id}>
    <Link href={`${partUrl}${category.link}`} as={`${partUrl}${category.link}`}><a>{category.title}</a></Link>
    <span className={data === category.id  ? 'toggleButton show' : 'toggleButton' } onClick={() => toggleClick(category.id)}></span>

    <ul className={data === category.id  ? 'subMenu show' : 'subMenu' }>
    {category.child.map(categoryChild => { 
    return <li key={categoryChild.id}>
    <Link href={`${partUrl}${categoryChild.link}`} as={`${partUrl}${categoryChild.link}`}><a>{categoryChild.title}</a></Link>
    </li>
    })  
    }
    </ul>
   
    </li>

    }else{
    return <li key={category.id}>
    <Link href={`${partUrl}${category.link}`} as={`${partUrl}${category.link}`}><a>{category.title}</a></Link>
    </li>    
    }
    
    })
    }
    </ul>
    </React.Fragment>
    }
    
    export default CategoriesListInfo