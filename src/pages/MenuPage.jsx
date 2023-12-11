import React from 'react';
import DefaultTemplate from '../templates/DefaultTemplate';
import Menu from '../components/menu/Menu';
import Categories from '../components/menu/categories/Categories';

function MenuPage() {
  return (
    <DefaultTemplate>
      <Categories />
      <Menu />
    </DefaultTemplate>
  );
}

export default MenuPage;
