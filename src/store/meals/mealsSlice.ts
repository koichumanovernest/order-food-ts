import { createSlice } from "@reduxjs/toolkit";
import { getMeals } from "./mealsThunk";
import { MealItem } from "../../utils/types";

type initialStateType = {
  meals: MealItem[];
};

const initialState: initialStateType = {
  meals: [],
};

export const mealsSlice = createSlice({
  name: "meal",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMeals.fulfilled, (state, { payload }) => {
      state.meals = payload;
    });
  },
});
