import React, {Component} from 'react';

import paths from '../../../api/routes.json';
import api from '../../../config.json';
import axios from 'axios';

class FilterPrice extends Component {

  constructor(){
    super();
    this.state = {
    minPrice: 2000,  
    valueMin: 2000,
    thumbMin: 2000,
    maxPrice: 8000, 
    valueMax: 8000,
    thumbMax: 8000,
    filterMin: 2000,
    filterMax: 8000,
    stateInputMin: false,
    stateInputMax: false,
    clickerMin: false,
    clickerMax: false,
    changeMin: false,
    changeMax: false,
    clickerMinMove: false,
    clickerMaxMove: false,
    sliderRews: {},
    thumbVal: {} 
  };
    this.handleChangeMin = this.handleChangeMin.bind(this);
    this.handleChangeMax = this.handleChangeMax.bind(this);
    this.applyFilterPrice = this.applyFilterPrice.bind(this);
    this.elementMove = this.elementMove.bind(this);
    this.thumbMin = React.createRef();
    this.inputMin = React.createRef();
    this.thumbMax = React.createRef();
    this.inputMax = React.createRef();
    this.slider = React.createRef();

    }  



componentDidMount() { 
document.addEventListener('mouseup', this.endEventMin, false);    
document.addEventListener('mouseup', this.endEventMax, false);  
document.addEventListener('mousemove', this.elementMove, false); 

fetch(`${api.api}${paths.minmaxpriceFilter}/${this.props.id}`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {

    this.setState({ 
      thumbMin: data[0].min_price,
      thumbMax: data[0].max_price,
      minPrice: data[0].min_price,
      maxPrice: data[0].max_price
    })


        
    if(this.props.filter != ''){
    if(this.props.filterMin > data[0].min_price && this.props.filterMin <= data[0].max_price && this.props.filterMin <= this.props.filterMax){
    this.setState({
    valueMin: this.props.filterMin,
    filterMin: this.props.filterMin
    }) 
    }else{
    this.setState({
    valueMin: data[0].min_price
    })
    }
    if(this.props.filterMax > data[0].min_price && this.props.filterMax <= data[0].max_price && this.props.filterMin <= this.props.filterMax){
    this.setState({
    valueMax: this.props.filterMax,
    filterMax: this.props.filterMax
  }) 
    }else{
    this.setState({ 
    valueMax: data[0].max_price
  
  })
    }
    }else{
      this.setState({ 
valueMin: data[0].min_price,
valueMax: data[0].max_price
    }) 
    }



  });

  let thumbMinValue = this.state.thumbMin 
  let thumbMaxValue = this.state.thumbMax

  if(this.props.filter != ''){
    if(this.props.filterMin > thumbMinValue && this.props.filterMin < thumbMaxValue && this.props.filterMin < this.props.filterMax){
    startMinPrice = this.props.filterMin  
    this.setState({thumbMin: this.props.filterMin})
    } 
    if(this.props.filterMax > thumbMinValue && this.props.filterMax < thumbMaxValue && this.props.filterMin < this.props.filterMax){
    this.setState({thumbMax: this.props.filterMax})
    }  
    } 

let sliderRefs = this.sliderRefs()
this.setState({
sliderRews:sliderRefs.sliderCoords,
thumbVal: sliderRefs.thumbMin
})








}   

componentWillUnmount(){
  document.removeEventListener('mouseup', this.endEventMin, false);  
  document.removeEventListener('mouseup', this.endEventMax, false); 
  document.removeEventListener('mousemove', this.elementMove, false); 
}


elementTouchMoveMin(event){
let ClientX = event.touches[0].clientX;

this.MoveMin(ClientX)

};

elementTouchMoveMax(event){
  this.setState({clickerMaxMove: true})

  let ClientX = event.touches[0].clientX;
  this.MoveMax(ClientX)
  
  
  };

minTouchEnd(){
  this.setState({clickerMin: false})
  this.setState({clickerMax: false})
  let values = {
    valueMin: this.state.valueMin,
    valueMax: this.state.valueMax   
    }
    this.props.newValue(values)
};

maxTouchEnd(){
  this.setState({clickerMin: false})
  this.setState({clickerMax: false})
  let values = {
    valueMin: this.state.valueMin,
    valueMax: this.state.valueMax   
    }
    this.props.newValue(values)
  };




  
startEventMin(){
  this.setState({clickerMin: true})
  this.setState({changeMin: true})
  return false; 
};

startEventTouchMin(){
  this.setState({clickerMin: true})
};

startEventTouchMax(){
  this.setState({clickerMax: true})
};


elementMove(event) {

if(this.state.clickerMin){
  this.setState({
  clickerMinMove: true,
  stateInputMin: false
  })
  this.MoveMin(event.pageX)

}else if(this.state.clickerMax){
  this.setState({
  clickerMaxMove: true,
  stateInputMax: false
})
  this.MoveMax(event.pageX)
}
}

endEventMin = (event) => {


  this.setState({clickerMin: false})
  this.setState({clickerMax: false})
  
  let sliderRefs = this.sliderRefs()

  let thumbCoordsWidth = sliderRefs.thumbMin.offsetWidth/2;
 
  let thumbCoordsMin = this.getCoords(sliderRefs.thumbMin);
  let shiftMin = event.pageX - thumbCoordsMin.left;

  let newLeft;
  newLeft = event.pageX - shiftMin - sliderRefs.sliderCoords.left;
  let rightEdgeMin = sliderRefs.sliderElement.offsetWidth - sliderRefs.thumbMin.offsetWidth;
  if (newLeft > rightEdgeMin) {
    newLeft = rightEdgeMin;
  }

let normal = this.normalization()

let priceValueNumberMin
if(this.state.clickerMinMove){
  priceValueNumberMin = Math.round(((newLeft+thumbCoordsWidth) / sliderRefs.sliderSizeNormal)*normal.normalization + normal.minVal); 

if(priceValueNumberMin < 0){
  priceValueNumberMin = 0
}
}else{
  priceValueNumberMin = this.state.valueMin
}
  let priceValueMin = priceValueNumberMin.toString();
 // this.setState({valueMin: priceValueMin}) 

 if(this.state.changeMin){

let values = {
valueMin: this.state.valueMin,
valueMax: this.state.valueMax   
}
this.props.newValue(values)
 }
 this.setState({changeMin: false})
  

  this.setState({clickerMax: false})
this.setState({clickerMin: false})

  document.onmousemove = document.onmouseup = null;
};


startEventMax(event){
  this.setState({clickerMax: true})
  this.setState({changeMax: true})
  return false; 
  
};




endEventMax = (event) => {

  this.setState({clickerMin: false})
  this.setState({clickerMax: false})

  let sliderRefs = this.sliderRefs()
 
  let thumbCoordsMax = this.getCoords(sliderRefs.thumbMax);
  let shiftMax = event.pageX - thumbCoordsMax.left;

  let newRight;

  newRight = event.pageX - shiftMax - sliderRefs.sliderCoords.left;
  if (newRight < 0) {
    newRight = 0;
  }
  let priceValueNumberMax
  if(this.state.clickerMaxMove){
  let rightEdgeMax = sliderRefs.sliderElement.offsetWidth - sliderRefs.thumbMax.offsetWidth;
  if (newRight > rightEdgeMax) {
    newRight = rightEdgeMax;
  }
  let normal = this.normalization()
  priceValueNumberMax = Math.round((newRight / sliderRefs.sliderSizeNormal)*normal.normalization + normal.minVal);
}else{
  priceValueNumberMax = this.state.valueMax
}

  let priceValueMax = priceValueNumberMax.toString();
 // this.setState({valueMax: priceValueMax}) 
 if(this.state.changeMax){
  let values = {
    valueMin: this.state.valueMin,
    valueMax: this.state.valueMax   
    }
    this.props.newValue(values)
 }
 this.setState({changeMax: false})

  

  document.onmousemove = document.onmouseup = null;

 
};




MoveMin = (ClientX) => {
  let sliderRefs = this.sliderRefs()
  let normal = this.normalization()
  let newLeft;
  newLeft = ClientX - sliderRefs.sliderCoords.left;

  
  let neighbourCoords = this.getCoords(sliderRefs.thumbMax);
  
  let thumbCoordsWidth = sliderRefs.thumbMin.offsetWidth/2;
  let neighbourCoordsInner = neighbourCoords.left - sliderRefs.sliderCoords.left
  
  
  if (newLeft < 0) {
    newLeft = 0;
  }
  
  let rightEdgeMin = sliderRefs.sliderElement.offsetWidth - sliderRefs.thumbMin.offsetWidth;
  if (newLeft > rightEdgeMin) {
    newLeft = rightEdgeMin;
  }
  
  if(newLeft > neighbourCoordsInner){
    newLeft = neighbourCoordsInner;
  }
  
  
  sliderRefs.thumbMin.style.left = newLeft-thumbCoordsWidth + 'px';
  let priceValueNumberMin = Math.round((newLeft / sliderRefs.sliderSizeNormal)*normal.normalization + normal.minVal);
  let priceValueMin = priceValueNumberMin.toString();
  if(priceValueMin > this.state.valueMax){
  priceValueMin = this.state.valueMax   
  }
  this.setState({valueMin: priceValueMin}) 


}

MoveMax = (ClientX) => {
  let sliderRefs = this.sliderRefs()

  let thumbCoordsWidth = sliderRefs.thumbMax.offsetWidth/2;

  let neighbourCoords = this.getCoords(sliderRefs.thumbMin);
  let neighbourCoordsInner = neighbourCoords.right - sliderRefs.sliderCoords.left - thumbCoordsWidth


  let newRight;
  newRight = ClientX - sliderRefs.sliderCoords.left-thumbCoordsWidth;

  if (newRight < 0) {
    newRight = 0;
  }

  let rightEdgeMax = sliderRefs.sliderElement.offsetWidth - sliderRefs.thumbMax.offsetWidth;
  if (newRight > rightEdgeMax) {
    newRight = rightEdgeMax;
  }

  if(newRight < neighbourCoordsInner){
    newRight = neighbourCoordsInner;
  }

  sliderRefs.thumbMax.style.left = newRight + 'px';
  let normal = this.normalization()

const thumbMin = this.thumbMin.current  
const thumbMinW = thumbMin.offsetWidth
let newRightVal = newRight
console.log(newRightVal)
console.log(sliderRefs.sliderSizeNormal)
console.log(normal.normalization)
  console.log(normal.minVal)
  let priceValueNumberMax = Math.round((newRightVal / sliderRefs.sliderSizeNormal)*normal.normalization + normal.minVal);
  let priceValueMax = priceValueNumberMax.toString();

  if(priceValueMax < this.state.valueMin){
    priceValueMax = this.state.valueMin   
    }
   
 
  this.setState({valueMax: priceValueMax}) 
}




sliderRefs = () => {
const sliderElement = this.slider.current;   
const thumbMin = this.thumbMin.current

let sliderSize = sliderElement.offsetWidth - thumbMin.offsetWidth
let sliderSizeNormal = sliderSize / 100
const refs = {
thumbMax: this.thumbMax.current,
thumbMin: this.thumbMin.current,
sliderElement: this.slider.current,
sliderCoords: this.getCoords(sliderElement),
sliderSizeNormal: sliderSizeNormal   
}
return refs
}



normalization = () => { 
const thumbMin = this.thumbMin.current  
const thumbMinW = thumbMin.offsetWidth
let minVal = this.state.minPrice
let maxVal = this.state.maxPrice
let normalizationArea = maxVal - minVal
let normalizationAreaSecond = maxVal - minVal - thumbMinW 
let normalization = normalizationArea / 100
let normalizationSecond = normalizationAreaSecond / 100
let normalizationObject
return normalizationObject = {
minVal: minVal,
maxVal: maxVal,
normalization: normalization,
normalizationSecond: normalizationSecond   
}
}

startDrag() {
  return false;
};

getCoords(elem) { 
  let box = elem.getBoundingClientRect();
  return {
    left: box.left + pageXOffset,
    right: box.right + pageXOffset
  };
}


handleChangeMin(event) { 
this.setState({
clickerMinMove: true,
stateInputMin: true
})     
this.setState({valueMin: event.target.value})   
}

handleChangeMax(event) {
  this.setState({
  clickerMaxMove: true,
  stateInputMax: true
})    
  this.setState({valueMax: event.target.value})  
}

applyFilterPrice = (event) => {
  event.preventDefault();

  
  let minVal = Number(this.state.valueMin)
  let maxVal = Number(this.state.valueMax)

 


  let minPrice = this.state.minPrice
  let maxPrice = this.state.maxPrice
  let sliderRefs = this.sliderRefs()

  
 
  if(minVal <= maxVal 
    && minVal >= minPrice 
    && minVal <= maxPrice 
    && maxVal >= minPrice 
    && maxVal <= maxPrice){




  let moveLeft = (minVal-minPrice)/(maxPrice - minPrice)*100
  let moveThumbLeftNumber = Math.round(moveLeft*sliderRefs.sliderSizeNormal)
  let maxMove = 100*sliderRefs.sliderSizeNormal
  let maxMoveVal = maxMove - sliderRefs.thumbMax.offsetWidth
  if(moveThumbLeftNumber >= maxMoveVal){
  let moveThumbLeft = maxMoveVal.toString()

  sliderRefs.thumbMin.style.left = moveThumbLeft + 'px';
  }else{
    let moveThumbLeft = moveThumbLeftNumber.toString()
    sliderRefs.thumbMin.style.left = moveThumbLeft + 'px';
  }
  let minValue = minVal.toString();

 

  this.setState({valueMin: minValue}) 



  let moveRight = (maxVal-minPrice)/(maxPrice - minPrice)*100
  let moveThumbRightNumber = Math.round(moveRight*sliderRefs.sliderSizeNormal)
  
  let thumbSizeVal = sliderRefs.thumbMax.offsetWidth
  if(moveThumbRightNumber >= maxMoveVal){
  let moveThumbRight = maxMoveVal.toString()
  sliderRefs.thumbMax.style.left = moveThumbRight + 'px';
  }else{
    let moveThumbRight = (moveThumbRightNumber + thumbSizeVal).toString()
    sliderRefs.thumbMax.style.left = moveThumbRight + 'px';
  }
  let maxValue = maxVal.toString();



  this.setState({valueMax: maxValue}) 











  }else{






    if(minVal >= maxPrice){
      let moveLeft = (minVal-minPrice)/(maxPrice - minPrice)*100
      let moveThumbLeftNumber = Math.round(moveLeft*sliderRefs.sliderSizeNormal)
      let maxMove = 100*sliderRefs.sliderSizeNormal
      let maxMoveVal = maxMove - sliderRefs.thumbMax.offsetWidth
      let moveThumbLeft = maxMoveVal.toString()
      sliderRefs.thumbMin.style.left = moveThumbLeft + 'px';

      this.setState({valueMin: maxPrice}) 
      }else{
      sliderRefs.thumbMin.style.left = '0px';  
      this.setState({valueMin: minPrice})   
      }  




      if(maxVal >= maxPrice){
        let moveRight = (maxVal-minPrice)/(maxPrice - minPrice)*100
        let moveThumbRightNumber = Math.round(moveRight*sliderRefs.sliderSizeNormal)
        let maxMove = 100*sliderRefs.sliderSizeNormal
        let maxMoveVal = maxMove
        let moveThumbRight = maxMoveVal.toString()
        sliderRefs.thumbMax.style.left = moveThumbRight + 'px';
  
        this.setState({valueMax: maxPrice}) 
        }else{
        let maxMove = 100*sliderRefs.sliderSizeNormal  
        sliderRefs.thumbMax.style.left = maxMove + 'px';  
        this.setState({valueMax: maxPrice})   
        }  







  }


  if(minVal <= maxVal && maxVal >= minPrice && maxVal <= maxPrice){





    let moveRight = (maxVal-minPrice)/(maxPrice - minPrice)*100
    let moveThumbRightNumber = Math.round(moveRight*sliderRefs.sliderSizeNormal)
    let maxMove = 100*sliderRefs.sliderSizeNormal
    let thumbSizeVal = sliderRefs.thumbMax.offsetWidth
    let maxMoveVal = maxMove
    if(moveThumbRightNumber >= maxMoveVal){
    let moveThumbRight = maxMoveVal.toString()
    sliderRefs.thumbMax.style.left = moveThumbRight + 'px';
    }else{
      let moveThumbRight = (moveThumbRightNumber + thumbSizeVal).toString()
      sliderRefs.thumbMax.style.left = moveThumbRight + 'px';
    }
    let maxValue = maxVal.toString();
    this.setState({valueMax: maxValue}) 







    }else{






      if(maxVal >= maxPrice){
        let moveRight = (maxVal-minPrice)/(maxPrice - minPrice)*100
        let moveThumbRightNumber = Math.round(moveRight*sliderRefs.sliderSizeNormal)
        let maxMove = 100*sliderRefs.sliderSizeNormal
        let maxMoveVal = maxMove
        let moveThumbRight = maxMoveVal.toString()
        sliderRefs.thumbMax.style.left = moveThumbRight + 'px';
  
        this.setState({valueMax: maxPrice}) 
        }else{
        let maxMove = 100*sliderRefs.sliderSizeNormal  
        sliderRefs.thumbMax.style.left = maxMove + 'px';  
        this.setState({valueMax: maxPrice})   
        }  
    
    
    
    
    
    
    
    
    
    
    
    
    
      }

let valMin = Number(this.state.valueMin)
let valMax = Number(this.state.valueMax)
if(valMin < minPrice){
valMin = minPrice 
}
if(valMin > valMax || valMin > maxPrice){
valMin = minPrice   
}

if(valMax < valMin){
  valMax = valMin 
  }
  if(valMax > maxPrice){
  valMax = maxPrice   
  }
    
let values = {
  valueMin: valMin,
  valueMax: valMax   
  }
  this.props.newValue(values)
  
     

}

