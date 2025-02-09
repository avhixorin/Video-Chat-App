import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "./userSlice";

interface Room {
    roomId: string;
    participants: User[];
}

const initialState: Room = {
    roomId: "",
    participants: [],
};

const roomSlice = createSlice({
    name: "room",
    initialState,
    reducers: {
        updateRoom: (state, action: PayloadAction<Partial<Room>>) => {
            return { ...state, ...action.payload };
        },
        addUser: (state, action: PayloadAction<User>) => {
            if (!state.participants.find((participant) => participant.username === action.payload.username)) {
                state.participants = [...state.participants, action.payload];
            }
        },
        upadateUsers: (state, action: PayloadAction<User[]>) => {
            state.participants = action.payload;
        },
    },
});

export const { updateRoom, addUser, upadateUsers } = roomSlice.actions;
export default roomSlice.reducer;
