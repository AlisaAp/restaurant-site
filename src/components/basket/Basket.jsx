import React from 'react';
import { useSelector } from 'react-redux';
import {
  Box, IconButton,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import s from './style.module.css';
import BasketList from './basketList/BasketList';
import getTotalPrice from '../../utils/gettTotalPrice';

function Basket() {
  const { basket } = useSelector((state) => state.basket);
  const totalPrice = getTotalPrice(basket);

  if (!basket.length) {
    return (
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        flexDirection: 'column',
      }}
      >
        <IconButton
          color="primary"
          aria-label="open drawer"
          edge="start"
        >
          <ShoppingBasketIcon sx={{ fontSize: 'large' }} />
        </IconButton>
        <p>EMPTY BASKET</p>
      </Box>
    );
  }

  return (
    <Box>
      <BasketList />
      <div className={s.container}>
        <p className={s.price}>
          {totalPrice}
        </p>
        <NavLink to="/order">
          <button type="button" color="primary" className={s.btn}>ORDER</button>
        </NavLink>
      </div>
    </Box>
  );
}

export default Basket;
