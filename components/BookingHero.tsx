'use client';
import Image from "next/image";
import Button from "./Button";
import TextReveal from "./TextReveal";
import { motion } from "framer-motion";


export default function BookingHero() {
  return (
    <div className='bg-[#D2F8DC] w-full mx-auto px-4 py-10 lg:px-20 lg:py-25 2xl:max-w-380 2xl:mx-auto '>
        <div className='max-w-6xl  flex flex-col lg:flex-row items-center gap-10 justify-between'>
            <div className='w-full h-auto flex justify-center'> 
               
                <Image src="/Clock.svg" alt='hero-image' width={350} height={350} priority />
                
            </div>

            <div className='flex flex-col gap-6 text-start lg:text-left lg:items-start max-w-xl'>
                <div>
                    <TextReveal text={"Book an appointment now" }/>
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.0, duration: 1.5 }}
                >
                    <p className='text-[#2E4F21] '>Serving individuals and small businesses since 2000</p>
                </motion.div>
                <div>
                    <Button
                        title='Contact Us'
                        btnType='button'
                        containerStyles="bg-[#2E4F21] "
                    
                    />
                </div>
            </div>
           
        </div>
    </div>
  )
}
