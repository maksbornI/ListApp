import { v1 } from 'uuid';

const REMOVETASK = 'REMOVE-TASK';
const ADDTASK = 'ADD-TASK';
const CHANGETASKSTATUS = 'CHANGE-TASK-STATUS';
const ADDTODOLIST = 'ADD-TODOLIST';
const CHANGETASKSTITLE = 'CHANGE-TASK-TITLE';
const REMOVETODOLIST = 'REMOVE-TODOLIST';

export const removeTaskAC = (id, todolistId) => {
  return { type: REMOVETASK, id, todolistId };
};
export const addTaskAC = (title, toDoListId) => {
  return { type: ADDTASK, title, toDoListId };
};
export const changeTaskStatusAC = (taskId, isDone, toDoListId) => {
  return { type: CHANGETASKSTATUS, taskId, isDone, toDoListId };
};
export const changeTaskTitleAC = (taskId, title, toDoListId) => {
  return { type: CHANGETASKSTITLE, taskId, title, toDoListId };
};

const initialState = {};

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVETASK: {
      let stateCopy = { ...state };

      const tasks = stateCopy[action.todolistId];
      stateCopy[action.todolistId] = tasks.filter((t) => t.id !== action.id);
      return stateCopy;
    }
    case ADDTASK: {
      let stateCopy = { ...state };
      let tasks = stateCopy[action.toDoListId];
      let newTask = {
        id: v1(),
        title: action.title,
        isDone: false,
      };

      stateCopy[action.toDoListId] = [newTask, ...tasks];
      return stateCopy;
    }
    case CHANGETASKSTATUS: {
      let stateCopy = { ...state };
      let tasks = stateCopy[action.toDoListId];
      stateCopy[action.toDoListId] = tasks.map((t) => (t.id === action.taskId ? { ...t, isDone: action.isDone } : t));

      return stateCopy;
    }
    case CHANGETASKSTITLE: {
      let stateCopy = { ...state };
      let tasks = stateCopy[action.toDoListId];
      stateCopy[action.toDoListId] = tasks.map((t) => (t.id === action.taskId ? { ...t, title: action.title } : t));

      return stateCopy;
    }
    case ADDTODOLIST: {
      let stateCopy = { ...state };
      stateCopy[action.todolistId] = [];

      return stateCopy;
    }
    case REMOVETODOLIST: {
      let stateCopy = { ...state };
      delete stateCopy[action.id];

      return stateCopy;
    }

    default:
      return state;
  }
};
