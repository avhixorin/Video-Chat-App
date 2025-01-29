import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
    username: string;
    userProfile: string;
    chatHistory?: Map<string, string[]>; // Map<roomId, chatHistory>
}

const initialState: User = {
    username: "",
    userProfile: "",
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        updateUser(state: User, action: PayloadAction<User>) {
            state.username = action.payload.username;
            state.userProfile = action.payload.userProfile;
        },
    },
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;