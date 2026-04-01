import React from 'react'
import Button from './Button'

export default function HomeTextTwo() {
  return (
     <div data-aos="fade-up" className='w-full mx-auto py-30  px-6'>
        <div className='flex flex-col gap-7 items-center text-center max-w-4xl mx-auto '>
            <h1 className='text-[#2E4F21] text-4xl lg:text-6xl leading-[1.05] tracking-[-0.07em]'>We believe that tax filing should be seamless, accurate, and stress-free. Get started with Apex Finance today!</h1>
            <Button
                title='Connect with our experts'
                btnType='button'
                containerStyles="bg-[#2E4F21] "
            />
        </div>
    </div>
  )
}
