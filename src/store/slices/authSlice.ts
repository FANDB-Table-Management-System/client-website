import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {UserState} from '../types'

const initialState: UserState = {
  username: "",
  phoneNumber: "",
  otp: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo: (
      state,
      action: PayloadAction<{ username: string; phoneNumber: string }>
    ) => {
      const { username, phoneNumber } = action.payload;
      state.username = username;
      state.phoneNumber = phoneNumber;
    },
    setOtp: (state, action: PayloadAction<string>) => {
      state.otp = action.payload;
    },
  },
});

export const { setUserInfo, setOtp } = userSlice.actions;
export default userSlice.reducer;

export const selectUserAndOtp = (state: any) => ({
  user: state.user,
  otp: state.user.otp,
});
