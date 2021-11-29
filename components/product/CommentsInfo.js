 import React from 'react'
 import classes from '../../styles/product/product.module.scss'

const CommentsInfo = ({comments}) => {
    return(
        <React.Fragment>
        {comments.map((comment, index)=>{
        return <div key={index} className={classes.comments}>
        <p className={classes.commentsTitle}>{comment.author}</p>
       {/* <p className="comments__email">{comment.email}</p> */}
        <p className={classes.CommentsMessage}>{comment.message}</p>
        </div>    
        })
      
        } 
        </React.Fragment>       
        )
    }
    
    export default CommentsInfo