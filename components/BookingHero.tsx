import Image from "next/image";
import Button from "./Button";


export default function BookingHero() {
  return (
    <div className='bg-[#D2F8DC] px-4 py-10 lg:px-20 lg:py-25'>
        <div className='max-w-6xl  flex flex-col lg:flex-row items-center gap-10 justify-between'>
            <div className='flex justify-center'> 
               
                    <Image src="/Clock.svg" alt='hero-image' width={350} height={350} priority />
                
            </div>

            <div className='flex flex-col gap-6 text-start lg:text-left lg:items-start max-w-xl'>
                <div>
                    <h1 className='text-4xl text-[#2E4F21] lg:text-6xl '>Book an <br/> appointment now</h1>
                </div>
                <div>
                    <p className='text-[#2E4F21]  '>Serving individuals and small businesses since 2000</p>
                </div>
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
