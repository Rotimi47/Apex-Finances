import Image from "next/image";



export default function BrickLay() {
  return (
    <div className="flex flex-col gap-5 lg:flex-row-reverse w-full mx-auto max-w-7xl px-10 py-10 lg:gap-10">
        <div data-aos="flip-right" className="lg:flex-1">
            <Image 
            src="/Bricks.svg"
            alt="brick-image"
            width={400}
            height={400}
            className="w-full h-full object-cover"
            priority
            />
        </div>
        <div className="bg-[#2E4F21] p-15 flex flex-col gap-7 rounded-md lg:flex-1 lg:p-10">
            <h1 className="text-white text-3xl lg:text-[40px]">A custom built plan for you</h1>
            <p className="text-white leading-[1.1] tracking-[-0.045em]">At Apex Finances, we believe that tax filing should be seamless, accurate, and stress-free. Our approach is centered on three key pillars: simplicity, accuracy, and security.</p>
            <button className="bg-white text-[#2E4F21] p-3 items-start w-30 rounded-xl">Learn More</button>
            
        </div>
    </div>
  )
}
