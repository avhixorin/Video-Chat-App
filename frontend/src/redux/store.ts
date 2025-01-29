import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import roomSlice from './roomSlice';
import chatSlice from './chatSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  user: persistReducer(persistConfig, userSlice),
  rooms: persistReducer(persistConfig, roomSlice),
  chats: persistReducer(persistConfig, chatSlice),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }),
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
