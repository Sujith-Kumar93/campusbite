export const addToCart =(menu, quantity, varient)=>(dispatch, getState)=>{
    var cartItem = {
        name: menu.name,
        _id:menu._id,
        image:menu.image,
        varient: varient,
        quantity:Number(quantity),
        prices : menu.prices,
        price:menu.prices[0][varient]*quantity
    }
    if(cartItem.quantity>5)
    {
        alert('You cannot add more than 5 quantities')
    }
    else{
        if(cartItem.quantity<1){
            dispatch({type:'DELETE_FROM_CART',payload:menu})
        }
        else{
            dispatch({type:'ADD_TO_CART',payload:cartItem})
        }
        
    }

    
    const cartItems = getState().cartReducer.cartItems
    localStorage.setItem('cartItems',JSON.stringify(cartItems))

}

export const deleteFromCart=(menu)=>(dispatch,getState)=>{

    dispatch({type:'DELETE_FROM_CART',payload:menu})
    const cartItems = getState().cartReducer.cartItems
    localStorage.setItem('cartItems',JSON.stringify(cartItems))


}