import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import MenuPage from './pages/MenuPage';
import PageNotFound from './pages/PageNotFound';
import store from './store';
import CustomTheme from './utils/theme';
import BasketPage from './pages/BasketPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <ThemeProvider theme={CustomTheme}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/basket" element={<BasketPage />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </ThemeProvider>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
