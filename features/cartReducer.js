import {createSlice} from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    item: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemPresent = state.item?.find(
        item => item.id === action.payload.id,
      );
      if (itemPresent) {
        itemPresent.quantity++;
      } else {
        state.item.push({...action.payload, quantity: 1});
      }
    },
    removeFromCart: (state, action) => {
      const removeFromCart = state.item.filter(
        item => item.id !== action.payload,
      );
      state.item = removeFromCart;
    },
    incrementQty: (state, action) => {
      const itemPresent = state.item.find(item => item.id === action.payload);
      if (itemPresent) {
        itemPresent.quantity++;
      }
    },
    decrementQty: (state, action) => {
      const itemPresent = state.item.find(item => item.id === action.payload);
      if (itemPresent) {
        if (itemPresent.quantity == 1) {
          const removeFromCart = state.item.filter(
            item => item.id !== action.payload.id,
          );
          state.item = removeFromCart;
        } else {
          itemPresent.quantity--;
        }
      }
    },
  },
});

export const {addToCart, removeFromCart, incrementQty, decrementQty} =
  cartSlice.actions;
export default cartSlice.reducer;
