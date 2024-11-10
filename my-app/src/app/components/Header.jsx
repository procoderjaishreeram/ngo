import React from 'react'
import Image from 'next/image'
import assests from "@/app/assests/images.jpeg"
import { FcDonate } from "react-icons/fc";
const header = () => {
  return (
    <div className= ' h-[25vh] py-5 px-5 md:px-12 lg:px-18 ]'>
      <div className='flex justify-between items-center'>
       <Image src={assests} alt='hii' width={100}  className='w-[80px]  sm:w-auto'/>

        <div className='grid grid-cols-4 w-[32vw]'>
          <h1 className='text-black font-serif text-2xl '>Home</h1>
          <h1 className='text-black font-serif text-2xl '>About Us</h1>
          <h1 className='text-black font-serif text-2xl '>Contact Us</h1>
          <h1 className='text-black font-serif text-2xl pl-7'>Gallery</h1>
        </div>
       <button className='flex items-center gap-2 font-medium px-3 py-1 sm:py-3 sm:px-6 border border-solid border-black shadow-[7px_7px_0px_#000000] '>
        <div ><FcDonate/></div>
        <h1 className='pb-1'>Donate</h1>
       </button>

      

       </div>
      </div>
  )
}

export default header