import React from 'react';
import { Grid, Skeleton } from '@mui/material';
import { SnackbarProvider } from 'notistack';
import { useGetDishesQuery } from '../../store/api/api';
// import s from './style.module.css';
import MenuItem from './MenuItem';

function Menu() {
  const { data, isLoading } = useGetDishesQuery(10);

  if (isLoading) {
    return (
      <Grid container spacing={2}>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item}>
            <Skeleton variant="rectangular" height={280} />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" width={120} />
          </Grid>
        ))}
      </Grid>
    );
  }
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
