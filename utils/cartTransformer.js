const cartTransformer = (currentCarts, productId) => {
    let productsQuantity = currentCarts[0]   
    let currentId = productId
    let finalStatus = false
    currentCarts.map((carts) => {if(carts.product_id == currentId){
    finalStatus = true
    }})
    let data = {
    productsQuantity: productsQuantity,  
    finalStatus: finalStatus  
    }
return data
}
export default cartTransformer