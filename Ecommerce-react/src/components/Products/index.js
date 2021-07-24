import React from 'react'

import { useCart, useDispatchCart } from '../../context/CartState'
import { useEffect, useState } from 'react'
import { createAPIEndpoint, ENDPIONTS } from "../../api";
import { Container, Grid, Box, Button, Typography, Paper } from '@material-ui/core';
import { ToastContainer, toast } from 'react-toastify';
import Masonry from 'react-masonry-css'
import {ADD_TO_CART} from "../../context/types/types"

function Products() {
  const [products, setProducts] = useState([])
  const [error, setError] = useState('')

  const dispatch = useDispatchCart()


  /// get ALL PRODUCTS from api
  useEffect(() => {
    createAPIEndpoint(ENDPIONTS.ALLPRODUCTS).fetchAll()
      .then(res => {
        setProducts(res.data)
        console.log('all products', res.data)

      })
      .catch(err => setError(err))
  }, [])






  const handleAddToCart = (product) => {
    createAPIEndpoint(ENDPIONTS.CART).create(product)
      .then(res => {
        dispatch({
          type: ADD_TO_CART,
          payload: product
        })
        console.log(res)
        if (res.status == 201) {
          console.log('ichta')
        }
        toast.success('One product has been successfully added.', { autoClose: 1000 })
      }).catch(res => {
        toast.info('This product in cart already.', { autoClose: 10000, autoClose: false, position: "top-center", })
      })
  }


  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1
  }
  return (
    <>
      <Container>
        <h1>Products Page</h1>
        <ToastContainer />
        <Masonry breakpointCols={breakpoints}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column">
          {products.map(pro => (
            <div key={pro.id}>
              <Paper>
                <Box p={2} >
                  <Box>
                    <img src={pro.image} width={300} height={400} />
                  </Box>
                  <Typography color="primary" variant="h6">{pro.title}</Typography>
                  <Typography variant="body1">{pro.category}</Typography>
                  <Box display="flex" mt={4} alignItems="center" justifyContent="space-between">
                    <Typography color="secondary" variant="body1">$ {pro.price} </Typography>
                    <Typography variant="body1">Available quantity - {pro.availbleQTY} items</Typography>
                  </Box>
                  <Box display="flex" mt={4} alignItems="center" justifyContent="center">
                    <Button onClick={() => handleAddToCart(pro)} variant="contained" color="primary">
                      Add To Cart
                    </Button>
                  </Box>

                </Box>

              </Paper>


            </div>
          ))}

        </Masonry>
        {error && <Box display="flex" paddingY="100px" marginX="auto">
          <Typography variant="h3" color="secondary">
            Oops... Something went wrong.
          </Typography>
        </Box>}


      </Container>
    </>
  );
}

export default Products;
