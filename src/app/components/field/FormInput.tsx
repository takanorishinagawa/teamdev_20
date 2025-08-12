export type FormInputProps = {
  label: string;
  placeholder?: string;
  type: "text" | "email" | "password";
};

const FormInput = ({ label, placeholder, type }: FormInputProps) => {
  return (
    <div>
      <label htmlFor={label} className="pl-3 text-xl font-bold">
        {label}
      </label>
      <input
        id={label}
        name={label}
        type={type}
        className="w-full rounded-xl bg-gray-100 py-3 pl-3 text-xl shadow-md focus:border-blue-500 focus:ring-2 focus:ring-blue-300 focus:outline-none"
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormInput;
