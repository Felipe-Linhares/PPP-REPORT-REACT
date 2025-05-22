// src/components/FormDatePicker.tsx
import React from "react";
import DatePicker from "react-datepicker"; // Needs to be imported here
import "react-datepicker/dist/react-datepicker.css"; // Optional: import here if only this component uses it, otherwise keep in index.css

interface FormDatePickerProps {
  id: string;
  label: string;
  selectedDate: Date;
  onChange: (date: Date | null) => void;
  dateFormat: string;
  className?: string;
  wrapperClassName?: string;
}

const FormDatePicker: React.FC<FormDatePickerProps> = ({
  id,
  label,
  selectedDate,
  onChange,
  dateFormat,
  className,
  wrapperClassName,
}) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <DatePicker
        id={id}
        selected={selectedDate}
        onChange={onChange}
        dateFormat={dateFormat}
        className={className}
        wrapperClassName={wrapperClassName}
      />
    </div>
  );
};

export default FormDatePicker;
