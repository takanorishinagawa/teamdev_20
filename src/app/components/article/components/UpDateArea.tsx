// 投稿日
import type { AddDateAreaProps } from "./types";

const UpDateArea = ({ register, errors }: AddDateAreaProps) => {
  return (
    <div className="flex flex-col gap-3">
      <label htmlFor="add-date">Date Updated</label>
      <input
        type="date"
        className="w-60 rounded-md border border-[#7777] p-3"
        {...register("updated_at")}
      ></input>
      {errors && (
        <p className="mt-1 px-4 text-sm text-red-500">{errors.message}</p>
      )}
    </div>
  );
};

export default UpDateArea;
