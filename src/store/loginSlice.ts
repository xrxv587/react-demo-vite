import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../apis/types";

const initialState: User = {
    username: '',
    userId: ''
}

const loginSlice = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
        setUserInfo(state, action: PayloadAction<User>) {
            state = action.payload;
        }
    }
})

export default loginSlice.reducer;
export const { setUserInfo } = loginSlice.actions;
