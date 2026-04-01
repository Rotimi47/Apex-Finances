"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Image from "next/image"
import Staff from '@/public/Staff.svg'
import type { Props } from "@/types";

export default function TestimonialSwiper({testimonials}: Props) {
  return (
    <Swiper
        className="w-full"
        slidesPerView={1}
        spaceBetween={24}
        loop={true}
        speed={400}
        grabCursor={true}
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
        }}
        modules={[Autoplay]}
    >
          {testimonials.map((testimonial, index) =>(
                    <SwiperSlide key={index}>
                        <div className="flex flex-col gap-10 lg:flex-row lg:justify-center lg:gap-25 ">
                            <div className="flex gap-5 lg:flex-col lg:gap-10 lg:w-77.5 "> 
                                <div className="flex flex-col gap-2 border-t border-t-[#2E4F21] ">
                                    <p className="text-[#2E4F21] text-xs font-medium pt-3 lg:text-lg">{testimonial.oneJob}</p>
                                    <p className="text-[#7D9276] text-xs font-medium">{testimonial.location}</p>
                                </div>
                              
                                <div className="flex flex-col gap-2 border-t border-t-[#2E4F21]">
                                    <p className="text-[#2E4F21] text-xs font-medium pt-3 lg:text-lg">{testimonial.twoJob}</p>
                                    <p className="text-[#7D9276] text-xs font-medium">{testimonial.location}</p>

                                </div>

                                <div className="flex flex-col gap-2 border-t">
                                    <p className="text-[#2E4F21] text-xs font-medium pt-3 lg:text-lg">{testimonial.threeJob}</p>
                                    <p className="text-[#7D9276] text-xs font-medium">{testimonial.locationTwo}</p>
                                </div>

                            </div>
                            <div className="flex flex-col gap-10 lg:w-2xl lg:border-l lg:border-l-text-[#2E4F21] lg:pl-10 lg:pr-7">
                                <div>
                                    <p className="text-lg lg:text-3xl text-[#2E4F21] leading-[1.1] tracking-[-0.045em]">{testimonial.message}</p>
                                </div>

                                <div className="flex gap-3 items-center">
                                    <Image src={Staff} alt="staff picture"  width={50} height={50} priority/>
                                    <p className=" text-[#2E4F21] ">{testimonial.name}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
    </Swiper>
  )
}
