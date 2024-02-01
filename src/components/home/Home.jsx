import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Stack } from '@mui/material';
import main from '../../assets/images/main.jpg';
import s from './style.module.css';

function Home() {
  return (
    <Box className={s.home} sx={{ backgroundImage: `url(${main})` }}>
      <Stack spacing={30} sx={{ p: 30 }}>
        <h1 className={s.title}>Best Italian food</h1>
        <p className={s.subtitle}>food website</p>
        <Link to="/menu/all">
          <Button variant="contained" size="large" color="primary">ORDER NOW</Button>
        </Link>
      </Stack>
    </Box>
  );
}

export default Home;
