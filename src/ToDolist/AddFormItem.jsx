import { useState } from 'react';

import { TextField } from '@mui/material';

import { AddCircle, AddCircleTwoTone } from '@mui/icons-material';

export const AddFormItem = (props) => {
  let [newTaskTitle, setNewTaskTitle] = useState('');
  let [warning, setWarning] = useState('');
  const onNewTitleHandler = (e) => {
    setNewTaskTitle(e.currentTarget.value);
    setWarning('');
  };
  const onKeyPressHandler = (e) => {
    if (e.code === 'Enter') {
      addTask();
    }
  };
  const addTask = () => {
    if (newTaskTitle.trim() !== '') {
      props.addItem(newTaskTitle.trim());
      setNewTaskTitle('');
    } else {
      setWarning('Введите задачу');
    }
  };
  return (
    <div>
      <TextField
        value={newTaskTitle}
        variant={'outlined'}
        label={'add task'}
        onChange={onNewTitleHandler}
        onKeyDown={onKeyPressHandler}
        error={!!warning}
        helperText={warning}
      />

      <AddCircleTwoTone style={{ padding: '10px', color: 'blue' }} label="bottom" fontSize="large" onClick={addTask}>
        <AddCircle />
      </AddCircleTwoTone>
    </div>
  );
};
