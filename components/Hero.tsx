"use client";
import Button from './Button'
import Image from 'next/image'
import { motion } from "framer-motion";
import TextReveal from './TextReveal';

export default function Hero() {
  return (
    <div className='bg-[#A0F1BD] px-4 py-10 lg:px-20 lg:py-25  2xl:max-w-380 2xl:mx-auto'>
        <div className='max-w-6xl  flex flex-col lg:flex-row items-center gap-10 justify-between'>
            <div className='flex flex-col gap-6 text-center lg:text-left lg:items-start items-center max-w-xl'>
                <div>
                    <TextReveal text="Financial Clarity You Can Trust" />
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.0, duration: 1.5 }}
                >
                    <p className='text-[#2E4F21] '>Trusted financial guidance for every stage of life and business since 2000</p>
                </motion.div>
                <div>
                    <Button
                        title='Connect with our experts'
                        btnType='button'
                        containerStyles="bg-[#2E4F21] "
                    
                    />
                </div>
            </div>
            <div className='flex justify-center drop-shadow-[0_0_40px_rgba(0,200,255,0.7)]'> 
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                    repeat: Infinity,
                    duration: 10,
                    ease: "linear",
                    }}
                > 
                    <Image src="/heroLg.svg" alt='hero-image' width={350} height={350} priority />
                </motion.div>
            </div> 
        </div>
    </div>
  )
}
