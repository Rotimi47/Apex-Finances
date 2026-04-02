 import Image from "next/image";

export default function PotraitOne() {
  return (
   
   <div className=" relative w-full h-70 lg:h-screen  2xl:max-w-380 2xl:mx-auto">
        <Image
            src="/ImageBreakOne.svg"
            alt="background"
            fill
            className="object-cover"
        />
    </div>
    
   )
}
