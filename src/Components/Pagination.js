import React from 'react'
import { Appcontext } from '../Context/Appcontext';
import { useContext } from 'react';

const Pagination = () => {
    const {page, handlerPageChange, totalPages}= useContext(Appcontext); 

  return (
    <div className='flex flex-col  align-items'>
         <div className='class="fixed bottom-0 inset-x-0 bg-white py-2 border-t-2  border-t-gray-300 w-full'>
      <div className='flex items-center gap-x-3 w-11/12 max-w-2xl mx-auto'>
        {
          page > 1 &&
          <button className='border-2 border-gray-300 py-1 px-4 rounded-md' onClick={() => handlerPageChange(page - 1)}>Previous</button>
        }
        {
          page < totalPages &&
          <button className='border-2 border-gray-300 py-1 px-4 rounded-md' onClick={() => handlerPageChange(page + 1)}>Next</button>
        }
        

        
      </div>
      <div> <p className='text-center'>page {page} of {totalPages}</p>
        </div>
    </div>
    </div>
  )
}

export default Pagination;