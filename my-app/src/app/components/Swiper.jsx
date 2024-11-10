'use client'
import Image from 'next/image'
import React, { useCallback } from 'react'
import { useEffect } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
const Swiper = () => {
   
    const [emblaRef, emblaApi] = useEmblaCarousel({loop:true}, [Autoplay({delay: 2000})])
    

    const scrollPrev = useCallback(() => {
      if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])
  
    const scrollNext = useCallback(() => {
      if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    useEffect(() => {
        if (emblaApi) {
          console.log(emblaApi.slideNodes()) // Access API
        }
      }, [emblaApi])
    
  return (
    <div className='embela h-[37vh] sm:h-[85vh] '>
    <div className="embla__viewport border absolute border-black h-[37vh] sm:h-[85vh] w-[100vw]" ref={emblaRef}>
    <div className="embla__container">
      <div className="embla__slide justify-center items-center "><Image className='w-[100vw] h-max  object-fill' alt='slide1' src={'https://santhigiriskillinstitute.com/assets/images/slider/1.jpg'} width={1200} height={100}/></div>
      <div className="embla__slide  justify-center items-center"><Image className='w-[100vw] h-max  object-fill' alt='slide1' src={'https://santhigiriskillinstitute.com/assets/images/slider/2.jpg'} width={1200} height={100}/></div>
      <div className="embla__slide  justify-center items-center"><Image className='w-[100vw] h-max object-fill' src={'https://santhigiriskillinstitute.com/assets/images/slider/3.jpg'} alt='slider3' width={1200} height={100}/></div>
    </div>
    </div>
    <div className='justify-between w-[100vw]  flex pt-[15vh] sm:pt-[50vh]  items-center     '>
      <div>
    <button className="embla__prev relative pl-6 text-xl sm:text-4xl text-white font-bold" onClick={scrollPrev}>
    <FaArrowLeftLong />
      </button>
      </div>
      <div>
      <button className="embla__next relative text-xl sm:text-4xl pr-4 text-white font-bold" onClick={scrollNext}>
      <FaArrowRight />
      </button>
      </div>
  </div>
  </div>
  )
}

export default Swiper