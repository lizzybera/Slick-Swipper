import Box from "../Box"

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import 'swiper/css';

const Swipper = () => {


  return (
    <div className="">
      <Swiper
     spaceBetween={10}
     slidesPerView={3}
     autoplay={{ delay: 2000, disableOnInteraction: true }}
     loop={true}
     modules={[Autoplay]}
     className='w-full overflow-hidden h-max'
     breakpoints={{
       768: {
         spaceBetween: 30,
         slidesPerView: 2,
       },
       1023: {
         spaceBetween: 30,
         slidesPerView: 3,
       },
       1280: {
         spaceBetween: 10,
         slidesPerView: 3,
       },
     }}
      >
        <div className="w-[100%] h-[100vh] bg-[blue] flex">
          <SwiperSlide> <Box text="1" bg="bg-green-500" /></SwiperSlide>
          <SwiperSlide><Box text="1" bg="bg-yellow-500" /></SwiperSlide>
          <SwiperSlide><Box text="1" bg="bg-blue-500" /></SwiperSlide>
          <SwiperSlide><Box text="1" bg="bg-blue-500" /></SwiperSlide>
          <SwiperSlide><Box text="1" bg="bg-blue-500" /></SwiperSlide>
          <SwiperSlide><Box text="1" bg="bg-blue-500" /></SwiperSlide>
          <SwiperSlide><Box text="1" bg="bg-blue-500" /></SwiperSlide>
       
 
   
        
        </div>
        </Swiper>
    </div>
  )
}
export default Swipper