import Image from "next/image";


export default function BookKeeping() {
  return (
    
        <section  data-aos="fade-right" className="flex justify-center pb-4 lg:justify-start lg:pb-6  2xl:max-w-380 2xl:mx-auto">
            <div className="bg-[#A0F1BD] w-full max-w-259 mx-4  px-4 py-10 rounded-lg flex flex-col lg:flex-row gap-18  lg:py-20 lg:pl-20 lg:pr-25">
                <div>
                    <Image src="/safeBox.svg" alt="image of a phone" width={350} height={350} priority/>
                </div>
               
                <div className="flex flex-col gap-16">
                    <div className="flex flex-col gap-6">
                        <h1 className="text-3xl text-[#2E4F21]">Bookkeeping & Accounting</h1>
                        <p className="text-[#2E4F21] leading-[1.1] tracking-[-0.045em]">Maintain organised financial records and provide clear reports to support business growth and financial health.</p>
                    </div>
                    <div className="flex gap-2.5 ">
                        <div className="bg-white p-3 rounded-md"><p className="text-[#506349] font-medium text-sm">1099 taxes</p></div>
                        <div className="bg-white p-3 rounded-md"><p  className="text-[#506349] font-medium text-sm">Dependents</p></div>
                        <div className="bg-white p-3 rounded-md"><p  className="text-[#506349] font-medium text-sm">Trust Taxes</p></div>
                    </div>
                </div>
            </div>
        </section>
  )
}
