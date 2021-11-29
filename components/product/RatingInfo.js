 import React from 'react'
 import classes from '../../styles/product/product.module.scss'

const RatingInfo = ({rating}) => {
    let ratingAverage = rating.average
    let averageRating 
    if(ratingAverage){
        averageRating = `${parseFloat(ratingAverage.toFixed(1))} / 5`;  
    } 
    return(
        <div className={classes.ratingInfo}>
        <p className={classes.ratingCartAverage}>{averageRating}</p>
        <p className={classes.ratingCartCounter}>({rating.counter} votes)</p>
         </div>        
        )
    }
    
    export default RatingInfo