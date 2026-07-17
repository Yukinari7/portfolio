"use client"

import { BsGithub } from "react-icons/bs"
import { FaLinkedin, FaTelegram, FaXTwitter } from "react-icons/fa6"

const Cards = () => {
  return (
    <div>
      <div className="w-[90%] mx-auto">
        <div className={"flex flex-col justify-between space-y-3"}>
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
  )
}

export default Cards