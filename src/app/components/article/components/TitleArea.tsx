import type { TitleAreaProps } from "./types";

// タイトル用

const TitleArea = ({ defaultTitle, register, errors }: TitleAreaProps) => {
  return (
    <div className="flex w-full flex-col items-center gap-3">
      {/* タイトル */}
      <input
        type="text"
        defaultValue={defaultTitle}
        className="w-full max-w-[1100px] min-w-[600px] text-3xl font-semibold"
        placeholder="Title"
        {...register("title")}
      />
      <div className="flex w-full items-start">
        {errors && (
          <p className="mt-1 px-4 text-sm text-red-500">{errors.message}</p>
        )}
      </div>
    </div>
  );
};

export default TitleArea;
