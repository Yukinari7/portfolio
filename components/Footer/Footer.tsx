"use client";

import { footerLinks } from "@/constant/constant"
import { BriefcaseBusiness } from "lucide-react"
import { useState } from "react"
import ContactModal from "../ContactModal";

const Footer = () => {
const [show, setShow] = useState(false);
  return (
    <div>
        <div className="border-t border-gray-400 dark:border-gray-600 w-full">
        <div className="py-15 mx-auto w-[90%]">
            <div className="flex flex-col md:flex-row justify-between md:items-end gap-3">
                <h3 className="text-3xl md:text-5xl font-semibold dark:text-gray-300 [font-family:var(--font-clash)] lg:[font-family:var(--font-antar)]">Let's <br/>work together.</h3>
                <p className="max-w-md text-black dark:text-gray-300">I'm available for freelance works, contracts, collaborations and full-time opportunities.</p>
            </div>
                <div className="space-y-4 mt-4">
                    <div className="border-l-1 border-gray-600 h-7 flex items-center text-gray-600 dark:text-gray-400"><a href="mailto:bemem52@gmail.com" className="text-base ml-2 ">bemem52@gmail.com</a></div>
                <button onClick={()=>setShow(true)} className="dark:bg-white bg-black hover:bg-gray-700 transition-all duration-300 rounded-lg py-2 px-4 font-semibold flex items-center text-[#e5e4e2] gap-1 dark:text-black">Hire me <BriefcaseBusiness className="w-5 h-5"/></button>
                </div>
        </div>
    </div>
    <div className="dark:bg-white border-t border-gray-400 w-full">
        <div className="py-3 mx-auto w-[90%]">
            <div className="flex flex-col md:flex-row items-center justify-between gap-3">
                <p className="text-gray-600 text-xs">© 2026 Emem Princeson. All rights reserved</p>
                <div className="flex items-center space-x-5">
                    {footerLinks.map((link)=>{
                        const Icon = link.icon
                        return (
                            <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center">
                                <Icon className="w-8 h-8 text-black"/>
                            </a>
                        )
                    })}
                </div>
            </div>
        </div>
    </div>
    <ContactModal show={show} setShow={setShow}/>
    </div>
  )
}

export default Footer