import { memo, useState } from 'react';

export let EditableSpan = memo(({ taskTitle, onChangeTitleHandler }) => {

  let [editMode, setEditMode] = useState(false);
  let [title, setTitle] = useState('');
  let activateEditMode = () => {
    setEditMode(true);
    setTitle(taskTitle);
  };
  let activateViewMode = () => {
    setEditMode(false);
    onChangeTitleHandler(title);
    setTitle(taskTitle);
  };
  let EditOnChangeTitleHandler = (e) => setTitle(e.currentTarget.value);
  return editMode ? (
    <input onBlur={activateViewMode} value={title} onChange={EditOnChangeTitleHandler} autoFocus />
  ) : (
    <span onDoubleClick={activateEditMode}>{taskTitle}</span>
  );
});
