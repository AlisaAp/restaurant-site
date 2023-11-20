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
  },
});
export const {
  addToBasket, removeFromBasket, emptyBasket, changeAmount,
} = basket.actions;

export default basket.reducer;
