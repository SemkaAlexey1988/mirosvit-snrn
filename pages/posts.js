import {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import React from 'react'
import Router from 'next/router'
import {MainLayout} from '../components/MainLayout'
import Link from 'next/link'


const Posts = ({ posts }) => {

const refInput = useRef();    

const [data, setData] = useState({ posts: posts }) 

useEffect(async () => {
const result = await axios('https://mirosvit-shop.herokuapp.com/categories',);
setData({posts: result.data }); 

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
    {  data.posts.map((item, index) => (
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


    Posts.getInitialProps = async () => {
/*
const result = await fetch('http://mirosvit-shop.herokuapp.com/categories');
const posts = await result.json()  
*/      

const result = await axios('https://mirosvit-shop.herokuapp.com/categories');
const posts = await result.data 

return { posts }
    }
    
    export default Posts