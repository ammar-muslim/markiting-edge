import React from 'react'
import Link from 'next/link'
import {Article} from '@/utils/types'

interface ArticleItemProps {
    article: Article

}
const ArticleItem = ({article}:ArticleItemProps) => {
  return (
    <article
    className="bg-white   rounded-2xl shadow-2xs hover:shadow-xl 
    transition-transform transform  overflow-hidden 
    flex flex-col justify-between space-y-4 p-6"
>
    <h2 className="text-2xl font-semibold text-gray-900 line-clamp-2">
        {article.title}
    </h2>
    <p className="text-gray-700 leading-relaxed line-clamp-3">
        {article.body}
    </p>
    <Link  className='text-white bg-emerald-600  p-2 transition-all  rounded-lg self-center  hover:bg-emerald-800' href={`/articles/${article.id}`}>read more</Link>
</article>  )
}
 
export default ArticleItem      