import { about } from "@/Constants"
import Image from "next/image"

export default function About() {
  return (
    <div className="w-full mx-auto px-4 py-20 max-w-7xl flex flex-col gap-20">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-20">
            <h1 className="text-3xl text-[#2E4F21] lg:text-6xl">Smart Finance for everyone</h1>
            <p className="text-base text-[#2E4F21] leading-[1.1] tracking-[-0.045em]">At Apex Finance, we believe that financial confidence should be accessible to everyone—whether you’re a solo entrepreneur, managing a growing family, or running a small business.</p>
        </div>
        <div className="lg:flex">
            {about.map((item, index) => ( 
            <div key={index}>
                <div className="flex flex-col gap-6.5 border-t border-t-[#2E4F21] py-5  lg:border-l lg:border-0 lg:border-l-[#2E4F21] lg:px-13 ">
                    <Image
                        src={item.icon}
                        alt="client"
                        width={40}
                        height={40}
                    />
                    <h2 className="text-[#2E4F21] text-xl">{item.title}</h2>
                    <h3 className="text-[#2E4F21]">{item.subtitle}</h3>
                    <p className="text-[#2E4F21] leading-[1.1] tracking-[-0.045em]">{item.message}</p>
                </div>


            </div>
             ))}

        </div>
    </div>
  )
}
