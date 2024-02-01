import React from 'react';
import {
  Avatar, IconButton, Typography, Stack,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromBasket, increaseAmount, minimizeAmount } from '../../../store/slices/basket';

import s from './style.module.css';

function BasketList() {
  const dispatch = useDispatch();
  const { basket } = useSelector((state) => state.basket);
  const deleteHandle = (id) => () => {
    dispatch(removeFromBasket(id));
  };
  const increaseItem = (id) => () => {
    dispatch(increaseAmount(id));
  };
  const minimizeItem = (id) => () => {
    dispatch(minimizeAmount(id));
  };
  return (
    <Stack spacing={20}>
      {basket.map((item) => (
        <Stack
          key={item.id}
          direction="row"
          spacing={10}
          justifyContent="space-between"
          alignItems="center"
          sx={{ backgroundColor: '#f9fbe7', p: 15, borderRadius: 5 }}
        >
          <Avatar alt={item.name} src={item.src} />
          <Typography gutterBottom variant="subtitle1">
            {item.name}
          </Typography>
          <Stack direction="row" sx={{ backgroundColor: '#f9fbe7', p: 3, borderRadius: 3 }}>
            <button type="button" className={s.btn} onClick={minimizeItem(item.id)}>‒</button>
            {item.amount}
            <button type="button" className={s.btn} onClick={increaseItem(item.id)}>+</button>
          </Stack>
          <IconButton aria-label="delete" color="primary" onClick={deleteHandle(item.id)}>
            <DeleteIcon />
          </IconButton>
        </Stack>
      ))}

    </Stack>
  );
}

export default BasketList;
