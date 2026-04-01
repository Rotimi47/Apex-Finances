
import Button from './Button'


export default function HomeText() {
  return (
    <div  data-aos="fade-up" className='w-full mx-auto pt-30 pb-25'>
        <div className='flex flex-col gap-7 items-center text-center max-w-4xl mx-auto '>
            <h3 className='text-[#2E4F21] font-medium text-[15px]'>Services</h3>
            <h1 className='text-[#2E4F21] text-4xl lg:text-6xl'>Let us handle the numbers, <br/> so you can handle your success.</h1>
            <p className='text-[#2E4F21]'>Serving individuals and small businesses since 2000</p>
            <Button
                title='Schedule a call'
                btnType='button'
                containerStyles="bg-[#2E4F21] "
            />
        </div>
    </div>
  )
}
