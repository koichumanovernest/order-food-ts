import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";
import { MealItem } from "../../utils/types";

export const getMeals = createAsyncThunk(
  "meals/get",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get<MealItem[]>(`${BASE_URL}/meals`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
