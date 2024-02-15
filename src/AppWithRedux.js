import './App.css';
import React, { useCallback } from 'react';
import { Todolist } from './ToDolist/Todolist';
import { AddFormItem } from './ToDolist/AddFormItem';
import { Container, Grid, Paper } from '@mui/material';
import {
  addTodolistAC,
  changeTodolistFilterAC,
  changeTodolistTitleAC,
  removeTodolistAC,
} from './ToDolist/State/todolists-reducer';
import { useDispatch, useSelector } from 'react-redux';
import { ComboBox } from './ToDolist/AutoComplForm/AutoComplForm';
import { ToolBarComp } from './WorkProject/ToolBar/ToolBar';

export function AppWithRedux() {
  const dispatch = useDispatch();
  const toDoLists = useSelector((state) => state.toDoLists);
  const tasksObj = useSelector((state) => state.tasksObj);

  let removeToDoList = (toDoLIstId) => {
    /*    const action = removeTodolistAC(toDoLIstId)
                dispatchToDoListsReducer(action)*/
    dispatch(removeTodolistAC(toDoLIstId));
    delete tasksObj[toDoLIstId];
  };

  let changeToDoListTitle = (toDoLIstId, newTitle) => {
    /*const action = changeTodolistTitleAC(toDoLIstId, newTitle)
                dispatchToDoListsReducer(action)*/
    dispatch(changeTodolistTitleAC(toDoLIstId, newTitle));
  };

  function changeFilter(filterValue, toDoListId) {
    /* const action = changeTodolistFilterAC(value, toDoListId)
             dispatchToDoListsReducer(action)*/
    dispatch(changeTodolistFilterAC(filterValue, toDoListId));
  }

  const addNewList = useCallback((title) => {
    /* const action = addTodolistAC(title)
         dispatchToDoListsReducer(action)
         dispatchTaskReducer(action)*/
    dispatch(addTodolistAC(title));
  }, []);

  return (
    <div className="App">
      <ToolBarComp />
      <Container style={{ padding: '10px' }} fixed>
        <Grid container>
          <ComboBox toDoLists={toDoLists} />
          <AddFormItem addItem={addNewList} />
        </Grid>
        <Grid container spacing={3}>
          {toDoLists.map((tl) => {
            return (
              <Grid item>
                <Paper style={{ padding: '10px' }}>
                  <Todolist
                    propTitle={tl.title}
                    key={tl.id}
                    tlId={tl.id}
                    changeFilter={changeFilter}
                    propFilter={tl.filter}
                    removeToDoList={removeToDoList}
                    changeToDoListTitle={changeToDoListTitle}
                    newTitle={removeToDoList}
                  />
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}
