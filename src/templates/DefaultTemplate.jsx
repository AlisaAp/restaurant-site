import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import s from './style.module.css';

function DefaultTemplate({ children }) {
  return (
    <>
      <Header />
      <div className={s.main}>
        {children}
      </div>
      <Footer />
    </>
  );
}

DefaultTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
export default DefaultTemplate;
