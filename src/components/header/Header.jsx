import React, { useState } from 'react';
import {
  AppBar, Box, Toolbar, Typography, IconButton, Drawer, Divider,
} from '@mui/material';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import s from './style.module.css';
import logo from '../../assets/images/logo.svg';
import BasketIcon from '../basket/BasketIcon';
import Basket from '../basket/Basket';

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [basketOpen, setBasketOpen] = useState(false);

  const handlerBasketToggle = () => {
    setBasketOpen(!basketOpen);
  };
  const handlerDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <Box onClick={handlerDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography
        color="goldenrod"
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 }}
      >
        <img src={logo} alt="logo" height="70" width="200" />
      </Typography>
      <Divider />
      <ul className={s.mobileNav}>
        <li>
          <NavLink activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/menu/all">Menu</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </Box>
  );
  return (
    <Box>
      <AppBar component="nav" sx={{ bgcolor: 'black' }}>
        <Toolbar>
          <IconButton
            color="primary"
            aria-label="open drawer"
            edge="start"
            sx={{
              mr: 2,
              display: { sm: 'none' },
            }}
            onClick={handlerDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            color="#ced970"
            sx={{
              flexGrow: 1, alignItems: 'center', display: 'flex',
            }}
          >
            <RestaurantIcon sx={{ mr: 1 }} />
            My Restaurant
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <ul className={s.nav}>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/menu/all">Menu</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </Box>
          <Box sx={{ ml: 2 }}>
            <BasketIcon clickHandler={handlerBasketToggle} />
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handlerDrawerToggle}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: '240px',
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box>
        <Toolbar />
      </Box>
      <Box component="nav">
        <Drawer
          anchor="right"
          variant="temporary"
          open={basketOpen}
          onClose={handlerBasketToggle}
          sx={{
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: { xs: '85vw', sm: '350px' },
              display: 'block',
            },
          }}
        >
          <Basket />
        </Drawer>
      </Box>
    </Box>
  );
}

export default Header;
