import Link from "next/link";

export default function NotFoundPage() {
  return (
    <section className="flex fix-height justify-center items-center flex-col bg-gray-50">
      <div className="text-center p-8 rounded-lg shadow-lg">
        <h1 className="text-8xl font-bold text-emerald-600 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">الصفحة غير موجودة</p>
        <Link 
          href="/" 
          className="inline-block px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition duration-300"
        >
          اذهب للصفحة الرئيسية
        </Link>
      </div>
    </section>
  );
}
