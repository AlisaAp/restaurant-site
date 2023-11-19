import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import mainImg from '../../assets/images/main_foto.jpg';
import s from './style.module.css';
import CustomTheme from '../../utils/theme';

function Home() {
  return (
    <ThemeProvider theme={CustomTheme}>
      <div className={s.home} style={{ backgroundImage: `url(${mainImg})` }}>
        <div className="headerContainer">
          <h1 className={s.title}>Best Italian food</h1>
          <p className={s.subtitle}>food website</p>
          <Link to="/menu">
            <Button variant="contained" size="large" color="primary">ORDER NOW</Button>
          </Link>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Home;
