import React from 'react';

export type InputProps = {
  id: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
};

export const Input: React.FC<InputProps> = ({
  id,
  label,
  placeholder = '',
  required = false,
  type = 'text',
}) => {
  return (
    <div>
      {label && (
        <>
          <label
            htmlFor={id}
            className="block mb-2 text-sm font-medium text-gray-900 ">
            {label}
            {required && <span className="text-red-500">*</span>}
          </label>
        </>
      )}
      <input
        type={type}
        id={id}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};
