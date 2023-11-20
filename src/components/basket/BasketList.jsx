import React from 'react';
import {
  Avatar, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromBasket } from '../../store/slices/basket';

function BasketList() {
  const dispatch = useDispatch();
  const { basket } = useSelector((state) => state.basket);
  const deleteHandle = (id) => {
    dispatch(removeFromBasket(id));
  };
  return (
    <TableContainer>
      <Table aria-label="simple table">
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
              <TableCell>{item.price}</TableCell>
              <TableCell>{item.amount}</TableCell>
              <TableCell>
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
