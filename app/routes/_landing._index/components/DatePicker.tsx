// components/SimpleDatePicker.jsx
import React from 'react';

const DatePicker = ({
  id = 'date-picker',
  label = 'เลือกวันที่',
  value,
  onChange,
  className = '',
}) => {
  return (
    <div className={`max-w-sm mx-auto p-4 ${className}`}>
      <label htmlFor={id} className="block mb-1 font-medium">
        {label}
      </label>
      <input
        id={id}
        type="date"
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full border rounded px-2 py-1"
      />
      {value && (
        <p className="mt-2">
          วันที่เลือก: <strong>{value}</strong>
        </p>
      )}
    </div>
  );
};

export default DatePicker;
