"use client"
  import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
 const SearchArticleInput = () => {
    const router = useRouter()
    const [searchText , setTextSearch] = useState('')
   
   const searchInputHandler = (e : React.FormEvent) => {
 e.preventDefault()
 console.log({ searchText })
 setTextSearch((e.target as HTMLInputElement).value)
 router.push(`/articles/search`)
   } 

    return (
     <div>
<form onSubmit={searchInputHandler} className='flex justify-center w-full mx-auto max-w-2xl my-8' role='search'>
          <input 
          type="search" 
          value={searchText}
          onChange={(e) => setTextSearch(e.target.value)}
          placeholder='ابحث عن مقال'
          className='w-1/2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500'
           />
        </form>
     </div>
   )
 }
 
 export default SearchArticleInput