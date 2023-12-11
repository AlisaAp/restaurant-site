import React from 'react';
import { styled } from '@mui/material/styles';
import { Badge, IconButton, Tooltip } from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -8,
    top: 7,
    border: `1px solid ${theme.palette.background.paper}`,
    padding: '0 3px',
  },
}));

function BasketIcon({ clickHandler }) {
  const basket = useSelector((state) => state.basket.basket);
  const amountOfProducts = basket.reduce((sum, elem) => sum + elem.amount, 0);
  return (
    <Tooltip title="basket">
      <IconButton
        color="primary"
        aria-label="open drawer"
        edge="start"
        onClick={clickHandler}
      >
        <StyledBadge badgeContent={amountOfProducts} color="white">
          <ShoppingBasketIcon />
        </StyledBadge>
      </IconButton>
    </Tooltip>
  );
}

BasketIcon.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};
export default BasketIcon;
