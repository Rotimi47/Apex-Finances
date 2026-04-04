"use client";
import Link from "next/link";
import Button from "./Button";
import {useState} from "react";
import { useRouter } from "next/navigation";
import { IconMenu3 } from "@tabler/icons-react";
import { IconX } from "@tabler/icons-react";
import { useEffect } from "react";

export default function Navbar() {
  const router = useRouter();
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

     useEffect(() => {
    const handleScroll = () => {
      setMobileDrawerOpen(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
      <div className=" "> 
        <nav className=" relative bg-[#A0F1BD] flex justify-between gap-4 p-4 items-center lg:px-20 2xl:max-w-380 2xl:mx-auto">
          <div className="text-[#2E4F21] text-xl font-semibold "><Link href="/">Apex Finances</Link></div>
          <div className="hidden lg:flex gap-5 items-center"> 
            <Link className="text-[#2E4F21] hover:underline" href="/services">Services</Link>
            <Button
              title="Book an appointment"
              btnType='button'
              containerStyles="bg-[#2E4F21] "
              handleClick={() => router.push("/booking")}
            />
          </div>
          <div className='lg:hidden'>
                <button onClick={toggleNavbar} className=''> 
                    {mobileDrawerOpen ?<IconX/> : <IconMenu3/>}
                </button>
          </div>
           
                  <div 
                    className={ `lg:hidden absolute top-16 right-4 w-52 z-50 transition-all duration-300 ${
                      mobileDrawerOpen 
                       ? "opacity-100 translate-x-0 pointer-events-auto"
                        : "opacity-0 translate-x-4  pointer-events-none" 
                    }`}
                  >
                    <div className="bg-[#F4F7F5] items-center rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] p-5 flex flex-col gap-5 border border-white/10">
                      <ul>
                        <li> <Link  href="/services" onClick={() => setMobileDrawerOpen(false)}>Services</Link></li>
                           
                        <li> <Link href="/booking" onClick={() => setMobileDrawerOpen(false)}>Book Us</Link></li>
                            
                      </ul>
                    </div>
                    
                  </div>
        </nav>
    </div>
  );
}