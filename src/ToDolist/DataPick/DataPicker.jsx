import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePickerStyles.css';

export const DataPick = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div className="date-picker-container">
      <DatePicker
        className="custom-datepicker"
        id="datePicker"
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd/MM/yyyy" // Формат отображения даты
        placeholderText="Выберите дату"
        minDate={new Date()}
        isClearable
      />
    </div>
  );
};
