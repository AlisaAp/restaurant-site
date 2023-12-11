import React from 'react';
import {
  Avatar, Box,
  IconButton, Table, TableBody,
  TableCell, TableContainer, TableHead, TableRow,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromBasket, increaseAmount, minimizeAmount } from '../../../store/slices/basket';
import s from './style.module.css';

function BasketList() {
  const dispatch = useDispatch();
  const { basket } = useSelector((state) => state.basket);
  const deleteHandle = (id) => {
    dispatch(removeFromBasket(id));
  };
  const increaseItem = (id) => {
    dispatch(increaseAmount(id));
  };
  const minimizeItem = (id) => {
    dispatch(minimizeAmount(id));
  };
  return (
    <TableContainer>
      <Table aria-label="simple table" sx={{ minWidth: 330 }}>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {basket.map((item) => (
            <TableRow
              key={item.id}
            >
              <TableCell component="th" scope="row">
                <Avatar alt={item.name} src={item.src} />
              </TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell sx={{ padding: 0 }}>{item.price}</TableCell>
              <TableCell>
                <Box className={s.btnBox}>
                  <button type="button" className={s.btn} onClick={() => minimizeItem(item.id)}>-</button>
                  {item.amount}
                  <button type="button" className={s.btn} onClick={() => increaseItem(item.id)}>+</button>
                </Box>
              </TableCell>
              <TableCell sx={{ padding: 0 }}>
                <IconButton
                  color="primary"
                  aria-label="open drawer"
                  edge="start"
                  onClick={() => deleteHandle(item.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BasketList;
