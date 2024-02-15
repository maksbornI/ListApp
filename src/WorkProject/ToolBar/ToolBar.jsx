import React, { memo } from 'react';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Delete';

import { useDispatch } from 'react-redux';
import { setModelListTitleAC } from '../State/modelList-reducer';

export const ToolBarComp = memo(({ setModel }) => {
  const dispatch = useDispatch();
  const fileRef = React.useRef(null);
  const handleClick = () => {
    fileRef.current.click(); // ADDED
  };

  const handleChange = (e) => {
    let files = e.target.files,
      f = files[0];
    let reader = new FileReader();
    reader.onload = function (e) {
      let data = e.target.result;

      dispatch(setModelListTitleAC(data));
    };
    reader.readAsBinaryString(f);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News
        </Typography>
        <Button color="inherit" onClick={handleClick}>
          Upload
        </Button>
        <input type="file" onChange={handleChange} ref={fileRef} style={{ display: 'none' }} />
      </Toolbar>
    </AppBar>
  );
});
