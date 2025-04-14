import AddCommentForm from '@/app/components/comments/AddCommentForm';
import CommentsSection from '@/app/components/comments/CommentsSection';
import ArticleSkeleton from '@/app/components/articles/ArticleSkeleton';
import React from 'react';
import { BsCalendar } from 'react-icons/bs';

interface SingleArticlePageProps {
  params: { id: string };
}

const SingleArticlePage = async ({ params }: SingleArticlePageProps) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const article = await res.json();

  return (
    <div className="max-w-6xl fix-height mx-auto p-6 bg-white shadow-lg rounded-lg m-5">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{article.title}</h1>

      <div className="flex items-center text-gray-500 text-sm mb-4">
        <BsCalendar className="mr-2 text-emerald-600" />
        <p className="italic">10 / 2 / 2023</p>
      </div>

      <p className="text-lg text-gray-700 leading-relaxed">{article.body}</p>

      <div className="mt-6 text-right text-gray-500 text-sm">
        <span className="font-semibold">المقال رقم :</span> {article.id}
      </div>

      <CommentsSection />
      <AddCommentForm />
    </div>
  );
};

export default SingleArticlePage;
