import React, { useState ,useEffect } from 'react'
import { useCart, useDispatchCart } from '../../context/CartState';
import { Container, Grid, Box, Button, Typography, Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { createAPIEndpoint, ENDPIONTS } from "../../api";
import {REMOVE_ITEM , INCREMENT_ITEM , DECREMENT_ITEM} from "../../context/types/types"
import CartItem from "../../components/Cart"

const Cart = () => {
    const cart = useCart();
    const dispatch = useDispatchCart()
    const [totalPrice, setTotalPrice] = useState(0)

    const handleRemoveFromCart = (crt) => {
        createAPIEndpoint(ENDPIONTS.CART).delete(crt.id)
        dispatch({
            type: REMOVE_ITEM,
            payload: crt
        })
     }
  
    //  increment cart number 
    const handleInc = (crt) => {
        if(crt.quantity < crt.availbleQTY){
         const newCartData = [...cart.cartItems]
        newCartData.forEach(item => {
          if(item.id === crt.id) item.quantity ++
         })
         createAPIEndpoint(ENDPIONTS.CART).update(crt.id , crt)
         dispatch({
             type: INCREMENT_ITEM,
             payload: newCartData
         })
        }
    }

  // Decrement car number 
  const handleDec = (crt) => {
    if(crt.quantity === 1){
        handleRemoveFromCart(crt)
    }else{
   const newCartData = [...cart.cartItems]
    newCartData.forEach(item => {
      if(item.id === crt.id) item.quantity --
     })
     createAPIEndpoint(ENDPIONTS.CART).update(crt.id , crt)
     dispatch({
         type: DECREMENT_ITEM,
         payload: newCartData
     })
    }
  
  
  
}
// get total price
useEffect(() => {
    var totalArray = [] 
     cart.cartItems.forEach((item) => {
       totalArray.push(item.price*item.quantity)
      })
       var totalQuantitySum = totalArray.reduce(function (a, b) {
        return a + b}, 0);
      setTotalPrice(totalQuantitySum)
      console.log(totalQuantitySum)

}, [ cart])




 
    // const totalPrice = cart.cartItems.length > 0 ? cart.cartItems.reduce((acc, curr) => acc + curr.price, 0) : null;

    return (
        <Container>
            <h1>Cart page</h1>
            <Box display="flex" textAlign="center" mx="auto" justifyContent="center">
                {cart.cartItems.length === 0 && <Typography variant="h3" color="primary">
                    Your Card is Empty Now <Link to="/">Go to</Link>
                </Typography>}
            </Box>
            <Grid container spacing={5}>
                {cart.cartItems.length > 0 && cart.cartItems.map(crt => (
 
                   <CartItem
                       crt={crt}
                       handleDec={handleDec}
                       handleInc={handleInc}
                       handleRemoveFromCart={handleRemoveFromCart}
                   />
                ))}
            </Grid>
            {cart.cartItems.length > 0 &&
                <Box display="flex" textAlign="center" mx="auto" justifyContent="center">
                    <Typography variant="h3" color="primary">
                        Total Price = $ {Math.floor(totalPrice)}
                    </Typography>
                </Box>
            }









        </Container>
    )
}

export default Cart

