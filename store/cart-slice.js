import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], totalQuantity: 0, isChange: false },
  reducers: {
    //read
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    //edit+add
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id == newItem.id);
      state.totalQuantity++;
      state.isChange = true;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          img: newItem.img,
          price: newItem.price,
          totalPrice: newItem.price,
          quality: 1,
        });
      } else {
        existingItem.quality++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    //delete
    removeToCart(state, action) {
      const newItemId = action.payload;
      const existingItem = state.items.find((item) => item.id === newItemId);
      if (existingItem.quality === 1) {
        state.items = state.items.find((item) => item.id !== newItemId);
      } else {
        existingItem.quality--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const cartAction = cartSlice.actions;
export default cartSlice.reducer;
