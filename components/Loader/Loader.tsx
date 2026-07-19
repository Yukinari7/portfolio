"use client"
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Props = {
    onFinish: () => void;
};


export default function Loader({onFinish}:Props) {
const [progress, setProgress] = useState(0);

const text = 'Hello!';

useEffect(()=>{
    const audio = new Audio("/startUp.mp3");
    audio.volume = 0.3;
    audio.play().catch(() => {});
},[]);

useEffect(()=>{
    let current = 0;
    const interval = setInterval(() => {
        current += Math.random()*12;

        if(current >= 100) {
            current = 100;
            clearInterval(interval);
            setTimeout(()=> {
                onFinish();
            }, 1000)
        }

        setProgress(Math.floor(current));
    }, 120);
    return () => clearInterval(interval);
}, [onFinish]);

  return (
    <motion.div initial={{opacity: 1}} 
    animate={{opacity: progress === 100 ? 0:1, scale: progress === 100 ? 1.1:1, 
    filter: progress === 100 ? "blur(20px)":"blur(0px)"}}
    transition={{duration:1, ease: "easeInOut"}} 
    className="fixed inset-0 z-[99999] bg-[#e5e4e2] dark:bg-black flex items-center justify-center">
        <div className="flex flex-col items-center gap-6">

        {/* LOGO */}
        <div className="flex text-5xl lg:text-7xl font-bold">
          {text.split("").map((letter, index) => (
            <motion.span
              key={index} initial={{
                opacity: 0,
                y: 40,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                delay: index * 0.05,
                duration: 0.5,
              }}

              className={
                letter === "." ? "text-gray-500":"dark:text-white text-black [font-family:var(--font-clash)] lg:[font-family:var(--font-antar)]"}>{letter}
            </motion.span>
          ))}
        </div>

        {/* BAR */}
        <div className="w-[250px] h-[3px] bg-neutral-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full dark:bg-white bg-gray-400"
            animate={{width: `${progress}%`,}}/>
        </div>

        {/* TEXT */}
        <motion.p
          animate={{opacity: [0.5, 1, 0.5],}}
          transition={{repeat: Infinity, duration: 2,}}
          className="dark:text-gray-500 text-gray-800 text-center text-sm tracking-[0.3em] [font-family:var(--font-clash)]">
          {progress}% — INITIALIZING <br/> loading case studies and architecture...
        </motion.p>
      </div>
    </motion.div>
  )
}
