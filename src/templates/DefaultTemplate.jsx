import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

function DefaultTemplate({ children }) {
  return (
    <>
      <Header />
      <div>
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
