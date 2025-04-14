import { FaSearch } from 'react-icons/fa';
import Link from 'next/link';

async function searchArticles(query: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/articles/search?q=${encodeURIComponent(query)}`);
  if (!response.ok) {
    throw new Error('Failed to fetch articles');
  }
  return response.json();
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { q: string };
}) {
  const query = searchParams.q || '';
  const articles = query ? await searchArticles(query) : [];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">نتائج البحث</h1>
          <p className="text-xl text-gray-600">
            {query ? `نتائج البحث عن: "${query}"` : 'أدخل كلمة البحث للبدء'}
          </p>
        </div>

        {articles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article: any) => (
              <div
                key={article.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.body}
                  </p>
                  <Link
                    href={`/articles/${article.id}`}
                    className="text-emerald-600 hover:text-emerald-700 font-medium inline-flex items-center"
                  >
                    اقرأ المزيد
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : query ? (
          <div className="text-center py-12">
            <FaSearch className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-lg font-medium text-gray-900">
              لا توجد نتائج
            </h3>
            <p className="mt-1 text-gray-500">
              لم نتمكن من العثور على مقالات تتطابق مع بحثك.
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
} 