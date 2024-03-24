import { createSlice } from '@reduxjs/toolkit';
import { getAdverts } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  adverts: [],
  // selectedAdvert: null,
  favorites: [],
  isLoading: false,
  error: null,
};

export const advertsSlice = createSlice({
  name: 'adverts',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        item => item._id !== action.payload
      );
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAdverts.pending, handlePending)
      .addCase(getAdverts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.adverts = action.payload;
      })
      .addCase(getAdverts.rejected, handleRejected);

    // .addCase(getAdvertById.pending, handlePending)
    // .addCase(getAdvertById.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.selectedAdvert = action.payload;
    // })
    // .addCase(getAdvertById.rejected, handleRejected);
  },
});

export const { addFavorite, removeFavorite } = advertsSlice.actions;

export const advertsReducer = advertsSlice.reducer;
