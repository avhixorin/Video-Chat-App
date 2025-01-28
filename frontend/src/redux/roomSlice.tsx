import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from './userSlice';

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
        updateRoom(state: Room, action: PayloadAction<Room>) {
            state.roomId = action.payload.roomId;
            state.participants = action.payload.participants;
        },
    },
});

export const { updateRoom } = roomSlice.actions;
export default roomSlice.reducer;