const updateCartTransformer = (itemsList, productId) => {
let itemCurrent = itemsList.filter((item) => {return item.product_id == productId }) 
let newQuantity = itemCurrent[0].quantity + 1;
return newQuantity
}
export default updateCartTransformer