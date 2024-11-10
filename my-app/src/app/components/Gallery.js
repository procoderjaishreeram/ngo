'use client'
import React from 'react'

import Image from 'next/image'
import assests1 from '@/app/assests/download (1).jpeg'
import assests3 from '@/app/assests/download (3).jpeg'
import assests4 from '@/app/assests/download (4).jpeg'
import assests5 from '@/app/assests/download (5).jpeg'

const Gallery = () => {
  return (<>
    <div className='w-[100vw] h-[100vh] pl-[20vh] mt-[20vh] '>
        <h1 className='text-2xl font-semibold text-[#5f817f]'>Gallery</h1>
        <h1 className='text-4xl font-serif pt-[2vh] font-bold text-[#d59b2d]'>Projects  we have done</h1>
        <div className=''>
        <div className='w-[full]    grid grid-cols-3 gap-0 pt-[4vh]'>
             
                        
        <div className="card w-fit ">
  <Image alt='hi' src={assests1} width={300} height={300}/>
  <div className="card__content">
    <p className="card__title">Card Title</p>
    <p className="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
  </div>
</div>


<div className="card w-fit">
  <Image alt='hi' src={assests1} width={300} height={300}/>
  <div className="card__content">
    <p className="card__title">Card Title</p>
    <p className="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
  </div>
</div>



           




            <div className="card w-fit">
  <Image alt='hi' src={assests3} width={300} height={300}/>
  <div className="card__content">
    <p className="card__title">Card Title</p>
    <p className="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
  </div>
</div>



        </div>
       


        <div className='w-[full]  object-fill   grid grid-cols-3 gap-0 pt-[4vh]'>
             
                        
             <div className="card w-fit  object-contain">
       <Image alt='hi' src={assests4} width={300} height={300}/>
       <div className="card__content">
         <p className="card__title">Card Title</p>
         <p className="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
       </div>
     </div>
     
     
     <div className="card w-fit">
       <Image alt='hi' src={assests5} width={300} height={300} />
       <div className="card__content overflow-hidden">
         <p className="card__title ">Card Title</p>
         <p className="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
       </div>
     </div>
     
     
     
                
     
     
     
     
                 <div className="card w-fit">
       <Image alt='hi' src={assests1} width={300} height={300}/>
       <div className="card__content">
         <p className="card__title">Card Title</p>
         <p className="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
       </div>
     </div>
     
     
     
             </div>
        

        </div>


       
          


    </div>


</>
  )
}

export default Gallery