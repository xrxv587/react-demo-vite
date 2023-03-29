export type LoginType = {
	username: string;
	password: string;
}
export type TodoItem = {
	item: string;
	isDone: boolean;
}
export type Todo = TodoItem[];