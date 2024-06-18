import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";
import { BasketItemType } from "../../utils/types";

export const getBasket = createAsyncThunk(
  "basket/get",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get<BasketItemType[]>(`${BASE_URL}/basket`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addToBasket = createAsyncThunk(
  "basket/post",
  async (data: BasketItemType, { rejectWithValue, dispatch }) => {
    try {
      await axios.post(`${BASE_URL}/basket`, data);
      dispatch(getBasket());
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const increaseBasket = createAsyncThunk(
  "basket/changeAmount",
  async (
    data: {
      basketId: number;
      title: string;
      price: string;
      updatedAmount: number;
    },
    { rejectWithValue, dispatch }
  ) => {
    try {
      await axios.patch(`${BASE_URL}/basket/${data.basketId}`, {
        ...data,
        amount: data.updatedAmount,
      });
      dispatch(getBasket());
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteBasketMeal = createAsyncThunk(
  "basket/delete",
  async (id: number, { rejectWithValue, dispatch }) => {
    try {
      await axios.delete(`${BASE_URL}/basket/${id}`);
      dispatch(getBasket());
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
