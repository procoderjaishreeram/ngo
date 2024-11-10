import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <>
    <div className='flex px-0 sm:px-[13vw]  w-[100vw] '>
         <div className='w-[40vw]'>
          
         <Image className=' object-fill w-[46vw] sm:w-[39vw] h-[35vh] sm:h-[66vh] ' src='https://santhigiriskillinstitute.com/assets/images/about_img.png' width={600} height={1000} alt='hi'/>
         </div>
         
         
         
         <div className='pl-7 sm:pl-20  h-fit '>
            <h1 className=' h-10 w-full text-[#729497] text-xl font-bold font-serif flex p-[3vh]'>About jan Prem Samiti</h1>

            <h1 className='text-[#729497] text-sm sm:text-3xl font-extrabold font-serif pt-10 '>NANMA SKILL DEVELOPMENT INITIATIVE</h1>

            <h1 className='w-[58vw] sm:w-[40vw]  text-sm sm:text-lg'>The Nanma Skill Programme offers unemployed youths the valuable opportunity to receive free Ayurveda Panchakarma training and secure assured job placements in reputed Ayurveda Hospitals throughout the country.
             More than 2000 young women & men were successfully provided free training and placements over the course of 14 batches.
             Reputed organizations such as Centre for Integrated Medicine & Research, AllMS New Delhi, All India Institute of Ayurveda, Sports Authority of India, AVN Arogya, and others offer placements to the participants of the program.
             The program has received donations in the form of CSR support from notable corporations, including Coal India Ltd, Adani Group, NTPC Ltd, ONGC Ltd, and several others.</h1>
        
             <h1 className='w-[58vw] sm:w-[40vw] font-mono text-sm sm:p-10 p-2 sm:text-lg'>&quot; Ignite Dreams, Eradicate Unemployment: Inspiring Hope through Nanma Skill Programme (Under Vision and Mission) &quot;</h1>
              <div className='w-full'>
              <Link  href="/dashboard" >
             <button className='justify-center items-center rounded-[10rem] text-black border  p-[1rem] transition-all ease-in-out delay-150 hover:-translate-y-3 hover:-translate-x-1 hover:shadow-[7px_7px_0px_#000000] bg-[#d59b2c] ' id='read'>Read More</button>
              </Link>
              </div>
         </div>



    </div>
    </>
  )
}

export default Hero


// background-color: white;
// color: black;
// border-radius: 10em;
// font-size: 17px;
// font-weight: 600;
// padding: 1em 2em;
// cursor: pointer;
// transition: all 0.3s ease-in-out;
// border: 1px solid black;
// box-shadow: 0 0 0 0 black;