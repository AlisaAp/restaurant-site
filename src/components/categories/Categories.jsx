import React from 'react';
import Stack from '@mui/material/Stack';
import { Box, Button, Skeleton } from '@mui/material';
import { NavLink } from 'react-router-dom';
import s from './style.module.css';
import { useGetCategoriesQuery } from '../../store/api/api';

function Categories() {
  const { data: categoriesData, isLoading } = useGetCategoriesQuery();

  if (isLoading) {
    return (
      new Array(8).map(() => (
        <Skeleton variant="rectangular" sx={{ width: { xs: 90, sm: 180 } }} height={60} />
      ))

    );
  }
  return (
    <Box sx={{
      mb: { xs: 0, md: 15 }, mx: { xs: -15, md: 0 }, '&::-webkit-scrollbar': { width: 0 }, overflow: { xs: 'scroll', lg: 'visible' },
    }}
    >
      <Stack direction="row" justifyContent="space-between" spacing={{ xs: 5, sm: 10, md: 15 }}>
        {categoriesData.map(({ name, img }) => (
          <NavLink to={`/menu/${name}`} className={s.link} key={name}>
            {({ isActive }) => (
              <Button
                variant={isActive ? 'contained' : 'text'}
                sx={{
                  display: 'flex', flexDirection: 'column', gap: 1, width: { xs: 90, sm: 180 },
                }}
                className={s.box}
              >
                {name}
                <img src={img} alt={name} height={40} />
              </Button>
            )}
          </NavLink>
        ))}
      </Stack>
    </Box>
  );
}

export default Categories;
