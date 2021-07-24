import {useRouter} from 'next/router'
import {MainLayout} from '../../components/MainLayout'
import Router from 'next/router'
import axios from 'axios';
import React from 'react'
import Link from 'next/link'

import {useState, useEffect} from 'react';

const Post = ({ post }) => {

  const [data, setData] = useState({ post: post }) 
  
const router = useRouter() 

useEffect(async () => {
  const result = await axios(`http://mirosvit-shop.herokuapp.com/category/${router.query.id}`,);
  setData({post: result.data }); 
  
  },[]);


  

return <MainLayout>
<>
<h1>Post - {router.query.id}</h1>
{router.query.q}
<ul>

{  data.post.map((item, index) => (
       <li key={index}>
       <h2><Link href={`/posts/${item.link}`}><a>{item.title}</a></Link></h2>
       <p>{item.description}</p>
       <p>{item.id}</p>
     </li>
    ))   }

    </ul>
</>
</MainLayout>
}
/*
export async function getServerSideProps ({query, req}) {

   const result = await axios(`http://mirosvit-shop.herokuapp.com/category/${query.id}`);
  const post = await result.data 
    
    return { props: {post} }
        }
        */

        Post.getInitialProps = async ({query}) => {   

            const result = await axios(`http://mirosvit-shop.herokuapp.com/category/${query.id}`);
            const post = await result.data 
      
            return { post }
                }      

       

export default Post