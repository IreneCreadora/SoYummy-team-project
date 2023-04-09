import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import recipesReducer from './recipes/recipesSlice';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import shoppingListReducer from './shoppingList/shoppingListSlice';
import { mainRecipeReduser } from './previewCategories/categoriesSlice';
import favoriteRecipesReducer from './favoriteRecipes/favoriteRecipesSlice';
import myRecipesReducer from './myRecipes/myRecipesRecipesSlice';
import ingredientsReducer from './ingredients/ingredientsSlice';
import searchSlice from './search/searchSlice';

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistReducer,
} from 'redux-persist';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['accessToken'],
};

export const persistedReducerAuth = persistReducer(persistConfig, authReducer);

const outerRecipesPersistConfig = {
  key: 'outerRecipes',
  storage,
  whitelist: ['mainCategories'],
};
const persistedOuterRecipesReducer = persistReducer(
  outerRecipesPersistConfig,
  mainRecipeReduser
);

export const store = configureStore({
  reducer: {
    auth: persistedReducerAuth,
    recipes: recipesReducer,
    shoppingList: shoppingListReducer,
    outerRecipes: persistedOuterRecipesReducer,
    recipe: mainRecipeReduser,
    favoriteRecipes: favoriteRecipesReducer,
    myRecipes: myRecipesReducer,
    ingredients: ingredientsReducer,
    search: searchSlice,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
