"use client"

import { main } from "framer-motion/client"
import { MailIcon } from "lucide-react"
import { BiLogoTypescript } from "react-icons/bi"
import { BsGithub } from "react-icons/bs"
import { FaLinkedin, FaNodeJs, FaReact, FaTelegram, FaXTwitter } from "react-icons/fa6"
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri"
import { SiExpo } from "react-icons/si"

const Cards = () => {
  return (
    <div>
      <div className="w-[90%] mx-auto">
        <div className="grid lg:divide-x-1 lg:divide-y-0 divide-zinc-800 divide-y-1 grid-cols-1 lg:grid-cols-[1fr_1.3fr_1fr]">
        <div className={"p-5 flex flex-col space-y-2"}>
          <h2>Technical Arsenal</h2>
          <div className="flex flex-wrap md:flex-nowrap gap-3">
            <div className="flex flex-col justify-center items-center gap-2">
            <div className="py-2 px-4 border bg-neutral-900 rounded-xl border-zinc-800"><RiNextjsFill className="w-8 h-8 text-white"/></div>
          </div>
          <div className="flex flex-col justify-between items-center gap-2">
            <div className="py-2 px-4 border border bg-neutral-900 rounded-xl border-zinc-800"><BiLogoTypescript className="w-8 h-8 text-blue-500"/></div>
          </div>
          <div className="flex flex-col justify-between items-center gap-2">
            <div className="py-2 px-4 border border bg-neutral-900 rounded-xl border-zinc-800"><RiTailwindCssFill className="w-8 h-8 text-sky-400"/></div>
          </div>
          <div className="flex flex-col justify-between items-center gap-2">
            <div className="py-2 px-4 border border bg-neutral-900 rounded-xl border-zinc-800"><FaReact className="w-8 h-8 text-sky-500"/></div>
          </div>
          <div className="flex flex-col justify-between items-center gap-2">
            <div className="py-2 px-4 border border bg-neutral-900 rounded-xl border-zinc-800"><FaNodeJs className="w-8 h-8 text-green-600"/></div>
          </div>                                     
          <div className="flex flex-col justify-between items-center gap-2">
            <div className="py-2 px-4 border border bg-neutral-900 rounded-xl border-zinc-800"><SiExpo className="w-8 h-8 text-white"/></div>
          </div>
          </div>
        </div>
        <div className={"p-5 flex flex-col justify-center space-y-3"}>
          <h2>Social Handle</h2>
          <div className="flex flex-wrap md:flex-nowrap gap-3">
            <a href="https://x.com/techlastborn" target="_blank" rel="noopener noreferrer" className="py-2 px-4 border border-zinc-800 bg-neutral-900 flex hover:bg-neutral-700 dark:hover:bg-neutral-800 gap-2 rounded-xl text-sm items-center">
              <FaXTwitter className="text-white w-5 h-5"/><p className="text-[#e5e4e2] text-sm">Twitter</p></a>
              <a href="https://github.com/Yukinari7" target="_blank" rel="noopener noreferrer" className="py-2 px-4 border border-zinc-800 hover bg-neutral-900 flex hover:bg-neutral-700 dark:hover:bg-neutral-800 gap-2 rounded-xl items-center">
              <BsGithub className="text-white w-5 h-5"/><p className="text-[#e5e4e2] text-sm">Github</p></a>
              <a href="https://t.me/defifuture7" target="_blank" rel="noopener noreferrer" className="py-2 px-4 border border-zinc-800 hover bg-neutral-900 hover:bg-neutral-700 dark:hover:bg-neutral-800 flex gap-2 rounded-xl items-center">
              <FaTelegram className="text-white w-5 h-5"/><p className="text-[#e5e4e2] text-sm">Telegram</p></a>
              <a href="https://www.linkedin.com/in/emem-bassey-150323323/" target="_blank" rel="noopener noreferrer" className="py-2 px-4 border border-zinc-800 hover:bg-neutral-700 dark:hover bg-neutral-900 hover:bg-neutral-800 flex gap-2 rounded-xl items-center">
              <FaLinkedin className="text-white w-5 h-5"/><p className="text-[#e5e4e2] text-sm">LinkedIn</p></a>
          </div>
        </div>
      </div>
      </div>
    </div> 
  )
}

export default Cards