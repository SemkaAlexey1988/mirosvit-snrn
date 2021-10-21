 import React from 'react'

const CommentsInfo = ({comments}) => {
    return(
        <React.Fragment>
        {comments.map((comment, index)=>{
        return <div key={index} className="comments">
        <p className="comments__title">{comment.author}</p>
       {/* <p className="comments__email">{comment.email}</p> */}
        <p className="comments__message">{comment.message}</p>
        </div>    
        })
      
        } 
        </React.Fragment>       
        )
    }
    
    export default CommentsInfo