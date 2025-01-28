import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
    roomId: string;
    username: string;
    userProfile: string;
}

const initialState: User = {
    roomId: "",
    username: "",
    userProfile: "",
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        updateUser(state: User, action: PayloadAction<User>) {
            state.roomId = action.payload.roomId;
            state.username = action.payload.username;
            state.userProfile = action.payload.userProfile;
        },
    },
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;