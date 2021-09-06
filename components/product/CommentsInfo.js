 import React from 'react'

const CommentsInfo = ({comments}) => {
    return(
        <div>
        {comments.map((comment, index)=>{
        return <div key={index}>
        <h2>{comment.author}</h2>
        <p>{comment.email}</p>
        <p>{comment.message}</p>
        </div>    
        })
      
        } 
        </div>        
        )
    }
    
    export default CommentsInfo