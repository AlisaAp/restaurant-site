import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import s from './style.module.css';

function DefaultTemplate() {
  return (
    <>
      <Header />
      <div className={s.main}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default DefaultTemplate;
