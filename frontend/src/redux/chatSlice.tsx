import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Chats {
    from: string;
    message: string;
    timestamp: string;
}

interface ChatHistoryState {
    chatHistory: Chats[];
}

const initialState: ChatHistoryState = {
    chatHistory: [],
};

const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        updateChat(state, action: PayloadAction<Chats>) {
            if (!Array.isArray(state.chatHistory)) {
                state.chatHistory = [];
            }

            state.chatHistory = [...state.chatHistory, action.payload]; 

            if (state.chatHistory.length > 50) {
                state.chatHistory = state.chatHistory.slice(1);
            }
        },
    },
});

export const { updateChat } = chatSlice.actions;
export default chatSlice.reducer;
