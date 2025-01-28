import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
    roomId: string;
    username: string;
}

const initialState: User = {
    roomId: "",
    username: "",
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        updateUser(state: User, action: PayloadAction<User>) {
            state.roomId = action.payload.roomId;
            state.username = action.payload.username;
        },
    },
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;