import { v1 } from 'uuid';

const REMOVETODOLIST = 'REMOVE-TODOLIST';
const ADDTODOLIST = 'ADD-TODOLIST';
const CHANGETODOLISTTITLE = 'CHANGE-TODOLIST-TITLE';
const CHANGETODOLISTFILTER = 'CHANGE-TODOLIST-FILTER';

export const removeTodolistAC = (id) => {
  return { type: REMOVETODOLIST, id };
};
export const addTodolistAC = (title) => {
  return { type: ADDTODOLIST, title, todolistId: v1() };
};
export const changeTodolistFilterAC = (filterValue, id) => {
  return { type: CHANGETODOLISTFILTER, filterValue, id };
};
export const changeTodolistTitleAC = (id, title) => {
  return { type: CHANGETODOLISTTITLE, id, title };
};

const initialState = [];

export const todoListsReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVETODOLIST: {
      return state.filter((tl) => tl.id !== action.id);
    }
    case ADDTODOLIST: {
      return [
        {
          label: action.title,
          id: action.todolistId,
          title: action.title,
          filter: 'all',
        },
        ...state,
      ];
    }
    case CHANGETODOLISTTITLE: {
      const stateCopy = [...state];
      return stateCopy.map((tl) => (tl.id === action.id ? { ...tl, title: action.title } : tl));
    }
    case CHANGETODOLISTFILTER: {
      debugger;
      const stateCopy = [...state];
      return stateCopy.map((tl) => (tl.id === action.id ? { ...tl, filter: action.filterValue } : tl));
    }
    default:
      return state;
  }
};
