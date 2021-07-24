import React from 'react'
import {
 
  Link
} from "react-router-dom";
import { AppBar, Toolbar, IconButton, Badge, Grid, Switch, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

import useStyles from './styles';
import { useCart } from '../../context/CartState';




const Navbar = ({ }) => {

  const classes = useStyles();
  const cart = useCart()



  return (
    <>

      <AppBar position='fixed' className={classes.appBar} color='inherit'>
        <Toolbar>
          <Typography component={Link} to="/" className={classes.title} color='inherit' variant='h5'>
              E-commerce App
          </Typography>

        </Toolbar>
        <div className={classes.grow} />

          <IconButton component={Link} to="/cart" className={classes.iconButton} aria-label="Show cart item" color='inherit'>
            <Badge badgeContent={cart.length} color='secondary'>
              <ShoppingCart />
            </Badge>
          </IconButton>

      </AppBar>

    </>
  )
}

export default Navbar;
