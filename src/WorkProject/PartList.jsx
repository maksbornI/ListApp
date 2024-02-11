import { Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { addTaskAC } from '../ToDolist/State/tasks-reducer';
import { EditableSpan } from '../ToDolist/EditableSpan';


export const PartList = memo(({ propTitle, tlId, changeFilter, propFilter, removeToDoList, changeToDoListTitle }) => {
  const tasksObj = useSelector((state) => state.tasksObj[tlId]);
  const dispatch = useDispatch();

  const onAllClickHandler = useCallback(() => {
    changeFilter('all', tlId);
  }, [changeFilter, tlId]);
  const onActiveClickHandler = useCallback(() => {
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
        <IconButton color={'primary'} size={'large'} aria-label='delete' onClick={onRemoveHandler}>
          <DeleteIcon />
        </IconButton>
        <Button
          color={'secondary'}
          variant={propFilter === 'completed' ? 'contained' : 'outlined'}
          onClick={onCompletedClickHandler}
        >
          Completed
        </Button>
      </h3>


    </div>
  );
});