  render(){
   
let {valueMin, valueMax, minPrice, maxPrice, sliderRews, thumbVal, 
  clickerMinMove, clickerMaxMove, stateInputMin, 
  stateInputMax, filterMin, filterMax} = this.state    


let thumbSize = thumbVal.offsetWidth

let leftDefault
let rightDefault
if(this.props.filter != ''){
let slideParameters = sliderRews.right - sliderRews.left
if(!clickerMinMove && !clickerMaxMove){
let z = (valueMin - minPrice)/(maxPrice - minPrice)*100
leftDefault = slideParameters/100 * z
}else{
if(stateInputMin){
  let z = (filterMin - minPrice)/(maxPrice - minPrice)*100
  let x = slideParameters/100 * z
  if(x > sliderRews.right){
  x = slideParameters.left
  }
leftDefault = x

}else{
leftDefault = '' 
}  
}
if(!clickerMaxMove && !clickerMinMove){
let y = (valueMax - minPrice)/(maxPrice - minPrice)*100
rightDefault = slideParameters/100 * y
}else{
if(stateInputMax){
  let y = (filterMax - minPrice)/(maxPrice - minPrice)*100
  let x = slideParameters/100 * y
  if(x > sliderRews.right){
  x = slideParameters
  }
rightDefault = x
  }else{
    rightDefault = ''  
  }  
}
}else{
leftDefault = '' 
rightDefault = ''
}

if(this.props.filter != ''){
let thumbDiference = rightDefault - leftDefault   
if(!clickerMinMove && !clickerMaxMove){  
if(thumbDiference <= thumbSize){
leftDefault = leftDefault - thumbSize/2  
rightDefault = rightDefault + thumbSize/2  
}
  }
  
}






    return(
      <div className="filter-price">

<div className="slide_block">
 <div id="slider" className="slider" ref={this.slider}>
    <div ref={this.thumbMin} 
    style={{left: clickerMinMove && !stateInputMin ? `` : `${leftDefault}px`}}
    onTouchStart={this.startEventTouchMin.bind(this)} 
    onTouchMove={this.elementTouchMoveMin.bind(this)} 
    onTouchEnd={this.minTouchEnd.bind(this)} 
    onMouseDown={this.startEventMin.bind(this)} 
    onDragStart={this.startDrag.bind(this)} className="thumbMin" value={this.state.thumbMin}></div>
    <div ref={this.thumbMax} 
    style={{left: clickerMaxMove && !stateInputMax ? '' : `${rightDefault}px`}}
    onTouchStart={this.startEventTouchMax.bind(this)} 
    onTouchMove={this.elementTouchMoveMax.bind(this)} 
    onTouchEnd={this.maxTouchEnd.bind(this)} 
    onTouchStart={this.startEventMax.bind(this)} onMouseDown={this.startEventMax.bind(this)} onDragStart={this.startDrag.bind(this)} className="thumbMax" value={this.state.thumbMax}></div>
  </div>
  <form>
  <p> <input ref={this.inputMin} type="text" onChange={this.handleChangeMin} value={this.state.valueMin} /></p>
  <p> <input ref={this.inputMin} type="text" onChange={this.handleChangeMax} value={this.state.valueMax} /></p>
  <button onClick={this.applyFilterPrice}>OK</button>
</form>
</div>
        </div>	
    )    
    }
}

export default FilterPrice
