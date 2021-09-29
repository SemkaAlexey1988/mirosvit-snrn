import React, {useState} from 'react';


const FilterAttributes = ({filters, attributes, attributesOptions}) => {
  const [data, setData] = useState({ options: [], filterChecked: false, newAttributes: attributes }) 
let filtered
let getValues
let getOptions

const onInputchange = (e) => {
let currentValue = e.target.value 
const checked = e.target.checked;
let valOptions = data.options
if(checked){
  filtered = attributes.map(element => {
    element.children.map((child) => {
    let elementVal = `${child.attribute_id}-${child.id}`  
    if(elementVal == currentValue){ 
    child.checkedElement = true
    }else{
   // child.checkedElement = false  
    }    
    })
    return element
  })


  let arrayVal = []
getValues = filtered.map(element => {
  element.children.map(el => {
    if(el.checkedElement==true){
let elementValue = `${el.attribute_id}-${el.id}`       
arrayVal.push(elementValue)
    }
  })
})


/*
getOptions = getValues.map(element => {
  return element.link
})
*/


attributesOptions(arrayVal)
setData({options: valOptions, filterChecked: true, newAttributes: filtered });



}else{

  filtered = attributes.map(element => {
    element.children.map((child) => {
    let elementVal = `${child.attribute_id}-${child.id}`  
    if(elementVal == currentValue){ 
    child.checkedElement = false
    }  
    })
    return element
  })  

  
  let arrayVal = []
getValues = filtered.map(element => {
  element.children.map(el => {
    if(el.checkedElement==true){
let elementValue = `${el.attribute_id}-${el.id}`       
arrayVal.push(elementValue)
    }
  })
})

 
  attributesOptions(arrayVal)
  setData({options: valOptions, filterChecked: true, newAttributes: filtered });

}


}



let newAttributes
if(filters){
  let filtersClearFirst = filters.indexOf('attributes')
  let filtersClearSecond = filters.substring(filtersClearFirst, filters.length)
  let filtersClearThirdStart = filtersClearSecond.indexOf('[')
  let filtersClearThirdFinish = filtersClearSecond.indexOf(']')
  let filtersClearThird = filtersClearSecond.substring(filtersClearThirdStart+1, filtersClearThirdFinish)
  let filtersClearArray = filtersClearThird.split(',')
  let valChecked = data.filterChecked
  

newAttributes = attributes.map((attribute) => {
  filtersClearArray.map((fl)=>{
  let flAttr = fl.split('-')  
  if(flAttr[0] == attribute.id){
  attribute.children.map((element) => {
  if(element.id == flAttr[1]){
  element.checkedElement = true
  }else{ 
  }
  })
}else{

}
})
  /*
  if(filters.indexOf(manufacturer.link) > -1){
  manufacturer.checkedElement = true 
  }else{
  manufacturer.checkedElement = false  
  } 
  */
  return attribute
})



}else{
newAttributes = attributes

}

  return(
    <div className="filter-attributes">
     
{attributes.map((attribute, index)=>{
    return <div key={index} className="filter-attributes__name">
    <h2>{attribute.name}</h2> 
    {attribute.children.map((element)=>{
     return <label key={parseInt(element.attribute_id + element.id)}><span>{element.name}</span><input type="checkbox"  
     checked={element.checkedElement ? 'checked' : ''} onChange={e => onInputchange(e)} value={`${element.attribute_id}-${element.id}`}  /></label> 
    })

    } 
    </div>

})}
  </div>
  )  

}

export default FilterAttributes
