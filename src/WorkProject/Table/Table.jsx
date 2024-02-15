import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch } from 'react-redux';
import { memo, useCallback } from 'react';
import { changeStatusAC } from '../State/modelList-reducer';

const columns = [
  { field: 'id', headerName: 'N', width: 90 },
  {
    field: 'PODZESPÓŁ',
    headerName: 'PODZESPÓŁ',
    width: 150,
    editable: true,
  },
  {
    field: 'NAZWA',
    headerName: 'NAZWA',
    width: 150,
    editable: true,
  },
  {
    field: 'DŁ',
    headerName: 'DŁ',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'SZER',
    headerName: 'SZER',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'GR',
    headerName: 'GR',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'SZT',
    headerName: 'SZT',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'MATERIAŁ',
    headerName: 'MATERIAŁ',
    width: 160,
  },
  { field: 'UWAGI', headerName: 'UWAGI', width: 90 },
];

export let Table = memo(({ modelList }) => {
  const dispatch = useDispatch();
  const onChangeHandler = useCallback((e) => {
    console.log(e);
    debugger;
    dispatch(changeStatusAC(e.id, e.row.isDone));
  }, []);
  debugger;
  return (
    <Box sx={{ height: '100%', width: '100%' }}>
      <DataGrid
        rows={modelList}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 40,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        onCellClick={onChangeHandler}
      />
    </Box>
  );
});
