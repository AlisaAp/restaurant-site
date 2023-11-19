import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Avatar,
  Box, IconButton,
  Table,
  TableBody,
  TableCell, TableContainer, TableHead, TableRow,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import s from './style.module.css';
import { removeFromBasket } from '../../store/slices/basket';

// eslint-disable-next-line react/prop-types
function Basket() {
  const dispatch = useDispatch();
  const { basket } = useSelector((state) => state.basket);
  const totalPrice = basket.reduce((sum, elem) => sum + elem.price * elem.amount, 0);
  const deleteHandle = (id) => {
    dispatch(removeFromBasket(id));
  };
  if (!basket.length) return <div>empty</div>;

  return (
    <Box classname={s.container}>
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
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
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
      <div className={s.container}>
        <p className={s.price}>
          {`total price: ${totalPrice}₴`}
        </p>
        <button type="button" color="primary" className={s.btn}> ORDER</button>
      </div>
    </Box>
  );
}

export default Basket;
