import React, {useState} from 'react';


const FilterManufacturers = ({filters, manufacturers, manufacturersOptions}) => {
  const [data, setData] = useState({ options: [], filterChecked: false, newManufacturers: manufacturers }) 
  let filtered
  let getValues
  let getOptions
  const onInputchange = (e) => {
    const checked = e.target.checked;
    let valOptions = data.options
    if(checked){
    filtered = manufacturers.map(element => {
      if(element.link == e.target.value){  
      element.checkedElement = true
      }
      return element
    })

    getValues = filtered.filter(element => {
      return element.checkedElement == true
    })

    getOptions = getValues.map(element => {
      return element.link
    })


    valOptions.push(e.target.value)
    setData({options: valOptions, filterChecked: true, newManufacturers: filtered });
    manufacturersOptions(getOptions)
    }else{
filtered = manufacturers.map(element => {
  if(element.link == e.target.value){
if(element.checkedElement){

element.checkedElement = false
}
  
  }else{

  }
  return element
}) 



getValues = filtered.filter(element => {
  return element.checkedElement == true
})

getOptions = getValues.map(element => {
  return element.link
})


    let index = valOptions.indexOf(e.target.value);
    if (index !== -1) {
    valOptions.splice(index, 1);
    manufacturersOptions(getOptions)
    }else{ 
    manufacturersOptions(getOptions) 
    }
    
    setData({options: valOptions, filterChecked: true, newManufacturers: filtered }); 
    }
};
let newManufacturers
if(filters){
  let valChecked = data.filterChecked
if(!valChecked){
newManufacturers = manufacturers.map((manufacturer) => {
  if(filters.indexOf(manufacturer.link) > -1){
  manufacturer.checkedElement = true 
  }else{
  manufacturer.checkedElement = false  
  } 
  return manufacturer
})

}else{
  newManufacturers = data.newManufacturers 
}

}else{
newManufacturers = manufacturers

}


  return(
    <div className="filter-manufacturers">
    {manufacturers.map((manufacturer, index) => {
    return <label key={index}><span>{manufacturer.name}</span><input type="checkbox"  
    checked={manufacturer.checkedElement ? 'checked' : ''}
    onChange={e => onInputchange(e)} value={manufacturer.link}  /></label>
    })
  }
  </div>
  )




}

export default FilterManufacturers
