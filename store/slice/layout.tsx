import { createSlice } from '@reduxjs/toolkit';

export const layoutSlice = createSlice({
  // # Default
  name: 'layout',
  // # State
  initialState: {
    mobileNav: false
  },
  reducers: {
    setlayoutMobile: (state, action) => {
      state.mobileNav = action.payload;
      console.log('slice', isActiveNav)
    }
  }
});

// # State
export const isActiveNav = ({ layoutSlice }) => layoutSlice.mobileNav;

// # Actions
export const {
  setlayoutMobile
} = layoutSlice.actions;

// # Reducer
export default layoutSlice.reducer;
