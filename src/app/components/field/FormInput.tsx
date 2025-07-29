import React from "react";

type FormInputProps = {
  label: string;
  placeholder?: string;
};

const FormInput = ({ label, placeholder }: FormInputProps) => {
  return (
    <div>
      <label htmlFor={label} className="pl-3 text-xl font-bold">
        {label}
      </label>
      <input
        id={label}
        name={label}
        type={label}
        className="mt-3 mb-5 w-full rounded-xl bg-gray-100 py-3 pl-3 text-xl shadow-md focus:border-blue-500 focus:ring-2 focus:ring-blue-300 focus:outline-none"
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormInput;
