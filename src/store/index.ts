import { configureStore } from '@reduxjs/toolkit';
import loginSlice from './loginSlice';
import todoSlice from './todo/todoSlice';

const store = configureStore({
	reducer: {
		todo: todoSlice,
		userInfo: loginSlice
	}
});

export default store;
export type RootState = ReturnType<typeof store.getState>;