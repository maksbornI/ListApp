import React, { memo } from 'react';
import { Autocomplete, TextField } from '@mui/material';

export let ComboBox = memo(({ toDoLists }) => {
  const onChangeHandler = (e) => {
    console.log(e.currentTarget.id);
  };
  const onClickHandler = (e) => {
    console.log(e.target);
  };

  return (
    <Autocomplete
      onChange={onChangeHandler}
      id="combo-box-demo"
      options={toDoLists}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField onClick={onClickHandler} {...params} label="Model" />}
    />
  );
});
