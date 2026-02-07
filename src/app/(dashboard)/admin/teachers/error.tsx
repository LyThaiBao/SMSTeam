"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.log(error);
  return (
    <div className="p-4">
      <h2 className="text-red-500 font-bold">Lỗi tải giảng viên</h2>
      <p>{error.message}</p>
      <button onClick={reset}>Thử lại</button>
    </div>
  );
}
