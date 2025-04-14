'use client';

import React from 'react';

const ArticleSkeleton = () => {
  return (
    <div className="max-w-6xl fix-height mx-auto p-6 bg-white shadow-lg rounded-lg m-5">
      {/* Title Skeleton */}
      <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>

      {/* Date Skeleton */}
      <div className="flex items-center mb-4">
        <div className="h-4 w-4 bg-gray-200 rounded-full mr-2"></div>
        <div className="h-4 bg-gray-200 rounded w-24"></div>
      </div>

      {/* Content Skeleton */}
      <div className="space-y-3">
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        <div className="h-4 bg-gray-200 rounded w-4/6"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      </div>

      {/* Article ID Skeleton */}
      <div className="mt-6 flex justify-end">
        <div className="h-4 bg-gray-200 rounded w-16"></div>
      </div>

      {/* Comments Section Skeleton */}
      <div className="mt-8">
        <div className="h-6 bg-gray-200 rounded w-24 mb-4"></div>
        
        {/* Comment Skeleton */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-gray-200"></div>
              <div className="ml-3">
                <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-16"></div>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
          <div className="flex items-center space-x-4 mt-4">
            <div className="h-4 bg-gray-200 rounded w-8"></div>
            <div className="h-4 bg-gray-200 rounded w-8"></div>
            <div className="h-4 bg-gray-200 rounded w-8"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleSkeleton; 