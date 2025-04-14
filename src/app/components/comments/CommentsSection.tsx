'use client';

import React from 'react';
import CommentItem from './CommentItem';

const CommentsSection = () => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">التعليقات</h2>
      <CommentItem />
    </div>
  );
};

export default CommentsSection; 