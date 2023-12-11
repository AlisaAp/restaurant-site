import React from 'react';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import s from './style.module.css';
import categoriesData from '../../../utils/categoriesData';

function Categories() {
  const navigate = useNavigate();
  const handleClick = (name) => {
    navigate(`/menu/${name}`);
  };
  return (
    <div className={s.categories}>
      <Stack direction="row" spacing={5}>
        {categoriesData.map(({ name, img }) => (
          <Button key={name} variant="outlined" className={s.box} onClick={() => handleClick(name)}>
            <img src={img} alt={name} height={30} />
            {name}
          </Button>
        ))}
      </Stack>
    </div>
  );
}

export default Categories;
