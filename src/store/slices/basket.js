import { createSlice } from '@reduxjs/toolkit';

const basket = createSlice({
  initialState: {
    basket: [],
  },
  name: 'basket',
  reducers: {
    addToBasket: (state, { payload }) => {
      state.basket.push(payload);
    },
    removeFromBasket: (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.basket = state.basket.filter((item) => item.id !== payload);
    },
    emptyBasket: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.basket = [];
    },
    changeAmount: (state, { payload: id }) => {
      // eslint-disable-next-line no-param-reassign
      const index = state.basket.findIndex((item) => item.id === id);
      // eslint-disable-next-line no-param-reassign
      state.basket[index].amount += 1;
    },
    increaseAmount: (state, { payload: id }) => {
      // eslint-disable-next-line no-param-reassign
      const index = state.basket.findIndex((item) => item.id === id);
      // eslint-disable-next-line no-param-reassign
      state.basket[index].amount += 1;
    },
    minimizeAmount: (state, { payload: id }) => {
      // eslint-disable-next-line no-param-reassign
      const index = state.basket.findIndex((item) => item.id === id);
      // eslint-disable-next-line no-param-reassign
      state.basket[index].amount -= 1;
      // eslint-disable-next-line no-param-reassign,max-len
      if (state.basket[index].amount === 0) { state.basket = state.basket.filter((item) => item.id !== id); }
    },
  },
});
export const {
  addToBasket, removeFromBasket, emptyBasket, changeAmount, increaseAmount, minimizeAmount,
} = basket.actions;

export default basket.reducer;
