import { onboarding } from "@/Constants"
import Image from "next/image"

export default function Onboarding() {
  return (
    <div data-aos="fade-up" className="w-full mx-auto px-6 py-30 flex flex-col gap-20 max-w-7xl ">
      <div className="flex flex-col gap-7">
        <p className="text-sm font-medium text-[#2E4F21]">How it works </p>
        <h1 className="text-4xl text-[#2E4F21]">A Simple onboarding</h1>
        <p className="text-[#2E4F21]">Serving individuals and small businesses since 2000</p>
      </div>
      <div className="flex flex-col gap-5 lg:gap-15 ">
        {onboarding.map((item, index) => (
          <div key={index} className=" flex flex-col gap-10 lg:flex-row lg:justify-between">
            <div>
              <h1 className="text-[#2E4F21] font-extralight text-[112px]">{item.number}</h1>
            </div>
            <div className="flex flex-col gap-18 lg:flex-row "> 
              <div className="flex flex-col gap-6.5 lg:w-94">
                <h1 className="text-4xl text-[#2E4F21]">{item.title}</h1>
                <p className="text-[#2E4F21]  ">{item.subtitle}</p>
              </div>
              <div data-aos="flip-down">
                 <Image
                    src={item.image}
                    alt="client"
                    width={400}
                    height={400}
                    priority
                  />
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}
