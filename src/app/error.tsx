"use client";

import Link from 'next/link'

type ErrorProps = {
    error : Error,
    reset : () => void
}

const error = ({error , reset} : ErrorProps ) => {
  return (
      <div className="text-center fix-height m-20 text-red-600  p-10 rounded-lg">
        <h1 className='text-5xl m-3'>something went wrong</h1>
        <p className='text-xl m-3'>Error : {error.message}</p>
      
        <p onClick={() => reset()} className= "m-auto self-center cursor-pointer my-10 bg-blue-500 text-white p-2 max-w-xs rounded-full">try again</p>
        <Link href="/" className="text-blue-500  " >Go to Home Page</Link>
    </div>
  )
}

export default error