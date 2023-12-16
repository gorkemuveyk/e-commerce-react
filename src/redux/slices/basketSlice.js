import { createSlice } from "@reduxjs/toolkit";

const totalIds = Object.values(localStorage)
  .map(item => {
    const parsedItem = JSON.parse(item);
    return parsedItem?.quantity || 0;
  })
  .reduce((accumulator, currentId) => accumulator + currentId, 0);

const initialState = {
  count: totalIds,
  showToast: false
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addBasket: (state, action) => {
      state.count += 1;
      action.payload.quantity = 1;
      if (localStorage.getItem(action.payload.id)) {
        let tempData = JSON.parse(localStorage.getItem(action.payload.id));
        tempData.quantity = (tempData.quantity + 1);
        localStorage.setItem(action.payload.id, JSON.stringify(tempData));

      } else {
        localStorage.setItem(`${action.payload.id}`, JSON.stringify(action.payload));
      }
      state.showToast = true
    },
    removeBasket: (state) => {
      state.count -= 1;
    },
    setShowToast: (state, action) => {
      state.showToast = action.payload
    }
  },
});

export const { addBasket, removeBasket, setShowToast } = basketSlice.actions

export default basketSlice.reducer;
