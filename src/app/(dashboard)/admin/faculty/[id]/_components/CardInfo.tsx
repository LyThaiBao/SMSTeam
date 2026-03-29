export default function CardInfo() {
  return (
    <section className="border border-blue-100 bg-[#185FA5] py-8 rounded-2xl my-1 ">
      <div className="flex flex-wrap gap-5 justify-between px-2">
        <div className="font-bold">
          <span className="text-xl block ">Tổng Thành Viên</span>
          <span className="text-center inline-block w-full text-2xl">30</span>
        </div>
        <div className="flex justify-between gap-4 font-bold ">
          <div className=" flex gap-3 rounded-2xl items-center px-1 bg-blue-500 border  border-blue-100 ">
            <span className="block">14</span>
            <span>Giảng Viên</span>
          </div>
          <div className=" flex gap-3 rounded-2xl items-center px-1 bg-blue-500 border  border-blue-100 ">
            <span className="block">16</span>
            <span>Học Viên</span>
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
}
