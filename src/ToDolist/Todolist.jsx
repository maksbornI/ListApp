import { AddFormItem } from './AddFormItem';
import { EditableSpan } from './EditableSpan';
import { Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { addTaskAC } from './State/tasks-reducer';
import { memo, useCallback } from 'react';
import { Task } from './Task';

export const Todolist = memo(({ propTitle, tlId, changeFilter, propFilter, removeToDoList, changeToDoListTitle }) => {
  const tasksObj = useSelector((state) => state.tasksObj[tlId]);
  const dispatch = useDispatch();

  const onAllClickHandler = useCallback(() => {
    changeFilter('all', tlId);
  }, [changeFilter, tlId]);
  const onActiveClickHandler = useCallback(() => {
    debugger;
    changeFilter('active', tlId);
  }, [tlId, changeFilter]);
  const onCompletedClickHandler = useCallback(() => {
    changeFilter('completed', tlId);
  }, [tlId, changeFilter]);
  const onRemoveHandler = useCallback(() => {
    removeToDoList(tlId);
  }, [tlId, removeToDoList]);
  const onChangeTitleHandler = useCallback(
    (newTitle) => {
      changeToDoListTitle(tlId, newTitle);
    },
    [tlId, changeToDoListTitle],
  );
  const addNewTask = useCallback(
    (title) => {
      dispatch(addTaskAC(title, tlId));
    },
    [tlId],
  );
  let tasksForToDoLists = tasksObj;
  if (propFilter === 'completed') {
    tasksForToDoLists = tasksForToDoLists.filter((t) => t.isDone === true);
  }
  if (propFilter === 'active') {
    tasksForToDoLists = tasksForToDoLists.filter((t) => t.isDone === false);
  }
  return (
    <div className={'tasks-list'}>
      <h3>
        <EditableSpan taskTitle={propTitle} onChangeTitleHandler={onChangeTitleHandler} />
        <IconButton color={'primary'} size={'large'} aria-label="delete" onClick={onRemoveHandler}>
          <DeleteIcon />
        </IconButton>
      </h3>
      <AddFormItem addItem={addNewTask} />
      <ol key={tlId}>
        {tasksForToDoLists.map((task) => {
          return <Task task={task} id={tlId} key={tlId} />;
        })}
      </ol>
      <div>
        <Button variant={propFilter === 'all' ? 'contained' : 'text'} onClick={onAllClickHandler}>
          all
        </Button>
        <Button
          color={'primary'}
          variant={propFilter === 'active' ? 'contained' : 'text'}
          onClick={onActiveClickHandler}
        >
          Active
        </Button>
        <Button
          color={'secondary'}
          variant={propFilter === 'completed' ? 'contained' : 'outlined'}
          onClick={onCompletedClickHandler}
        >
          Completed
        </Button>
      </div>
    </div>
  );
});
