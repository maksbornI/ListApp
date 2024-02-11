import { memo, useCallback } from 'react';
import { changeTaskStatusAC, changeTaskTitleAC, removeTaskAC } from './State/tasks-reducer';
import s from './toDoLIst.module.css';
import { Checkbox, IconButton } from '@mui/material';
import { EditableSpan } from './EditableSpan';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';

export const Task = memo(({ task,id }) => {
  const dispatch = useDispatch();
  const onRemoveHandler = useCallback(() => {
    dispatch(removeTaskAC(task.id, id));
  }, [task.id, id]);

  const onChangeHandler = useCallback(
    (e) => {
      dispatch(changeTaskStatusAC(task.id, e.currentTarget.checked, id));
    },
    [task.id],
  );
  const onChangeTitleHandler = useCallback(
    (title) => {
      dispatch(changeTaskTitleAC(task.id, title, id));
    },
    [task.id, id],
  );

  return (
    <li key={task.id} className={task.isDone ? s.is_done : ''}>
      <Checkbox checked={task.isDone} onChange={onChangeHandler} />
      <EditableSpan taskTitle={task.title} onChangeTitleHandler={onChangeTitleHandler} />

      <IconButton color='primary' size={'large'} aria-label='delete' onClick={onRemoveHandler}>
        <DeleteIcon />
      </IconButton>
    </li>
  );
});
