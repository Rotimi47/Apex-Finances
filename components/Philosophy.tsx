"use client";
import { philosophy } from "@/Constants"
import { motion } from 'framer-motion';

export default function Philosophy() {
  return (
    <div data-aos="fade-up" className="flex flex-col gap-5 w-full mx-auto px-6 py-20 border-t border-t-[#C7C7C7] ">
        <div className="text-center items-center pb-10 flex flex-col gap-7">
            <p className="text-[#2E4F21] font-medium text-xs">Philosophy</p>
            <h1 className="text-[#2E4F21] text-4xl">We Believe:</h1>
        </div>
        <div className="w-full mx-auto flex flex-col gap-5 max-w-245"
        >
            {philosophy.map((item, index) => (
                <motion.div 
                 whileHover={{ 
                    scale: 1.1, 
                    textShadow: "0px 0px 8px rgb(255,255,255)",
                }}
                key={index} className="bg-[#D2F8DC] px-6 py-14 text-center flex flex-col gap-10 rounded-xl lg:p-25">
                    <p className="text-[#2E4F21] font-medium text-sm">{item.number}</p>
                    <p className="text-[#2E4F21] text-lg leading-[1.1] tracking-[-0.045em] lg:text-3xl">{item.message}</p>

                </motion.div>
            ))}
        </div>
    </div>
  )
}
