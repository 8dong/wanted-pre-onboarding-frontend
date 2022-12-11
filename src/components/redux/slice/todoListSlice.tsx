import { createSlice } from '@reduxjs/toolkit';

export interface TodoType {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

const todoListSlice = createSlice({
  name: 'todoList',
  initialState: [] as TodoType[],
  reducers: {
    setTodos(_, action) {
      return action.payload;
    },
    addTodo(state, action) {
      return [action.payload, ...state];
    },
    editTodo(state, action) {
      const editedTodoIndex = state.findIndex((todo) => todo.id === action.payload.id);
      state[editedTodoIndex] = action.payload;
    },
    deleteTodo(state, action) {
      const newTodos = state.filter((todo) => todo.id !== action.payload);

      return newTodos;
    }
  }
});

export default todoListSlice;
