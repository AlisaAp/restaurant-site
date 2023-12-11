import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import MenuPage from './pages/MenuPage';
import PageNotFound from './pages/PageNotFound';
import CustomTheme from './utils/theme';
import OrderPage from './pages/OrderPage';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <ThemeProvider theme={CustomTheme}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/menu/:category" element={<MenuPage />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </ThemeProvider>
      </HashRouter>
    </div>
  );
}

export default App;
