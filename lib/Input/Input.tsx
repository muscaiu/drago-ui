import React from 'react';
import { useFormContext, RegisterOptions } from 'react-hook-form';

export type InputProps = {
  name?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
  validation?: RegisterOptions;
};

const Label: React.FC<{
  label?: string;
  required?: boolean;
  htmlFor?: string;
}> = ({ label, required, htmlFor }) => {
  if (!label) return null;
  return (
    <label
      htmlFor={htmlFor}
      className="block ml-2 text-sm font-medium text-gray-900">
      {label}
      {required && <span className="text-red-500">*</span>}
    </label>
  );
};

const ErrorMessage: React.FC<{ message?: string }> = ({ message }) => {
  if (!message) return null;
  return <span className="text-red-500 text-xs pt-1 block">{message}</span>;
};

export const Input: React.FC<InputProps> = ({
  label,
  name,
  placeholder = '',
  required = false,
  type = 'text',
  validation = {},
  ...props
}) => {
  const formContext = useFormContext();
  const inputId = React.useId();

  if (!formContext || !name) {
    return (
      <div>
        {label && <Label label={label} required={required} htmlFor={inputId} />}
        <input
          id={inputId}
          type={type}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder={placeholder}
          required={required}
          {...props}
        />
      </div>
    );
  }

  const {
    register,
    formState: { errors },
  } = formContext;

  return (
    <div>
      {label && <Label label={label} required={required} htmlFor={inputId} />}
      <input
        id={inputId}
        type={type}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        required={required}
        {...register(name, validation)}
        {...props}
      />
      <ErrorMessage message={errors[name]?.message as string} />
    </div>
  );
};
