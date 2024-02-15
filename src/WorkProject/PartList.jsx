import { Checkbox } from '@mui/material';
import { useDispatch } from 'react-redux';
import { memo, useCallback } from 'react';
import { changeStatusAC } from './State/modelList-reducer';

export const PartList = memo(({ id, isDone, key, el }) => {
  const dispatch = useDispatch();

  const onChangeHandler = useCallback((e) => {
    dispatch(changeStatusAC(id, e.currentTarget.checked));
  }, []);

  return (
    <tr key={key}>
      <td>{el.PODZESPÓŁ}</td>
      <td>{el.NAZWA}</td>
      <td>{el.DŁ}</td>
      <Checkbox checked={isDone} onChange={onChangeHandler} />
    </tr>
  );
});
