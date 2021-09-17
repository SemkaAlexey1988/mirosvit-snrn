const reduceProducts = (value) => {
let cartArray = []
let totalPrice
value.map((carts) => cartArray.push(carts.quantity*carts.price))
if(cartArray[0]){
totalPrice = cartArray.reduce((prev, next) => prev + next)
}else{
totalPrice = 0 
}
return totalPrice
}
export default reduceProducts