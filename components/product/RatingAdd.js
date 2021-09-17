import React, {useState, useEffect, useRef} from 'react'

const RatingAdd = ({star}) => {

    const starFive = useRef(); 
    const starFour = useRef(); 
    const starThree = useRef();
    const starTwo = useRef();  
    const starOne = useRef();  

    const clickOne = () => {
        star(starOne.current.value)
    }
    const clickTwo = () => {
        star(starTwo.current.value)    
    }
    const clickThree = () => {
        star(starThree.current.value)    
    }
    const clickFour = () => {
        star(starFour.current.value)    
    }
    const clickFive = () => {
        star(starFive.current.value) 
    }

    return(
        <div className="rating-block rating-cart__stars">
        <input ref={starFive}  name="rating" value="5" id="rating-5" type="radio" />
        <label onClick={clickFive} htmlFor="rating-5" className="rating-block__label"><i className="fa fa-star-o" aria-hidden="true"></i></label> 
        <input ref={starFour} name="rating" value="4" id="rating-4" type="radio" />
        <label onClick={clickFour} htmlFor="rating-4" className="rating-block__label"><i className="fa fa-star-o" aria-hidden="true"></i></label> 
        <input ref={starThree} name="rating" value="3" id="rating-3" type="radio" />
        <label onClick={clickThree} htmlFor="rating-3" className="rating-block__label"><i className="fa fa-star-o" aria-hidden="true"></i></label>
        <input ref={starTwo} name="rating" value="2" id="rating-2" type="radio" />
        <label onClick={clickTwo} htmlFor="rating-2" className="rating-block__label"><i className="fa fa-star-o" aria-hidden="true"></i></label>
        <input ref={starOne} name="rating" value="1" id="rating-1" type="radio" />
        <label onClick={clickOne} htmlFor="rating-1" className="rating-block__label"><i className="fa fa-star-o" aria-hidden="true"></i></label>
        </div>         
        )
    }
    
    export default RatingAdd