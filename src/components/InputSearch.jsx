import React from 'react'
import search from '../assets/search.svg'

function InputSearch() {
  return (
    <>
        <div className='flex relative'>
            <input  className='w-full h-[47px] rounded-lg outline-none border-2 border-[#000] text-[#555555] font-bold px-3 ' type="text" placeholder='Search' />
            <button className=' absolute right-0 border-2 border-[#000] bg-[#000] w-[47px] h-[47px] rounded-lg flex justify-center items-center'><img className=' w-7 h-7 block' src={search} alt="" /></button>
        </div>
    </>
  )
}

export default InputSearch