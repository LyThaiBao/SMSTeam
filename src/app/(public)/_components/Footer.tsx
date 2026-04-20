import { 
  MapPin, Phone, Mail, Printer, MailOpen, 
  LayoutGrid, BookOpen, HelpCircle, Briefcase, 
  Search, Info 
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-700 text-slate-400 py-12 px-6 mt-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        
  
        <ul className="space-y-4">
          <li className="text-xl font-bold text-white mb-2">Thông Tin Liên Hệ</li>
          <li className="flex items-center gap-3"><MapPin size={18} /> Khu 2, Đ. 3/2, Ninh Kiều, Cần Thơ</li>
          <li className="flex items-center gap-3"><Phone size={18} /> ĐT: 0123 456 789</li>
          <li className="flex items-center gap-3"><Printer size={18} /> Fax: 0987 654 321</li>
          <li className="flex items-center gap-3"><Mail size={18} /> abcd@gmail.com</li>
        </ul>

      
        <ul className="space-y-4">
          <li className="text-xl font-bold text-white mb-2">Dịch Vụ Tiện Ích</li>
          <li className="flex items-center gap-3 hover:text-blue-400 cursor-pointer"><MailOpen size={18} /> Thư điện tử</li>
          <li className="flex items-center gap-3 hover:text-blue-400 cursor-pointer"><LayoutGrid size={18} /> Hệ thống tích hợp</li>
          <li className="flex items-center gap-3 hover:text-blue-400 cursor-pointer"><BookOpen size={18} /> Văn bản</li>
          <li className="flex items-center gap-3 hover:text-blue-400 cursor-pointer"><HelpCircle size={18} /> Trợ giúp</li>
        </ul>

     
        <ul className="space-y-4">
          <li className="text-xl font-bold text-white mb-2">Công Khai</li>
          <li className="flex items-center gap-3 hover:text-blue-400 cursor-pointer"><Briefcase size={18} /> Tuyển dụng</li>
          <li className="flex items-center gap-3 hover:text-blue-400 cursor-pointer"><Search size={18} /> Tra cứu văn bằng</li>
          <li className="flex items-center gap-3 hover:text-blue-400 cursor-pointer"><Info size={18} /> Phục vụ cộng đồng</li>
        </ul>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-slate-800 text-center text-sm">
        © 2026 Hệ thống quản trị sinh viên. All rights reserved.
      </div>
    </footer>
  );
}