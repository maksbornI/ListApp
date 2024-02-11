import { tasksReducer } from './State/tasks-reducer';
import { todoListsReducer } from './State/todolists-reducer';
import { configureStore } from '@reduxjs/toolkit';
import { modelListReducer } from './State/modelList-reducer';

export const store = configureStore({
  reducer: {
    toDoLists: todoListsReducer,
    tasksObj: tasksReducer,
    modelList:modelListReducer
  },
});
