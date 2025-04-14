import { CgMenuGridR } from "react-icons/cg";
import { FiFileText, FiMessageSquare, FiUsers } from "react-icons/fi";
import Link from "next/link";

const AdminSidebar = () => {
  return (
    <aside className="h-screen text-white p-3 md:p-5 w-16 md:w-64 transition-all duration-300">
      {/* Logo / Dashboard */}
      <Link href="/admin" className="flex flex-col md:flex-row gap-2 items-center mb-8">
        <CgMenuGridR className="text-2xl hover:text-emerald-400" />
        <h2 className="text-sm md:text-xl font-bold hidden md:block border-b border-gray-700 pb-1 hover:text-emerald-400">
          لوحة التحكم
        </h2>
      </Link>

      {/* Menu */}
      <ul className="space-y-4">
        <li className="hover:bg-emerald-700 transition p-2 rounded-md">
          <Link
            href="/admin/articles-table"
            className="flex flex-col md:flex-row items-center gap-2 hover:text-emerald-400 transition"
          >
            <FiFileText className="text-xl" />
            <span className="text-sm hidden md:inline">المقالات</span>
          </Link>
        </li>

        <li className="hover:bg-emerald-700 transition p-2 rounded-md">
          <Link
            href="/admin/comments-table"
            className="flex flex-col md:flex-row items-center gap-2 hover:text-emerald-400 transition"
          >
            <FiMessageSquare className="text-xl" />
            <span className="text-sm hidden md:inline">التعليقات</span>
          </Link>
        </li>

        <li className="hover:bg-emerald-700 transition p-2 rounded-md">
          <Link
            href="/admin/users-table"
            className="flex flex-col md:flex-row items-center gap-2 hover:text-emerald-400 transition"
          >
            <FiUsers className="text-xl" />
            <span className="text-sm hidden md:inline">المستخدمين</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default AdminSidebar;
