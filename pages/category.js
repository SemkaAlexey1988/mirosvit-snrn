import {useState, useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux'  
import React from 'react'
import {MainLayout} from '../components/MainLayout'
import Link from 'next/link'
import {fetchPosts} from '../store/actions/postsActions'
import { fetchMenus } from '../store/actions/menus/menus';


const Posts = ({  }) => {

  const refInput = useRef();    
  const dispatch = useDispatch();
  const {posts} = useSelector(state => state.posts) 
  useEffect(async () => {
    dispatch(fetchPosts());    
  },[]);



  const handleClick = (event) => {
    event.preventDefault();
    console.log(refInput);
    alert('50');
};

  const onInputchange = (event) => {
    console.log(event.target.value)
  }

    return <MainLayout title={'List of articles'}>
        <React.Fragment>
    <h1>List of posts</h1> 
    <ul>
    {  posts.map((item, index) => (
    <li key={index}>
    <Link href={`/posts/[id]`} as={`/posts/${item.link}`}><a>{item.title}</a></Link>
  </li>
    ))   }
    </ul>

<form onSubmit={handleClick}>
<p>
<input type="text" ref={refInput} onChange={onInputchange} defaultValue="Focus me"/>
    </p>
<button type="submit">FETCH DATA</button>
</form>
    </React.Fragment>
    </MainLayout>
    }


    Posts.getInitialProps = async ({store}) => {
await store.dispatch(fetchMenus())
await store.dispatch(fetchPosts())
    }
    
    export default Posts