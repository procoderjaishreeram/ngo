
import React from 'react'
import Image from 'next/image'
import jan from '@/app/assests/images.jpeg'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='hi  h-[60vh]  w-[100vw] absolute bgImageFixedBg bg-fixed bg-top bg-no-repeat bg-cover'>
      <div className=' grid grid-cols-3 px-[7rem] pt-[7rem] '>

        <div className='p-9'>
          <Image alt='hi' src={jan} width={300} height={300} className='w-[6rem] h-[6rem]'/>
          <h1 className='text-white pt-3  text-xl'>Building a sustainable future by empowering young minds.</h1>
          <h1 className='flex text-4xl text-[#f4b33af3] pt-3 gap-3'><FaFacebook /><FaInstagramSquare /></h1>
        </div>
        <div>
          <h1 className='text-2xl text-white font-serif font-bold pl-9'>Explore Us</h1>
          <div className='text-xl'>
            <h1 className='flex text-white pt-6 hover:translate-x-4 hover:transition-all hover:ease-in-out hover:delay-75 hover:text-black text-bold hover:text-bold'><MdKeyboardArrowRight />  <Link  href="/dashboard" >Donate</Link></h1>
            <h1 className='flex text-white pt-6 hover:translate-x-4 hover:transition-all hover:ease-in-out hover:delay-75 hover:text-black text-bold hover:text-bold'><MdKeyboardArrowRight />  <Link  href="/dashboard" >About Us</Link></h1>
            <h1 className='flex text-white pt-6 hover:translate-x-4 hover:transition-all hover:ease-in-out hover:delay-75 hover:text-black text-bold hover:text-bold'><MdKeyboardArrowRight />  <Link  href="/dashboard" >Contact Us</Link></h1>
            <h1 className='flex text-white pt-6 hover:translate-x-4 hover:transition-all hover:ease-in-out hover:delay-75 hover:text-black text-bold hover:text-bold'><MdKeyboardArrowRight />  <Link  href="/dashboard" >Gallery</Link></h1>
            <h1 className='flex text-white pt-6 hover:translate-x-4 hover:transition-all hover:ease-in-out hover:delay-75 hover:text-black text-bold hover:text-bold'><MdKeyboardArrowRight />  <Link  href="/dashboard" >FAQs</Link></h1>
          </div>
        </div>
        <div>
          <h1 className='text-3xl font-extrabold font-serif pl-9 text-white '>Contact info</h1>
          <div>
            <h1 className='flex text-white gap-5 text-xl pt-6'><div><h1 className='text-3xl pt-3'><MdOutlineLocationOn /></h1></div>Plot No. 23&24, Sector – 6, Pushp Vihar, New Delhi</h1>
            <h1 className='flex text-white gap-5 text-xl pt-6'><div><h1 className='text-3xl pl-1'><FaPhoneAlt /></h1></div>8845562352</h1>
            <h1 className='flex text-white gap-5 text-xl pt-6'><div><h1 className='text-3xl pl-1'><MdMailOutline /></h1></div>janprem@gmail.com</h1>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer