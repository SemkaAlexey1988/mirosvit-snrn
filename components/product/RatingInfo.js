 import React from 'react'

const RatingInfo = ({rating}) => {
    let ratingAverage = rating.average
    let averageRating 
    if(ratingAverage){
        averageRating = `${parseFloat(ratingAverage.toFixed(1))} / 5`;  
    } 
    return(
        <div className="rating__info">
        <p className="rating-cart__average">{averageRating}</p>
        <p className="rating-cart__counter">({rating.counter} votes)</p>
         </div>        
        )
    }
    
    export default RatingInfo