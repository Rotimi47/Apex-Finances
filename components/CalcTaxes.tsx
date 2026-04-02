import Image from "next/image";
import Button from "./Button";


export default function CalcTaxes() {
  return (
    <div className='bg-[#F4F7F5] px-4 py-10 lg:px-20 lg:py-25 w-full 2xl:max-w-380 2xl:mx-auto'>
            <div className='max-w-6xl mx-auto  flex flex-col lg:flex-row-reverse items-center gap-10 justify-between'>
                <div data-aos="flip-right" className='flex justify-center'> 
                   
                        <Image src="/calculatorImage.svg" alt='hero-image' width={400} height={400} priority />
                    
                </div>
    
                <div className='flex flex-col gap-13 text-center items-center max-w-xl'>
                    <div>
                        <h1 className='text-4xl text-[#2E4F21] lg:text-6xl leading-[1.05] tracking-[-0.07em]'>Say goodbye to <br/> taxes of the past</h1>
                    </div>
                    <div>
                        <Button
                            title='Connect with our experts'
                            btnType='button'
                            containerStyles="bg-[#2E4F21] "
                        
                        />
                    </div>
                </div>
               
            </div>
        </div>
  )
}
