import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps {
  label: string;
  type?: string;
  errorMessage?: string | number | boolean;
  register?: UseFormRegisterReturn;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  type = 'text',
  errorMessage,
  register,
  disabled = false,
}) => {
  const hasError = Boolean(errorMessage);

  return (
    <div className="col-12">
      <div className="form-floating mb-3">
        <input
          type={type}
          className={`form-control ${hasError ? 'is-invalid' : ''}`}
          id={register?.name}
          placeholder={label}
          {...(register ? register : {})}
          disabled={disabled}
        />
        <label htmlFor={register?.name}>{label}</label>
        {hasError && (
          <div className="invalid-feedback d-block">{errorMessage}</div>
        )}
      </div>
    </div>
  );
};

export default Input;
