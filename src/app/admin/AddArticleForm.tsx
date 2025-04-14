"use client"
import React, { useState } from 'react';
import {toast} from 'react-toastify'
import { FiEdit2, FiFileText, FiSave } from 'react-icons/fi';

const AddArticleForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title ==="" ) return toast.error("title is required");
    if (content ==="" ) return toast.error("content is required");
     console.log({ title, content });

};

  return (
    <div className="bg-white p-2 rounded-lg shadow-md max-w-xl mx-auto mt-5">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
        <FiEdit2 className="text-emerald-600" /> إضافة مقال جديد
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-gray-700 font-medium mb-1 flex items-center gap-1">
            <FiFileText className="text-gray-500" /> عنوان المقال
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1 flex items-center gap-1">
            <FiEdit2 className="text-gray-500" /> محتوى المقال
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            rows={6}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="flex items-center gap-2 bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-700 transition"
        >
          <FiSave className="text-lg cursor-pointer " /> إضافة المقال
        </button>
      </form>
    </div>
  );
};

export default AddArticleForm;
