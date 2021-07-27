import {useState, useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux'  
import axios from 'axios';
import React from 'react'
import Router from 'next/router'
import {MainLayout} from '../components/MainLayout'
import Link from 'next/link'
import {fetchPosts} from '../store/actions/postsActions'


const Posts = ({  }) => {

const refInput = useRef();    



const dispatch = useDispatch();
const {posts} = useSelector(state => state.posts) 
const [data, setData] = useState({ posts: posts }) 

useEffect(async () => {
dispatch(fetchPosts());    
//const result = await axios('http://mirosvit-shop.herokuapp.com/categories',);
setData({posts: posts }); 

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
    {  posts.map((item, index) => (
    <li key={index}>
    <Link href={`/posts/[id]`} as={`/posts/${item.link}`}><a>{item.title}</a></Link>
  </li>
    ))   }
<ul>
{ /* posts.map((item, index) => (
        <li key={index}>
          <Link href={`/posts/[id]`} as={`/posts/${item.link}`}><a>{item.title}</a></Link>
        </li>
    ))  */ }
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
await store.dispatch(fetchPosts())
    }
    
    export default Posts