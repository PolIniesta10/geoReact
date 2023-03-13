import { configureStore } from '@reduxjs/toolkit'
import postMarkSlice from './slices/postMarkSlice'
import todosReducer from "./slices/todoSlice"


export const store = configureStore({
  reducer: {
    todos: todosReducer,
    postMarks: postMarkSlice 
  },
})