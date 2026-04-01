import Link from "next/link";


export default function Footer() {
  return (
    <div className="bg-[#2E4F21] w-full mx-auto flex flex-col gap-20 px-6 py-8 lg:gap-30">
        <div className="flex flex-col gap-20 lg:flex-row lg:gap-130">
            <div className="text-white text-2xl font-semibold"><Link href="/">Apex Finances</Link></div>
            <div className="flex justify-between items-center lg:gap-5">
                <Link className="text-[#D5E4D0]" href="/services">Services</Link>
                <button className="text-[#2E4F21] bg-white p-3 rounded-4xl font-semibold"><Link href="/booking">Book An Appointment</Link></button>
            </div>
        </div>
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-70">
            <div>
                <p className="text-white text-xs font-medium">Financial Clarity You Can Trust</p>
                <p className="text-[#D5E4D0] text-xs font-medium">Trusted financial guidance for every stage of life and business since 2000</p>
            </div>
            <p className="text-[#D5E4D0] text-xs font-medium">© 2026 OreO, All Rights Reserved</p>
        </div>
    </div>
  )
}
