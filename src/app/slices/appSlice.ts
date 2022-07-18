import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

export interface AppState {
  theme: Theme;
}

const initialState: AppState = {
  theme: Theme.LIGHT,
};

export const appSplice = createSlice({
  name: "app",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = appSplice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCurrentTheme = (state: RootState) => state.app.theme;

export default appSplice.reducer;
