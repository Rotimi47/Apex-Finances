"use client";
import Link from "next/link";
import Button from "./Button";
import {useState} from "react";
import { useRouter } from "next/navigation";
import { IconMenu3 } from "@tabler/icons-react";
import { IconX } from "@tabler/icons-react";

export default function Navbar() {
  const router = useRouter();
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

  return (
      <div className="bg-[#A0F1BD] "> 
        <nav className="flex justify-between gap-4 p-4 items-center lg:px-20 ">
          <div className="text-[#2E4F21] text-xl font-semibold "><Link href="/">Apex Finances</Link></div>
          <div className="hidden lg:flex gap-5 items-center"> 
            <Link className="text-[#2E4F21]" href="/services">Services</Link>
            <Button
              title="Book an appointment"
              btnType='button'
              containerStyles="bg-[#2E4F21] "
              handleClick={() => router.push("/booking")}
            />
          </div>
          <div className='lg:hidden'>
                <button onClick={toggleNavbar} className='sticky top-6 right-6 z-30'> 
                    {mobileDrawerOpen ?<IconX/> : <IconMenu3/>}
                </button>
          </div>
            {mobileDrawerOpen &&  (
                    <div className=" fixed bg-black/60 top-0 right-0 z-20  backdrop-blur-sm p-12 w-1/2  flex flex-col justify-center items-center lg:hidden">
                       <ul>
                         <li> <Link href="/services">Services</Link></li>
                           <Button
                              title="Book"
                              btnType='button'
                              containerStyles="bg-[#2E4F21] rounded-1xl"
                              handleClick={() => router.push("/booking")}
                            />
                       </ul>
                      


                    
                       </div>
                )}
        </nav>
    </div>
  );
}