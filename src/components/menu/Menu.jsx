import React from 'react';
import { Grid } from '@mui/material';
import { useGetDishesQuery } from '../../store/api/api';
// import s from './style.module.css';
import MenuItem from './MenuItem';

function Menu() {
  const { data, isLoading } = useGetDishesQuery(10);

  if (isLoading) return null;
  return (
    <Grid container spacing={2}>
      {data.map((item) => (
        <MenuItem item={item} key={item.id} />))}
    </Grid>
  );
}

export default Menu;
