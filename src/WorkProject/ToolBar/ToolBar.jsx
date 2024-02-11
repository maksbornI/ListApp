import React, { memo, useState } from 'react';
import { AppBar, Button, IconButton,  Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Delete';
import * as XLSX from 'xlsx';
import { useDispatch } from 'react-redux';
import { setModelListTitleAC } from '../../ToDolist/State/modelList-reducer';


export const  ToolBarComp = memo(({setModel}) => {
    const dispatch = useDispatch();
  const fileRef = React.useRef(null);
  const handleClick = (e) => {

    fileRef.current.click();    // ADDED
  };
  const handleChange = (e) => {

    let files = e.target.files,
     
      f = files[0];
    let reader = new FileReader();
    reader.onload = function(e) {
      let data = e.target.result;
      let readedData = XLSX.read(data, { type: 'binary' });
      const wsName = readedData.SheetNames[0];
      const ws = readedData.Sheets[wsName];

      /* Convert array to json*/
      const dataParse = XLSX.utils.sheet_to_json(ws, { header: 1 });
      console.log(dataParse);
      const keys = dataParse[0];


      const arrayOfObjects = dataParse.map(innerArray => {
        const outputObject = {};
        keys.forEach((key, index) => {
          outputObject[key] = innerArray[index];
        });
        return outputObject;
      });
      dispatch(setModelListTitleAC(arrayOfObjects))
      console.log(arrayOfObjects);
    };
      reader.readAsBinaryString(f);

  };

  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton size='large' edge='start' color='inherit' aria-label='menu' sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          News
        </Typography>
        <Button color='inherit' onClick={handleClick}
        >Download</Button>
        <input
          type='file'
          onChange={handleChange}
          ref={fileRef}
          style={{ display: 'none' }}
        />
      </Toolbar>
    </AppBar>

  );

}

)