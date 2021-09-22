import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

 


import pathTransformer from '../../../utils/pathTransformer';

import FilterPrice from './../../../components/templates/filter/FilterPrice';
import FilterAttributes from './../../../components/templates/filter/FilterAttributes';
import FilterManufacturers from './../../../components/templates/filter/FilterManufacturers';

//import { fetchMinMax } from './../../../actions/common/filter';


class Filter extends Component {
    constructor(){
    super();  
    this.changePath = this.changePath.bind(this); 
    this.filtredPath = this.filtredPath.bind(this); 
    this.usedPath = this.usedPath.bind(this); 
    this.mOptions = this.mOptions.bind(this); 
    this.aOptions = this.aOptions.bind(this); 
   
    }

  

    usedPath = () => {
    let curentPath = window.location.pathname;
    let filterUsed = curentPath.indexOf('&filter');
    let filtredPathV;
    if(filterUsed > 1){
    filtredPathV = curentPath.substring(0, filterUsed)  
    }else{
    filtredPathV = curentPath  
    }
    return filtredPathV 
  }

  filtredPath = () => {
    let curentPath = window.location.pathname;
    let filterUsed = curentPath.indexOf('&filter');
    let filtredPathV;
    if(filterUsed > 1){
    filtredPathV = curentPath.substring(filterUsed, curentPath.length)  
    }else{
    filtredPathV = ''  
    }
    return filtredPathV 
  }


    changePath = (value) => {
     let filtredPathValue = this.filtredPath() 
     let usedPathValue = this.usedPath()

     let priceFilter = filtredPathValue.indexOf('price');
   
     let newPath
     if(filtredPathValue != ''){
if(priceFilter > 0){
let pFilterStartEnd = filtredPathValue.substring(priceFilter, filtredPathValue.length)
let priceFilterEnd = pFilterStartEnd.indexOf(']');
let pFilterClear = pFilterStartEnd.substring(priceFilterEnd+1, pFilterStartEnd.length)
let priceClearFilter = filtredPathValue.replace(pFilterStartEnd, "");  
newPath = `${usedPathValue}${priceClearFilter}price[${value.valueMin},${value.valueMax}]${pFilterClear}` 
}else{
newPath = `${usedPathValue}${filtredPathValue},price[${value.valueMin},${value.valueMax}]`     
}   
    }else{
     newPath = `${usedPathValue}&filter=price[${value.valueMin},${value.valueMax}]`  
     }

    window.location.pathname = newPath; 
    
    }

  

mOptions = (value) => {
      let filtredPathValue = this.filtredPath() 
      let usedPathValue = this.usedPath() 
      let newPath
      let splitValue = value.join(',')

      let manufacturerFilter = filtredPathValue.indexOf('manufacturer');

      if(filtredPathValue != ''){
        if(manufacturerFilter > 0){ 
if(value == ''){
let mFilterStartEnd = filtredPathValue.substring(manufacturerFilter, filtredPathValue.length)
let manufacturerFilterEnd = mFilterStartEnd.indexOf(']');
let mFilterClear = mFilterStartEnd.substring(manufacturerFilterEnd+1, mFilterStartEnd.length)
let manufacturerClearFilter = filtredPathValue.replace(mFilterStartEnd, ""); 
let mFilterClearSecond = mFilterClear.substring(1, mFilterClear.length); 
let findPrice = mFilterClearSecond.indexOf('price')
if(findPrice > 0){
newPath = `${usedPathValue}${manufacturerClearFilter}${mFilterClearSecond}`
}else{
newPath = `${usedPathValue}`
}   
}else{
let mFilterStartEnd = filtredPathValue.substring(manufacturerFilter, filtredPathValue.length)
let manufacturerFilterEnd = mFilterStartEnd.indexOf(']');
let mFilterClear = mFilterStartEnd.substring(manufacturerFilterEnd+1, mFilterStartEnd.length)
let manufacturerClearFilter = filtredPathValue.replace(mFilterStartEnd, "");  
newPath = `${usedPathValue}${manufacturerClearFilter}manufacturers[${splitValue}]${mFilterClear}` 
}

}else{
  if(value == ''){
newPath = `${usedPathValue}${filtredPathValue}`
      }else{
newPath = `${usedPathValue}${filtredPathValue},manufacturers[${splitValue}]`
      }    
}

}else{
  
  if(value == ''){
newPath = `${usedPathValue}`
  }else{
newPath = `${usedPathValue}&filter=manufacturers[${splitValue}]`
  }    
}


//localStorage.setItem('filters', newPath);
//let filterStorage = localStorage.getItem('filters');

window.location.pathname = newPath; 
    }


aOptions = (value) => { 
console.log(value)


let filtredPathValue = this.filtredPath() 
let usedPathValue = this.usedPath() 
let newPath
let splitValue = value.join(',')

let attributesFilter = filtredPathValue.indexOf('attributes');

if(filtredPathValue != ''){
  if(attributesFilter > 0){ 
if(value == ''){
let aFilterStartEnd = filtredPathValue.substring(attributesFilter, filtredPathValue.length)
let attributesFilterEnd = aFilterStartEnd.indexOf(']');
let aFilterClear = aFilterStartEnd.substring(attributesFilterEnd+1, aFilterStartEnd.length)
let attributesClearFilter = filtredPathValue.replace(aFilterStartEnd, ""); 
let aFilterClearSecond = aFilterClear.substring(1, aFilterClear.length); 
let findPrice = aFilterClearSecond.indexOf('price')
if(findPrice > 0){
newPath = `${usedPathValue}${attributesClearFilter}${aFilterClearSecond}`
}else{
newPath = `${usedPathValue}`
}   
}else{
let aFilterStartEnd = filtredPathValue.substring(attributesFilter, filtredPathValue.length)
let attributesFilterEnd = aFilterStartEnd.indexOf(']');
let aFilterClear = aFilterStartEnd.substring(attributesFilterEnd+1, aFilterStartEnd.length)
let attributesClearFilter = filtredPathValue.replace(aFilterStartEnd, "");  
newPath = `${usedPathValue}${attributesClearFilter}attributes[${splitValue}]${aFilterClear}` 
}

}else{
if(value == ''){
newPath = `${usedPathValue}${filtredPathValue}`
}else{
newPath = `${usedPathValue}${filtredPathValue},attributes[${splitValue}]`
}    
}

}else{

if(value == ''){
newPath = `${usedPathValue}`
}else{
newPath = `${usedPathValue}&filter=attributes[${splitValue}]`
}    
}


//console.log(newPath)

window.location.pathname = newPath; 





}   






