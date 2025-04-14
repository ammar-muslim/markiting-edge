const pages = [1, 2, 3, 4, 5]

const Pagination = () => {
  return (
    <div className="flex justify-center items-center gap-2 my-8">
          <div  className="cursor-pointer m-1 bg-emerald-500 text-white py-2 px-4 rounded-lg hover:bg-emerald-700 transition">
       السابق
      </div>
<div className="flex gap-2">
  {pages.map((page) => (
    <div key={page} className="cursor-pointer bg-emerald-600 text-white py-2 px-4 rounded-lg hover:bg-emerald-700 transition">
      {page}    
      </div>
  ))}

</div>
<div  className="cursor-pointer m-1 bg-emerald-500 text-white py-2 px-4 rounded-lg hover:bg-emerald-700 transition">
          التالي
      </div>
    </div>
  )
}

export default Pagination
