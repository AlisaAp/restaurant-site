import React, { useState } from 'react';
import {
  Box, Grid, Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import s from './style.module.css';
import { addToBasket, changeAmount } from '../../store/slices/basket';

function MenuItem({ item }) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const { basket } = useSelector((state) => state.basket);
  const [hover, setHover] = useState(false);

  const handleMouseLeave = () => {
    setHover(false);
  };
  const handleMouseOver = () => {
    setHover(true);
  };

  const initialState = {
    id: item.id,
    name: item.name,
    price: item.price,
    src: item.image,
    amount: 1,
  };
  const clickHandler = () => {
    enqueueSnackbar(`${item.name} added to basket`);
    if (basket.find((i) => i.id === item.id)) return dispatch(changeAmount(item.id));
    return dispatch(addToBasket(initialState));
  };
  return (
    <Grid item xs={12} sm={6} md={4} key={item.id}>
      <Box sx={{ marginRight: 0.5 }}>
        <div
          className={s.imgBox}
          onMouseOver={handleMouseOver}
          onFocus={handleMouseOver}
          onMouseOut={handleMouseLeave}
          onBlur={handleMouseLeave}
        >
          <img
            className={s.img}
            alt={item.name}
            src={item.image}
          />
          {hover
            ? (
              <button
                className={s.btn}
                type="button"
                color="primary"
                onClick={clickHandler}
              >
                ADD TO BASKET
              </button>
            ) : null}
        </div>
        <Box sx={{ pr: 15 }}>
          <Typography gutterBottom variant="subtitle1">
            {item.name}
          </Typography>
          <Typography display="block" variant="caption" color="text.secondary">
            {item.description}
          </Typography>
          <Typography variant="button" color="text.secondary">
            {`${item.price} • ₴`}
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
}

MenuItem.propTypes = {
  // eslint-disable-next-line react/require-default-props
  item: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
  }),
};
export default MenuItem;
