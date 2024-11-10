'use client'
import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import Image from 'next/image';
import assest from '@/app/assests/download (2).jpeg'
const Review = () => {
    
  return (
    <>
    <section className='pb-[15vh]'>
    <main>
      <div className='pt-[4rem] pl-[8rem]'>
        <h1 className='text-2xl text-[#517f80]'>Our Testimonials</h1>
        <h1 className='pt-[2rem] text-5xl text-[#d3993c] font-serif font-extrabold'>What People Say</h1>
      </div>
    </main>
    <div className='px-[8rem] h-[80vh] pt-[4rem]'>
    <Swiper
    
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    spaceBetween={50}
    slidesPerView={2}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    modules={[Autoplay, Pagination, Navigation]}
    className="mySwiper"
    
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >
    
    <SwiperSlide className='bg-[#ebf2fa] w-[15vh] h-[90vh] rounded-2xl  p-[2rem]'>
      <h1 className='text-8xl   w-fit h-[7vh] font-serif text-white '>
      &quot;
      </h1>

      <h1 className='pt-[1rem]'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur consequuntur ipsum itaque aspernatur, hic magni eum. Aut magnam exercitationem fugit, deleniti iste culpa sunt est quaerat! Inventore numquam quis fugiat?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci quas quo, impedit qui officiis accusamus doloribus eligendi dolores sunt porro omnis totam alias, libero possimus illum earum tenetur aut incidunt.
        
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit autem quibusdam nulla, perferendis, saepe cum deleniti praesentium dicta maiores velit sint natus? Accusantium voluptates sunt aspernatur quidem repellendus aut nemo!
      </h1>
      <div className=' flex gap-[5vw]'>
      <h1 className='pl-[1rem] pt-8'>
        <Image src={assest} alt='hi' width={300} height={300} className='w-[10vw] h-[10vw]  border-white border-[6px] '/>
      </h1>
      <div className=''>
      <h1 className='text-xl font-extrabold text-[#3a3945] pt-[5vw]'>
        Ujjwal Pratap singh
      </h1>
      <h1 className='pt-4 text-[#5b868a] '>prayagraj</h1>
      </div>
      </div>
    </SwiperSlide>



    <SwiperSlide className='bg-[#ebf2fa] w-[15vh] h-[90vh] rounded-2xl  p-[2rem]'>
      <h1 className='text-8xl   w-fit h-[7vh] font-serif text-white '>
      &quot;
      </h1>

      <h1 className='pt-[1rem]'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur consequuntur ipsum itaque aspernatur, hic magni eum. Aut magnam exercitationem fugit, deleniti iste culpa sunt est quaerat! Inventore numquam quis fugiat?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci quas quo, impedit qui officiis accusamus doloribus eligendi dolores sunt porro omnis totam alias, libero possimus illum earum tenetur aut incidunt.
        
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit autem quibusdam nulla, perferendis, saepe cum deleniti praesentium dicta maiores velit sint natus? Accusantium voluptates sunt aspernatur quidem repellendus aut nemo!
      </h1>
      <div className=' flex gap-[5vw]'>
      <h1 className='pl-[1rem] pt-8'>
        <Image src={assest} alt='hi' width={300} height={300} className='w-[10vw] h-[10vw]  border-white border-[6px] '/>
      </h1>
      <div className=''>
      <h1 className='text-xl font-extrabold text-[#3a3945] pt-[5vw]'>
        Ujjwal Pratap singh
      </h1>
      <h1 className='pt-4 text-[#5b868a] '>prayagraj</h1>
      </div>
      </div>
    </SwiperSlide>



    <SwiperSlide className='bg-[#ebf2fa] w-[15vh] h-[90vh] rounded-2xl  p-[2rem]'>
      <h1 className='text-8xl   w-fit h-[7vh] font-serif text-white '>
      &quot;
      </h1>

      <h1 className='pt-[1rem]'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur consequuntur ipsum itaque aspernatur, hic magni eum. Aut magnam exercitationem fugit, deleniti iste culpa sunt est quaerat! Inventore numquam quis fugiat?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci quas quo, impedit qui officiis accusamus doloribus eligendi dolores sunt porro omnis totam alias, libero possimus illum earum tenetur aut incidunt.
        
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit autem quibusdam nulla, perferendis, saepe cum deleniti praesentium dicta maiores velit sint natus? Accusantium voluptates sunt aspernatur quidem repellendus aut nemo!
      </h1>
      <div className=' flex gap-[5vw]'>
      <h1 className='pl-[1rem] pt-8'>
        <Image src={assest} alt='hi' width={300} height={300} className='w-[10vw] h-[10vw]  border-white border-[6px] '/>
      </h1>
      <div className=''>
      <h1 className='text-xl font-extrabold text-[#3a3945] pt-[5vw]'>
        Ujjwal Pratap singh
      </h1>
      <h1 className='pt-4 text-[#5b868a] '>prayagraj</h1>
      </div>
      </div>
    </SwiperSlide>




    <SwiperSlide className='bg-[#ebf2fa] w-[15vh] h-[90vh] rounded-2xl  p-[2rem]'>
      <h1 className='text-8xl   w-fit h-[7vh] font-serif text-white '>
      &quot;
      </h1>

      <h1 className='pt-[1rem]'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur consequuntur ipsum itaque aspernatur, hic magni eum. Aut magnam exercitationem fugit, deleniti iste culpa sunt est quaerat! Inventore numquam quis fugiat?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci quas quo, impedit qui officiis accusamus doloribus eligendi dolores sunt porro omnis totam alias, libero possimus illum earum tenetur aut incidunt.
        
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit autem quibusdam nulla, perferendis, saepe cum deleniti praesentium dicta maiores velit sint natus? Accusantium voluptates sunt aspernatur quidem repellendus aut nemo!
      </h1>
      <div className=' flex gap-[5vw]'>
      <h1 className='pl-[1rem] pt-8'>
        <Image src={assest} alt='hi' width={300} height={300} className='w-[10vw] h-[10vw]  border-white border-[6px] '/>
      </h1>
      <div className=''>
      <h1 className='text-xl font-extrabold text-[#3a3945] pt-[5vw]'>
        Ujjwal Pratap singh
      </h1>
      <h1 className='pt-4 text-[#5b868a] '>prayagraj</h1>
      </div>
      </div>
    </SwiperSlide>




    <SwiperSlide className='bg-[#ebf2fa] w-[15vh] h-[90vh] rounded-2xl  p-[2rem]'>
      <h1 className='text-8xl   w-fit h-[7vh] font-serif text-white '>
      &quot;
      </h1>

      <h1 className='pt-[1rem]'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur consequuntur ipsum itaque aspernatur, hic magni eum. Aut magnam exercitationem fugit, deleniti iste culpa sunt est quaerat! Inventore numquam quis fugiat?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci quas quo, impedit qui officiis accusamus doloribus eligendi dolores sunt porro omnis totam alias, libero possimus illum earum tenetur aut incidunt.
        
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit autem quibusdam nulla, perferendis, saepe cum deleniti praesentium dicta maiores velit sint natus? Accusantium voluptates sunt aspernatur quidem repellendus aut nemo!
      </h1>
      <div className=' flex gap-[5vw]'>
      <h1 className='pl-[1rem] pt-8'>
        <Image src={assest} alt='hi' width={300} height={300} className='w-[10vw] h-[10vw]  border-white border-[6px] '/>
      </h1>
      <div className=''>
      <h1 className='text-xl font-extrabold text-[#3a3945] pt-[5vw]'>
        Ujjwal Pratap singh
      </h1>
      <h1 className='pt-4 text-[#5b868a] '>prayagraj</h1>
      </div>
      </div>
    </SwiperSlide>



    <SwiperSlide className='bg-[#ebf2fa] w-[15vh] h-[90vh] rounded-2xl  p-[2rem]'>
      <h1 className='text-8xl   w-fit h-[7vh] font-serif text-white '>
      &quot;
      </h1>

      <h1 className='pt-[1rem]'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur consequuntur ipsum itaque aspernatur, hic magni eum. Aut magnam exercitationem fugit, deleniti iste culpa sunt est quaerat! Inventore numquam quis fugiat?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci quas quo, impedit qui officiis accusamus doloribus eligendi dolores sunt porro omnis totam alias, libero possimus illum earum tenetur aut incidunt.
        
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit autem quibusdam nulla, perferendis, saepe cum deleniti praesentium dicta maiores velit sint natus? Accusantium voluptates sunt aspernatur quidem repellendus aut nemo!
      </h1>
      <div className=' flex gap-[5vw]'>
      <h1 className='pl-[1rem] pt-8'>
        <Image src={assest} alt='hi' width={300} height={300} className='w-[10vw] h-[10vw]  border-white border-[6px] '/>
      </h1>
      <div className=''>
      <h1 className='text-xl font-extrabold text-[#3a3945] pt-[5vw]'>
        Ujjwal Pratap singh
      </h1>
      <h1 className='pt-4 text-[#5b868a] '>prayagraj</h1>
      </div>
      </div>
    </SwiperSlide>




    <SwiperSlide className='bg-[#ebf2fa] w-[15vh] h-[90vh] rounded-2xl  p-[2rem]'>
      <h1 className='text-8xl   w-fit h-[7vh] font-serif text-white '>
      &quot;
      </h1>

      <h1 className='pt-[1rem]'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur consequuntur ipsum itaque aspernatur, hic magni eum. Aut magnam exercitationem fugit, deleniti iste culpa sunt est quaerat! Inventore numquam quis fugiat?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci quas quo, impedit qui officiis accusamus doloribus eligendi dolores sunt porro omnis totam alias, libero possimus illum earum tenetur aut incidunt.
        
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit autem quibusdam nulla, perferendis, saepe cum deleniti praesentium dicta maiores velit sint natus? Accusantium voluptates sunt aspernatur quidem repellendus aut nemo!
      </h1>
      <div className=' flex gap-[5vw]'>
      <h1 className='pl-[1rem] pt-8'>
        <Image src={assest} alt='hi' width={300} height={300} className='w-[10vw] h-[10vw]  border-white border-[6px] '/>
      </h1>
      <div className=''>
      <h1 className='text-xl font-extrabold text-[#3a3945] pt-[5vw]'>
        Ujjwal Pratap singh
      </h1>
      <h1 className='pt-4 text-[#5b868a] '>prayagraj</h1>
      </div>
      </div>
    </SwiperSlide>





    
    


    
    
    

    
  </Swiper>
  </div>

  </section>
  </>
  )
}

export default Review