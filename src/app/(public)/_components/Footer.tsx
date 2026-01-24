export default function Footer() {
  return (
    <footer className="text-black grid gap-3 my-4 py-3 px-1 bg-blue-300 md:grid-cols-2 lg:grid-cols-3">
      <ul className="first-line:text-2xl first-line:font-medium">
        <li>Thông Tin Liên Hệ</li>
        <li>
          <i className="fa-solid fa-location-dot"></i>
          Khu 2, Đ. 3/2, P. Ninh Kiều, TP. Cần Thơ
        </li>
        <li>
          <i className="fa-solid fa-phone"></i>ĐT: 0123456789
        </li>
        <li>
          <i className="fa-solid fa-fax"></i>Fax:0987654321
        </li>
        <li>
          <i className="fa-solid fa-reply"></i>abcd@gmail.com
        </li>
      </ul>
      <ul className="first-line:text-2xl first-line:font-medium">
        <li>Dịch Vụ Tiện Ích</li>
        <li>
          <i className="fa-solid fa-at"></i> Thư điện tử
        </li>
        <li> Hệ thống tích hợp</li>
        <li>
          <i className="fa-solid fa-book"></i> Văn bản
        </li>
        <li>
          {" "}
          <i className="fa-regular fa-comment"></i>Trợ giúp
        </li>
      </ul>
      <ul className="first-line:text-2xl first-line:font-medium">
        <li>Công Khai</li>
        <li>
          <i className="fa-solid fa-person-walking"></i> Tuyển dụng
        </li>
        <li>
          <i className="fa-solid fa-magnifying-glass"></i> Tra cứu văn bằng
        </li>
        <li>
          <i className="fa-solid fa-circle-info"></i> Phục vụ cộng đồng
        </li>
      </ul>
    </footer>
  );
}
