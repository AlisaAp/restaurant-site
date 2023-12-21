import React from 'react';
import Stack from '@mui/material/Stack';
import { Button, Skeleton } from '@mui/material';
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
    <div className={s.categories}>
      <Stack direction="row" justifyContent="space-between" spacing={{ xs: 1, sm: 2, md: 4 }}>
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
    </div>
  );
}

export default Categories;
