import { createSlice } from '@reduxjs/toolkit';

const order = createSlice({
  initialState: {
    order: {},
  },
  name: 'order',
  reducers: {
    addToBasket: (state, { payload }) => {
      state.basket.push(payload);
    },
    removeFromBasket: (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.basket = state.basket.filter((item) => item.id !== payload);
    },
    changeAmount: (state, { payload: id }) => {
      // eslint-disable-next-line no-param-reassign
      const index = state.basket.findIndex((item) => item.id === id);
      // eslint-disable-next-line no-param-reassign
      state.basket[index].amount += 1;
    },
  },
});
export const { addToBasket, removeFromBasket, changeAmount } = order.actions;

export default order.reducer;