    componentDidMount(){
    

   // this.props.fetchMinMax(this.props.id)
    }

    /*
    componentDidUpdate(prevProps) {
      if (this.props.match.params.page !== prevProps.match.params.page) {
        let mpp = this.props.match.params.page;        
this.props.fetchProductsList(this.props.match.params.id, mpp);      
      }
    }

    */

  

      render(){

let filterValue = this.props.filter
let filterValueObject
let filterPrice
let filterPriceString
let filterPriceOb
let filterMinimumPrice
let filterMaximumPrice

if(filterValue){
  
filterValueObject = pathTransformer(filterValue);
if(filterValueObject.price){
filterPriceString = filterValueObject.price 
filterPriceOb = filterPriceString[0].split(',')
filterPrice = filterPriceOb 
filterMinimumPrice = Number(filterPrice[0]) 
filterMaximumPrice = Number(filterPrice[1])
}
}else{
filterPrice = '' 
filterMinimumPrice = 0
filterMaximumPrice = 0
}

        return(
        <div>
          
<FilterPrice 
newValue={this.changePath}
filterMin = {filterMinimumPrice} 
filterMax = {filterMaximumPrice} 
priceMin={this.props.price.min_price} priceMax={this.props.price.max_price} id={this.props.id} /> 
   <FilterAttributes filters={this.props.filter} attributes={this.props.attributes} attributesOptions={this.aOptions} />
   <FilterManufacturers filters={this.props.filter} manufacturers={this.props.manufacturers} manufacturersOptions={this.mOptions} />
   </div> 
            );

      }

}

const mapStateToProps = ({filter}) => {
    return {
 //  reduxFilter: filter 
    }
}

const mapDispatchProps = (dispatch) => {
    return {
  //  fetchMinMax: bindActionCreators(fetchMinMax, dispatch) 
    }
}


export default connect(mapStateToProps, mapDispatchProps)(Filter)
