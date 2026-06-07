"use client"

import { project } from "@/components/Data/data"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6"
import { motion } from "framer-motion"
import FadeUp from "@/components/motion/FadeUp"


export default function page() {
const [activeCard, setActiveCard] = useState<number | null>(null);

const ref = useRef<HTMLDivElement>(null);
useEffect (()=> {
  const handleMove =(e: MouseEvent)=> {
    const clamp = (v: number, max: number) =>
    Math.max(-max, Math.min(max, v));
    if(!ref.current) return;

    const rawX = (e.clientX / window.innerWidth - 0.5) * 10;
    const rawY = (e.clientY / window.innerHeight - 0.5) * 10;

    const x = clamp(rawX, 3);
    const y = clamp(rawY, 2);

    ref.current.style.transform = `translate(${x}px, ${y}px)`
  };
  window.addEventListener("mousemove", handleMove);
  return()=>window.removeEventListener("mousemove", handleMove)
})
  return (
    <div>
    <div>
      <div className="w-[90%] mx-auto flex flex-col relative justify-center pt-20 pb-15 xl:pt-30">
        <div className="flex flex-col md:flex-row md:items-center justify-center gap-4">
          <div className="flex flex-col gap-2">
            <FadeUp>
            <h1 className="text-5xl md:text-6xl font-bold [font-family:var(--font-clash)] lg:[font-family:var(--font-antar)]"><span className="font-thin">Hi, I'm</span> Emem.</h1>
            </FadeUp>
            <FadeUp delay={0.3}>
            <p className="md:flex hidden max-w-sm lg:max-w-md">I design and develop modern 
          full-stack applications that combine speed, usability and clean engineering for real world impact.</p>
          </FadeUp>
          </div>
          <FadeUp delay={0.6}>
          <div ref={ref} className="xl:w-[350px] md:w-[300px] h-full">
            <Image src="/images/img.webp" alt="Emem Princeson" width={600} height={400} className="object-cover md:rounded-4xl pointer-event-none"/>
          </div>
          </FadeUp>
        </div>
        <FadeUp delay={0.3}>
        <p className="flex md:hidden md:text-xl max-w-sm lg:max-w-md mt-10">I design and develop modern 
          full-stack applications that combine speed, usability and clean engineering for real world impact.</p>
          </FadeUp>
      </div>
      <div className="w-[90%] mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-2 md:pb-15">
        <div className="flex flex-col gap-3">
          <div>
            <FaQuoteLeft /><p>With years of experience in building full-stack websites and web applications, I focus on performance, functionality and user-centered designs that brings ideas to life.<FaQuoteRight/></p>
          </div>
          <div className="flex flex-col md:flex-row gap-3">
            <p className="text-sm text-gray-700 dark:text-gray-300">Turning complex problems into clean, functional and scalable web solutions with peak creativity.</p>
            <p className="text-sm text-gray-700 dark:text-gray-300">Building seamless digital experiences from frontend to backend.</p>
          </div>
        </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 pt-10 pb-15 gap-3">
          <h2 className="text-4xl lg:text-6xl font-[100] [font-family:var(--font-clash)] lg:[font-family:var(--font-antar)]">Education.</h2>
          <div className="border border-zinc-800 px-5 py-5 space-y-2 shadow-sm hover:shadow-zinc-700 duration-500 transition-all ease-in-out bg-neutral-900">
            <h3 className="text-xl text-[#e5e4e2]"><span className="font-bold">Bachelor of Engr.</span> (Computer Engineering)</h3>
            <p className="text-base text-[#e5e4e2]">University of Uyo, Akwa Ibom State, NG.</p>
            <div className="border border-b border-zinc-700"></div>
            <p className="text-gray-400" style={{fontFamily: ""}}>2022-2028</p>
          </div>
        </div>
        <div className="flex items-center justify-center pb-10">
          <Link href="/work" className="flex items-center justify-center group gap-1 dark:bg-white hover:bg-gray-700
          bg-black text-white dark:text-black rounded-lg py-2 px-4 w-fit transition-all duration-300">View projects<ArrowRight className="w-4 h-4 group-hover:translate-x-1 duration-300 
          transition-transform"/>
          </Link>
        </div>
      </div>
    </div>
    </div>
  )
}
