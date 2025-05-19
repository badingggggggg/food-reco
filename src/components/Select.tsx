import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface SelectProps {
  label: string;
  errorMessage?: string | number | boolean;
  register?: UseFormRegisterReturn;
  disabled?: boolean;
  options?: string[];
}

const Select: React.FC<SelectProps> = ({
  label,
  errorMessage,
  register,
  disabled = false,
  options = [],
}) => (
  <div className="col-12">
    <div className="form-floating mb-3">
      <select
        id={register?.name}
        {...(register ? register : {})}
        disabled={disabled}
        className="form-select"
      >
        <option value="" disabled>
          Select {label}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <label htmlFor={register?.name}>{label}</label>
    </div>
    {errorMessage && <div className="text-danger">{errorMessage}</div>}
  </div>
);

export default Select;
