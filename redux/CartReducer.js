import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemPresent = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemPresent) {
        itemPresent.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    incrementQuantity: (state, action) => { // 'incementQuantity' yazım hatası düzeltildi
      const itemPresent = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemPresent) {
        itemPresent.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const itemPresent = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemPresent) {
        if (itemPresent.quantity === 1) {
          state.cart = state.cart.filter(
            (item) => item.id !== action.payload.id
          );
        } else {
          itemPresent.quantity--;
        }
      }
    },
    cleanCart: (state) => {
      state.cart = [];
    },
  },
});

// Export edilen aksiyonlar
export const {
  addToCart,
  removeFromCart,
  incrementQuantity, // Yazım hatası düzeltildi
  decrementQuantity,
  cleanCart,
} = CartSlice.actions;

export default CartSlice.reducer;
