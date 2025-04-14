"use client"
import { useState } from 'react'
import { FiMessageSquare } from 'react-icons/fi'
import { toast } from 'react-toastify'

const AddCommentForm = () => {
  const [comment, setComment] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (comment === '') return toast.error('Comment is required')
    console.log({ comment })
    setComment('')
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <FiMessageSquare className="text-emerald-600" /> Add Comment
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="اكتب تعليقك..."
          rows={3}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
        <button
          type="submit"
          className="bg-emerald-600 cursor-pointer text-white py-2 px-4 rounded-md hover:bg-emerald-700 transition"
        >
          ارسال التعليق
        </button>
      </form>
    </div>
  )
}

export default AddCommentForm