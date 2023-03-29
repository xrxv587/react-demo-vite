import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './todo/todoSlice';

const store = configureStore({
	reducer: {
		todo: todoSlice
	}
});

export default store;
export type RootState = ReturnType<typeof store.getState>;