import { testimonials } from "@/Constants"

import { TestimonialSwiper } from "@/utils"

export default function Testimonials() {
  return (
    <div className="flex flex-col gap-10 p-9 lg:p-25 lg:gap-30 ">
        <div className="text-center items-center">
            <h1 className="text-4xl text-[#2E4F21] lg:text-6xl ">Hear From Our Happy Clients</h1>
        </div>
        <div>
            <div>
                 <TestimonialSwiper testimonials={testimonials} />
            </div>

        </div>
    </div>
  )
}
