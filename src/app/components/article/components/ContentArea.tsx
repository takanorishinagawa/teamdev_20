// 投稿内容
import type { ContentAreaProps } from "./types";

const ContentArea = ({
  defaultContent,
  register,
  errors,
}: ContentAreaProps) => {
  return (
    <div className="flex w-full flex-col items-center gap-3">
      <textarea
        defaultValue={defaultContent}
        className="min-h-[300px] w-full max-w-[1200px] min-w-[600px] rounded-lg border-none bg-[#D9D9D9]/25 p-5 text-lg text-black"
        style={{ boxShadow: "2px 2px 10px 0 rgba(0, 0, 0, 0.25)" }}
        placeholder="投稿内容を入力してください。"
        {...register("content")}
      ></textarea>

      <div className="flex w-full items-start">
        {errors && (
          <p className="mt-1 px-4 text-sm text-red-500">{errors.message}</p>
        )}
      </div>
    </div>
  );
};

export default ContentArea;
