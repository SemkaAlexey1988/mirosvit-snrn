const pathTransformer = (value) => {
let valueBefore = value.replace(/\[/g, ':[') 
let transformerFirst = valueBefore.replace(/\[/g, '[\'') 
let transformerSecond = transformerFirst.replace(/\]/g, '\']') 
let valueObject = eval('({' + transformerSecond + '})');
return valueObject
}
export default pathTransformer