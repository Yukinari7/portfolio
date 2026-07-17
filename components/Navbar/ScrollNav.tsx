import { navLinks } from "@/constant/constant";
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
    <div className="fixed top-4 right-4 z-100 flex flex-col-reverse md:flex-row gap-2 items-end md:items-start">
        <div className={`bg-neutral-800 dark:bg-white rounded-lg px-5 py-3 space-y-2 flex flex-col transition-all duration-300 ease-in-out ${isVisible && open ? "opacity-100 scale-100 pointer-events-auto":"opacity-0 scale-95 pointer-events-auto"}`}>
            {navLinks.map((link)=>{
                if (link.type === "modal") {
                    return (
                        <button key={link.id} onClick={()=>setShow(true)} className="text-white dark:text-black cursor-pointer">{link.label}</button>
                    )
                }
                return (
                    <Link key={link.id} href={link.url!} className={`${pathname === link.url ? "font-bold border-b dark:border-b-black w-fit":""} text-white dark:text-black`}>{link.label}</Link>
                )
            })}
        </div>
        <div> 
            <button onClick={()=>setOpen(!open)} className={`relative w-12 h-12 cursor-pointer bg-neutral-800 dark:bg-white rounded-full flex flex-col border border-gray-700
                items-center justify-center gap-1 active:scale-105 transition-all duration-300 ease-in-out ${isVisible ? "opacity-100 translate-y-0 scale-100 pointer-events-auto":"translate-y-4 scale-75 pointer-events-none opacity-0"}`}>
                <span className={`h-[2px] w-5 bg-white dark:bg-black rounded-full transition-all duration-300 ${open ? "rotate-45 translate-y-[4px] transition-all duration-300":""}`}></span>
                <span className={`h-[2px] w-5 bg-white dark:bg-black rounded-full transition-all duration-300 ${open ? "-rotate-45 -translate-y-[2px] transition-all duration-300":""}`}></span>
            </button>
        </div>
        <ContactModal show={show} setShow={setShow}/>
    </div>
  )
}

export default ScrollNav