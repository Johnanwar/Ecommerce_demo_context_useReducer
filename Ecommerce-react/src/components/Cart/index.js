import React from 'react'
import {Grid, Box, Button, Typography, Paper } from '@material-ui/core';


const CartItem = (props) => {
  const {crt , handleInc , handleDec , handleRemoveFromCart} = props

    return (
                        <Grid item md={4} sm={6} key={crt.id}>
                            <Paper>
                                <Box p={2} >
                                    <Box>
                                        <img src={crt.image} width={300} height={400} />
                                    </Box>
                                    <Typography color="primary" variant="h6">{crt.title}</Typography>
                                    <Typography variant="body1">{crt.category}</Typography>
                                    <Box display="flex" mt={4} alignItems="center" justifyContent="space-between">
                                        <Typography color="secondary" variant="body1">$ {crt.price} </Typography>
                                        <Typography variant="body1">Available quantity - {crt.availbleQTY} items</Typography>
                                    </Box>
                                    <Typography color="secondary" variant="h3">total price: {crt.price *crt.quantity } </Typography>

                                    <p>{crt.quantity}</p>
                                    <div>
                                        <button onClick={() => handleInc(crt)}> add </button>
                                        <button onClick={() => handleDec(crt)}> minues </button>
                                    </div>
                                    <Box display="flex" mt={4} alignItems="center" justifyContent="center">
                                        <Button onClick={() => handleRemoveFromCart(crt)} variant="contained" color="secondary">
                                            Remove From Cart
                                        </Button>
                                    </Box>
                                </Box>
                            </Paper>


                        </Grid>
    )
}

export default CartItem

