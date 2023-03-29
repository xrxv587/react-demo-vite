import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo, TodoItem } from '../../apis/types';

const initialState: Todo = [
	{
		item: '吃饭',
		isDone: false
	},
	{
		item: '睡觉',
		isDone: false
	},
	{
		item: '打豆豆',
		isDone: false
	},
];
export const todoSlice = createSlice({
	name: 'Todo',
	initialState,
	reducers: {
		AddTodo(state, action: PayloadAction<TodoItem>) {
			state.push(action.payload);
		},
		doneTodoItem(state, action: PayloadAction<number>) {
			state.splice(action.payload, 1);
		}
	}
});

export default todoSlice.reducer;
export const { AddTodo, doneTodoItem } = todoSlice.actions;