import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Link from 'next/link'
import classes from '../../styles/categories/categories.module.scss'



const CategoriesListInfo = ({categoriesList}) => {

    const [data, setData] = useState(0) 

    const dispatch = useDispatch();
    const [menu, setMenu] = useState({ menuStatus: false  }) 

    const showMenu = () => {
      if(menu.menuStatus){
        setMenu({menuStatus: false }); 
      }else{
        setMenu({menuStatus: true }); 
      }   
    }

    const toggleClick = (id) => { 
      setData(id);
    }
   
    let partUrl = '/category/'; 
    return  <div className={classes.categoriesMenu}> 
      <p className={classes.mobileMenuCategories} >
      <i className="fa fa-bars" aria-hidden="true" onClick={showMenu}></i> Categories List
      </p>
    <ul className={classes.categoriesMenu} style={{display: menu.menuStatus ? 'block' : 'none'}}>
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
    </div>
    }
    
    export default CategoriesListInfo