'use client';

import React from 'react';
import { FaUser, FaThumbsUp, FaThumbsDown, FaReply } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';

const CommentItem = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
      {/* رأس التعليق */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
            <FaUser className="text-gray-500" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">محمد السحيتي</h4>
            <p className="text-sm text-gray-500">قبل ساعتين</p>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <BsThreeDotsVertical />
        </button>
      </div>

      {/* محتوى التعليق */}
      <p className="text-gray-700 mb-4">
        مقال رائع! وجدته مفيداً جداً ومكتوب بشكل جيد. كانت الأمثلة المقدمة مفيدة بشكل خاص في فهم المفاهيم.
      </p>

      {/* أزرار التفاعل */}
      <div className="flex items-center space-x-4 text-gray-500">
        <button className="flex cursor-pointer items-center space-x-1 hover:text-emerald-600">
          <FaThumbsUp />
          <span>12</span>
        </button>
        <button className="flex cursor-pointer items-center space-x-1 hover:text-red-600">
          <FaThumbsDown />
          <span>2</span>
        </button>
        <button className="flex cursor-pointer items-center space-x-1 hover:text-blue-600">
          <FaReply />
          <span>رد</span>
        </button>
      </div>
    </div>
  );
};

export default CommentItem;