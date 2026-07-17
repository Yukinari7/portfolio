"use client"
import { Link } from 'next-view-transitions'
import ContactModal from '@/components/ContactModal'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessagesSquare } from 'lucide-react';
import Image from 'next/image';


type HeroProps = {
  startAnimation: boolean;
};

const Hero = ({startAnimation}: HeroProps) => {
const [show, setShow] = useState(false);
  return (
    <div>
    <div className='w-[90%] relative mx-auto  gap-4 items-start xl:h-[100vh] h-[90vh] md:h-[50vh] justify-center flex flex-col'>
      <h1 className='text-5xl font-semibold xl:text-[5rem] lg:text-6xl md:text-6xl [font-family:var(--font-clash)] lg:[font-family:var(--font-antar)]'>
        <motion.span className="block" initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
          animate={startAnimation
          ? { opacity: 1, y: 0, filter: "blur(0px)" }
          : { opacity: 0, y: 60, filter: "blur(10px)" }
          }>
          Emem Princeson,
        </motion.span>
      <div className='flex items-center gap-4'>
        <motion.span className="block text-gray-700 dark:text-gray-400" initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
        animate={
        startAnimation
        ? { opacity: 1, y: 0, filter: "blur(0px)" }
        : { opacity: 0, y: 60, filter: "blur(10px)" }
        }
  transition={{type: "spring", stiffness: 160, damping: 15, delay: startAnimation ? 0.25 : 0, bounce: 0.8,}}>
  FullStack Dev.
</motion.span>
    <Link href='/about' className="relative h-12 w-12 md:h-14 md:w-14 lg:h-12 lg:w-12 overflow-hidden rounded-lg border dark:border-white border-gray-400 hidden md:flex">
      <Image
        src="/images/img.webp"
        alt="Emem"
        fill sizes="(min-width: 768px) 56px, 48px"
        className="object-cover"
        priority
      />
    </Link>
</div>
</h1>
      <p className='text-base'>I build fast and modern web experiences with clean UI, functionality and performance-driven architecture.</p>
      <div className="border-b border-gray-400 dark:border-gray-600 w-full"></div>
      <div className='flex flex-row gap-2'>
        <Link href="/work" className='py-1 px-3 bg-black text-white dark:bg-[#e5e4e2] dark:hover:bg-gray-300 hover:bg-neutral-700 transition-all duration-300 dark:text-black rounded-full border md:text-lg flex items-center gap-2'>View works</Link>
      </div>
    </div>
    <ContactModal show={show} setShow={setShow}/>
    </div>
  )
}

export default Hero
