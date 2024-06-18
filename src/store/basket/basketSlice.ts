import { createSlice } from "@reduxjs/toolkit";
import { getBasket } from "./basketThunk";
import { BasketItemType } from "../../utils/types";

type initialStateType = {
  basket: BasketItemType[];
};

const initialState: initialStateType = {
  basket: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBasket.fulfilled, (state, { payload }) => {
      state.basket = payload;
    });
  },
});
