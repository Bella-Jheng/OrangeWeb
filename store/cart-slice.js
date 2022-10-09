import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], totalQuantity: 0, totalPrice: 0, isChange: false },
  reducers: {
    //read
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    //edit+add
    addToCart(state, action) {
      const newItem = action.payload;
      let existingItem = state.items.find((item) => item.id == newItem.id);
      state.isChange = true;
      state.totalQuantity = state.totalQuantity + newItem.quantity;
      state.totalPrice = state.totalPrice + newItem.quantity * newItem.price;

      if(existingItem && existingItem.size){
        existingItem = state.items.find((item) => item.size == newItem.size);
      }

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          img: newItem.img,
          price: newItem.price,
          size: newItem.size,
          quantity: newItem.quantity,
          totalPrice: newItem.price * newItem.quantity,
        });
      } else {
        existingItem.quantity = existingItem.quantity + newItem.quantity;
        existingItem.totalPrice =
          existingItem.totalPrice + newItem.price * newItem.quantity;
      }
    },

    //delete
    removeFromCart(state, action) {
      const newItem = action.payload;
      state.isChange = true;
      let existingItem = state.items.find((item) => item.id === newItem.id);
      if(existingItem && existingItem.size){
        existingItem = state.items.find((item) => item.size == newItem.size);
      }
      if (existingItem) {
        if(!newItem.size){
          state.items = state.items.filter((item) => item.id !== newItem.id);
        }else{
          state.items = state.items.filter((item) => item.size !== newItem.size);
        }
        state.totalQuantity = state.totalQuantity - existingItem.quantity;
        state.totalPrice =
          state.totalPrice - existingItem.quantity * existingItem.price;
      
        } else {
        state.items = [];
        state.totalQuantity = 0;
        state.totalPrice = 0;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
