const { createSlice } = require('@reduxjs/toolkit');

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    onAddToCart(state, product) {
      state.push(product);
    },
  },
});

const { actions, reducer } = cartSlice;
export const { onAddToCart } = actions;
export default reducer;
