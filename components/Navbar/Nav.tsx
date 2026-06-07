"use client"
import { AnimatePresence, motion } from 'framer-motion'
import { navLinks } from '@/constant/constant'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { FaHouse } from 'react-icons/fa6'
import ContactModal from '../ContactModal'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

const Nav = () => {
const {resolvedTheme, setTheme} = useTheme();

const pathname = usePathname()
const [open, setOpen]= useState(false);
const [navBg, setNavBg]=useState(false);
useEffect(()=>{
  const handler =()=>{
    if(window.scrollY>=90)setNavBg(true);
    if(window.scrollY<90)setNavBg(false)
  };
  window.addEventListener("scroll", handler);
  return ()=>window.removeEventListener("scroll", handler)
}, [])
  return (
    <div>
    <div className={`w-fit absolute top-0 left-0 right-0 z-1000 mx-auto pt-3`}>
      <div className='flex justify-center gap-4'>
        {/* Home Icon */}
      <Link
        href="/"
        className='relative inline-flex items-center justify-center'
      >
        {pathname === "/" && (
          <motion.span
            layoutId='navIndicator'
            className='absolute inset-0 rounded-full dark:bg-white bg-neutral-800 shadow-xl'
            transition={{
              type: 'spring',
              stiffness: 160,
              damping: 15,
              bounce: 0.8
            }}
          />
        )}

        <FaHouse
          className={`relative z-10 w-12 h-12 p-2 rounded-full border dark:border-gray-700 border-gray-300 shadow-md transition-colors duration-300
          ${pathname === "/" ? "dark:text-black text-[#e5e4e2]" : "text-black dark:text-white bg-[#e5e4e2] dark:bg-transparent"}`}
        />
      </Link>
        <div className={`relative fixed dark:border dark:bg-transparent border-gray-300 dark:border-gray-700 rounded-full flex items-center justify-center gap-3 px-1 py-1 shadow-md ${navBg}`}>
          {navLinks.map((link)=>{
            if (link.type === "modal") {
            return (
            <button key={link.id} onClick={()=> setOpen(true)} className='relative transition-all duration-300 hover:text-gray-500 dark:hover:text-white z-10 text-base text-black dark:text-gray-300 py-1 px-3'>{link.label}</button>
          );
          }

          const isActive = pathname === link.url;

          return (
            <Link
              key={link.id}
              href={link.url!}
              className='relative inline-flex items-center rounded-full py-2 px-4 transition-all duration-300 ease-out text-base'>
              {isActive && (
                <motion.span
                layoutId='navIndicator'
                  className='absolute inset-0 rounded-full dark:bg-white bg-black shadow-xl'
                  transition={{ type: 'spring', stiffness: 160, damping: 15, bounce: 0.8 }}
                />
              )}
              <span className={`relative transition-all duration-300 z-10 ${isActive ? 'dark:text-black text-white' : 'dark:text-gray-300 text-black hover:text-gray-500 dark:hover:text-white'}`}>{link.label}</span>
            </Link>
          )
          })}  
      </div> 
      <ContactModal open={open} setOpen={setOpen}/>
      </div>
    </div>
    
    <div className='md:w-fit fixed bottom-4 left-0 md:right-0 right-4 z-10001 mx-auto pt-3'>
      <div className='flex justify-end gap-4 cursor-pointer'>
        {/* Theme Icon */}
  <AnimatePresence mode="wait">
  <button
    onClick={() =>
      setTheme(resolvedTheme === "light" ? "dark" : "light")
    }
    className="cursor-pointer relative overflow-hidden"
  >
    {resolvedTheme === "light" ? (
      <motion.div
        key="sun"
        initial={{ y: 60, rotate: -180, opacity: 0 }}
        animate={{ y: 0, rotate: 0, opacity: 1 }}
        exit={{ y: 80, rotate: 180, opacity: 0 }}
        transition={{
          duration: 0.25,
          ease: "easeOut",
        }}
      >
        <Moon
          className="bg-neutral-800 text-white w-12 h-12 p-2 rounded-full border border-gray-700"
        />
      </motion.div>
    ) : (
      <motion.div
        key="moon"
        initial={{ y: 60, rotate: -180, opacity: 0 }}
        animate={{ y: 0, rotate: 0, opacity: 1 }}
        exit={{ y: 80, rotate: 180, opacity: 0 }}
        transition={{
          duration: 0.25,
          ease: "easeOut",
        }}
      >
        <Sun
          className="bg-white text-black w-12 h-12 p-2 rounded-full border border-gray-300"
        />
      </motion.div>
    )}
  </button>
</AnimatePresence>
      </div>
    </div>
    </div>
  )
}

export default Nav