import { createSlice } from "@reduxjs/toolkit";

interface Chats {
    from: string;
    message: string;
    timestamp: string;
}

interface ChatHistory {
    chatHistory: Map<string, Chats[]>; 
}

const initialState: ChatHistory = {
    chatHistory: new Map(),
};

const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        updateChat(state: ChatHistory, action) {
            const { friendUsername, from, message, timestamp } = action.payload;
            const chats = state.chatHistory.get(friendUsername) || [];
            state.chatHistory.set(friendUsername, [...chats, { from, message, timestamp }]);
        },
    },
});

export const { updateChat } = chatSlice.actions;
export default chatSlice.reducer;