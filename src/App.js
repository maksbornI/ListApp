import './App.css';
import React, { memo, useCallback, useState } from 'react';
import { Button, Container, Grid, Paper } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { ToolBarComp } from './WorkProject/ToolBar/ToolBar';
import { changeFilterAC, setModelListTitleAC } from './WorkProject/State/modelList-reducer';
import { Table } from './WorkProject/Table/Table';

export let App = memo(() => {
  let fr = true;

  let [filter, setFilter] = useState('all');

  const dispatch = useDispatch();
  const modelList = useSelector((state) => state.modelList);

  function changeFilter(filter) {
    dispatch(changeFilterAC(filter));
  }

  const onAllClickHandler = () => {
    setFilter('all');
  };
  const onActiveClickHandler = () => {
    setFilter('active');
  };
  const onCompletedClickHandler = () => {
    setFilter('completed');
  };

  const setModel = useCallback((state) => {
    dispatch(setModelListTitleAC(state));
  }, []);

  let itemList = modelList;
  if (filter === 'completed') {
    itemList = itemList.filter((t) => t.isDone === true);
  }
  if (filter === 'active') {
    itemList = itemList.filter((t) => t.isDone === false);
  }
  return (
    <div className="App">
      <ToolBarComp setModel={setModel} />
      <Container style={{ padding: '10px' }} fixed>
        <Grid container></Grid>
        <Grid container spacing={3}>
          <Paper style={{ padding: '10px' }}>
            <Table modelList={itemList} />
            {/*<table className="App">
              {itemList.map((el, key) => {
                return (
                  <PartList
                    propTitle={el.PODZESPÓŁ}
                    id={el.id}
                    changeFilter={changeFilter}
                    propFilter={el.filter}
                    isDone={el.isDone}
                    key={key}
                    el={el}
                  />
                );
              })}
            </table>*/}

            <div>
              <Button variant={filter === 'all' ? 'contained' : 'text'} onClick={onAllClickHandler}>
                all
              </Button>
              <Button
                color={'primary'}
                variant={filter === 'active' ? 'contained' : 'text'}
                onClick={onActiveClickHandler}
              >
                Active
              </Button>
              <Button
                color={'secondary'}
                variant={filter === 'completed' ? 'contained' : 'outlined'}
                onClick={onCompletedClickHandler}
              >
                Completed
              </Button>
            </div>
          </Paper>
        </Grid>
      </Container>
    </div>
  );
});
