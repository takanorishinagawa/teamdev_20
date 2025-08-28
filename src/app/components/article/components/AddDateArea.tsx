import type { FieldError, UseFormRegister } from "react-hook-form";

type AddDateAreaProps = {
  register: UseFormRegister<any>;
  errors?: FieldError;
};

const AddDateArea = ({ register, errors }: AddDateAreaProps) => {
  return (
    <div className="flex flex-col gap-3">
      <label htmlFor="add-date">Date Added</label>
      <input
        type="date"
        className="w-60 rounded-md border border-[#7777] p-3"
        {...register("saved_date")}
      ></input>
      {errors && (
        <p className="mt-1 px-4 text-sm text-red-500">{errors.message}</p>
      )}
    </div>
  );
};

export default AddDateArea;
