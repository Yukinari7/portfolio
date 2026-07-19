import { sideNavLinks } from "@/constant/constant";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react"
import ContactModal from "../ContactModal";


const ScrollNav = () => {
const [open, setOpen] = useState(false);
const [show, setShow] = useState(false)

const [isVisible, setIsVisible] = useState(false);
useEffect(()=>{
    const toggleVisibility =()=>{
        if (window.scrollY>300) {
            setIsVisible(true)
        } else {
            setIsVisible(false);
            setOpen(false)
        }
    }
    window.addEventListener("scroll", toggleVisibility)
    return()=>window.removeEventListener("scroll", toggleVisibility)
},[])
const pathname = usePathname()
  return (
    <div className="fixed top-4 right-4 z-100 flex gap-2 items-center md:items-star">
        <div className={`bg-neutral-800 dark:bg-white rounded-full p-3.5 space-x-4 flex items-center transition-all duration-300 ease-in-out ${isVisible && open ? "opacity-100 scale-100 pointer-events-auto":"opacity-0 scale-95 pointer-events-auto"}`}>
            {sideNavLinks.map((link)=>{
            const Icon = link.icon
                if (link.type === "modal") {
                    return (
                        <button key={link.id} onClick={()=>setShow(true)} className="text-white dark:text-black cursor-pointer"><Icon className={`w-6 h-6 transition-all duration-300 ${pathname === link.url ? "font-bold text-white dark:text-black":"w-5 h-5 text-gray-300 dark:text-gray-600"}`}/></button>
                    )
                }
                return (
                    <Link key={link.id} href={link.url!} className="text-white dark:text-black"><Icon className={`w-6 h-6 transition-all duration-300 ${pathname === link.url ? "font-bold text-yellow-500 dark:text-black":"w-5 h-5 text-gray-300 dark:text-gray-600"}`}/></Link>
                )
            })}
        </div>
        <div> 
            <button onClick={()=>setOpen(!open)} className={`relative w-12 h-12 cursor-pointer bg-neutral-800 dark:bg-white rounded-full flex flex-col border border-gray-700
                items-center justify-center gap-1.5 active:scale-105 transition-all duration-300 ease-in-out ${isVisible ? "opacity-100 translate-y-0 scale-100 pointer-events-auto":"translate-y-4 scale-75 pointer-events-none opacity-0"}`}>
                <span className={`h-[2px] w-6 bg-white dark:bg-black rounded-full transition-all duration-300 ${open ? "rotate-45 translate-y-[5px] transition-all duration-300":""}`}></span>
                <span className={`h-[2px] w-6 bg-white dark:bg-black rounded-full transition-all duration-300 ${open ? "-rotate-45 -translate-y-[3px] transition-all duration-300":""}`}></span>
            </button>
        </div>
        <ContactModal show={show} setShow={setShow}/>
    </div>
  )
}

export default ScrollNav