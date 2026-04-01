import Image from "next/image";


export default function PotraitTwo() {
  return (
    <div className=" relative w-full h-70 lg:h-screen">
            <Image
                src="/ImageBreakTwo.svg"
                alt="background"
                fill
                className="object-cover"
            />
        </div>
  )
}
