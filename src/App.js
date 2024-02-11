import './App.css';
import React, { useCallback } from 'react';
import { Container, Grid, Paper } from '@mui/material';
import { changeTodolistFilterAC, changeTodolistTitleAC } from './ToDolist/State/todolists-reducer';
import { useDispatch, useSelector } from 'react-redux';
import { ToolBarComp } from './WorkProject/ToolBar/ToolBar';
import { setModelListTitleAC } from './ToDolist/State/modelList-reducer';
import { PartList } from './WorkProject/PartList';

function App() {
  const dispatch = useDispatch();
  const toDoLists = useSelector((state) => state.modelList);


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

  const setModel = useCallback((state) => {
    /* const action = addTodolistAC(title)
         dispatchToDoListsReducer(action)
         dispatchTaskReducer(action)*/
    dispatch(setModelListTitleAC(state));
  }, []);


  return (
    <div className='App'>
      <ToolBarComp setModel={setModel} />
      <Container style={{ padding: '10px' }} fixed>
        <Grid container>

        </Grid>
        <Grid container spacing={3}>
          <Paper style={{ padding: '10px' }}>
            {toDoLists.map((tl) => {
              return (
                <Grid item>

                  <PartList
                    propTitle={tl.PODZESPÓŁ}
                    key={tl.id}
                    tlId={tl.id}
                    changeFilter={changeFilter}
                    propFilter={tl.NAZWA}
                    changeToDoListTitle={changeToDoListTitle}
                  />

                </Grid>
              );
            })}
          </Paper>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
