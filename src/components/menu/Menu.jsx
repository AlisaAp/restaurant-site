import React from 'react';
import { Grid } from '@mui/material';
import { SnackbarProvider } from 'notistack';
import { useGetDishesQuery } from '../../store/api/api';
// import s from './style.module.css';
import MenuItem from './MenuItem';

function Menu() {
  const { data, isLoading } = useGetDishesQuery(10);

  if (isLoading) return null;
  return (
    <SnackbarProvider maxSnack={3}>
      <Grid container spacing={2}>
        {data.map((item) => (
          <MenuItem item={item} key={item.id} />))}
      </Grid>
    </SnackbarProvider>
  );
}

export default Menu;
