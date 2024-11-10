'use client'
import React from 'react'
import Image from 'next/image'
import assests from '@/app/assests/premium_photo-1701710544008-47e27d45c6f1.avif'
import assestss from '@/app/assests/form_bg_img (1).jpg'
import Loginpage from '@/app/components/Loginpage'
const Vission = () => {
  return (
    <div className='w-[100vw] h-[109vh] relative overflow-clip mt-[10vh] '>
       <div className='absolute -z-10 w-full '>
           <Image src={assests} alt='hi' width={1000} height={1000} className='w-full'/>
       </div>


     
       <div>
       <div className=' h-[100vh] w-[100vw]  text-white font-mono font-semibold text-2xl   flex '>
          <div className='w-[30vw] ml-[10vw]'>
            <h1 className='pt-[10vh] w-[30vw]'>
              Vissions and Missions
            </h1>
            <h1 className='font-extrabold text-4xl font-serif text-white w-[30vw] pt-[2vh] pb-[3vh]'>
            Your Support Creates Pathways of Hope: Donate to jan prem samiti
            </h1>
           <div className='relative w-[30vw] h-[40vh] '>
            <h1 className='w-[30vw] h-[42vh] text-black font-sans bg-[#767373] absolute opacity-35 p-[3vh] text-xl rounded-xl'>
            </h1>
            <h1 className='font-sans p-[3vw]  w-[30vw] h-[40vh] absolute text-sm'>
          The jan prem samiti Skill Programme is rooted in the profound vision of Navajyothi Sree Karunakara Guru,
           the revered
             founder of Santhigiri Ashram. Guru says that the transformation of one individual can shape the destiny of 
             a family, the transformation of one family can serve as an exemplary force for change within a community. 
             Transformed communities inspire societal progress. Ultimately, it is through the 
            transformation of societies that we can ignite a powerful change that shapes the destiny of our nation.
          </h1>
          </div>

         
          </div>
            <div className='h-[100vh] w-[30vw] px-[7vw] py-[5vw]'>
            <div className='h-[70vh]  w-[20vw] '>
               <Image src={assestss} alt='hi'width={600} height={300} />
            </div>
            </div>

           <div className='w-[30vw] flex items-center  justify-center '>
            <Loginpage/>
          </div>



       </div>

          

        </div>


    </div>
  )
}

export default Vission