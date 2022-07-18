import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { User, Users } from "../../types/user.type";

export interface UserState {
  userDetails: User | null;
  shouldLogin: boolean;
  allUsers: Users | null;
}

const initialState: UserState = {
  userDetails: null,
  shouldLogin: false,
  allUsers: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setUserDetails: (state, action: PayloadAction<User | null>) => {
      state.userDetails = action.payload;
    },
    setShouldLogin: (state, action: PayloadAction<boolean>) => {
      state.shouldLogin = action.payload;
    },
    setAllUsers: (state, action: PayloadAction<Users>) => {
      state.allUsers = action.payload;
    },
  },
});

export const { setUserDetails, setShouldLogin, setAllUsers } = userSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectUserDetails = (state: RootState) => state.user.userDetails;
export const selectShouldLogin = (state: RootState) => state.user.shouldLogin;
export const selectAllUsers = (state: RootState) => state.user.allUsers;

export default userSlice.reducer;
