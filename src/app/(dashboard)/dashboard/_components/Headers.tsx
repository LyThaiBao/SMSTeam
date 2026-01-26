export default function HeaderAdmin() {
  return (
    <div className="flex items-center">
      <span className="mr-4 cursor-pointer text-xl">
        <i className="fa-regular fa-bell"></i>
      </span>
      <button className="cursor-pointer px-4 py-2 bg-blue-500 rounded-2xl">
        Logout
      </button>
    </div>
  );
}
