import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import api from 'service/Api/axiosBaseURL';

export const getMyRecipes = createAsyncThunk(
  'myRecipes/getRecipes',
  async (page = 1, thunkAPI) => {
    try {
      const { data } = await api.get(`/recipes/my?page=${page}&limit=4`);
      const myRecipes = data;
      return myRecipes;
    } catch (error) {
      toast.error('Something went wrong, please try again later');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeMyRecipes = createAsyncThunk(
  'myRecipes/removeMyRecipes',
  async (recipeId, thunkAPI) => {
    try {
      const { data } = await api.delete(`/recipes/${recipeId}`);
      toast.success('Removed from myRecipes');
      return data;
    } catch (error) {
      toast.error('Something went wrong, please try again later');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
