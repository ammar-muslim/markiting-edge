import { CgMenuGridR } from "react-icons/cg";
import AddArticleForm from "./AddArticleForm"; // تأكد من المسار

const AdminPage = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="mb-6 text-center">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 text-emerald-600 text-3xl sm:text-4xl font-bold">
          <CgMenuGridR className="text-4xl sm:text-5xl" />
          <span>لوحة التحكم</span>
        </div>
      </div>

      {/* Article Form Section */}
      <section className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8 w-full max-w-4xl mx-auto">
        <AddArticleForm />
      </section>
    </div>
  );
};

export default AdminPage;
