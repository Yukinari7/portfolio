"use client";
import { projectData } from "@/components/Data/data";
import FadeUp from "@/components/motion/FadeUp";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react"

const page = () => {
const [activeCategory, setActiveCategory] = useState("All");
const categories = ["All", "Web", "Mobile App"]
const filteredItems=projectData.filter((item)=>item.category === activeCategory)

const [activeCard, setActiveCard] = useState<number | null>(null);
  return (
    <div className="w-[90%] mx-auto py-20 xl:py-30">
      <div className="flex flex-col items-start justify-center gap-1">
        <FadeUp>
        <h1 className="text-4xl lg:text-6xl font-bold [font-family:var(--font-clash)] lg:[font-family:var(--font-antar)]">Projects.</h1>
        </FadeUp>
        <FadeUp delay={0.2}>
        <p>See all works that demonstrate technical depth.</p>
        </FadeUp>
      </div>
      <div className="flex flex-wrap items-center bg-transparent dark:bg-neutral-900 md:items-start justify-center w-fit gap-2 mt-7 mb-5 border rounded-full border-zinc-400 dark:border-zinc-800 p-1">
        {categories.map((category)=> {

          const isActive = activeCategory === category;

        return (
          <button key={category}
           onClick={()=>setActiveCategory(category)} 
           className={`relative px-4 text-base py-1 rounded-full transition-colors duration-300`}>
            {isActive && (
          
            <motion.span
            layoutId="categoryIndicator"
            className="absolute inset-0 rounded-full dark:bg-white bg-black dark:border border-gray-700 shadow-md"
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              bounce: 0.7,
            }}
          />
        )}

        {/* Text */}
        <span className={`relative z-10 ${isActive? "dark:text-black text-[#e5e4e2]" : "dark:text-gray-400 dark:hover:text-[#e5e4e2]"}`}>
          {category}
        </span>
        </button>
        )
        })}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {filteredItems.map((project, i)=>{
          const Icon = project.icon;
        
          return (
            <div key={project.id} className="relative group hover:-translate-y-1 transition-transform duration-300">
              <Link href={`/projects/${project.slug}`} className="absolute inset-0 z-10"/>
                <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, delay: i * 0.3 }} onTouchMove={()=> setActiveCard(2)} className={`${activeCard === 2 ? "border-white/20":""} bg-transparent dark:bg-neutral-900 border dark:border-zinc-800 border-gray-300 shadow-md hover:shadow-gray-800 transition-all duration-300 ease-in-out`}>
                  <div className="relative mb-3">
                    <div className="relative w-full overflow-hidden h-[150px]">
                    <Image src={project.image} alt="site" priority width={600} height={200} className="object-cover"/>
                      <p className="text-xs absolute top-6 left-6 border font-bold border-white/50 bg-white text-black px-2 w-fit">{project.status}</p>
                      <div className={`absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center 
                      justify-center z-9`}>
                        <p className="text-white flex items-center gap-2">
                          <Eye/>View Case Study
                        </p>
                      </div>
                      </div>
                  </div>
                    <div className="px-5 pb-5 space-y-2">
                      <p className="text-xs font-semibold text-gray-700 dark:text-gray-400 rounded-full flex items-center gap-1"><Icon size={12}/>{project.group}</p>
                        <div className="flex justify-between items-center">
                          <h3 className=" text-xl md:text-2xl font-semibold [font-family:var(--font-clash)] lg:[font-family:var(--font-antar)]">{project.label}</h3>
                            <div className="flex gap-2">
                            {project.links.map((link, index)=>{
                              const Icon = link.icon;
        
                              return (
                              <Link key={index} href={`/projects/${project.slug}`} className="active-scale:105"><Icon size={20} className="w-5 h-5"/></Link>
                              );
                            })}
                          </div>
                          </div>
                          <p className="text-sm dark:text-gray-400 text-gray-700">{project.description}</p>
                          <div className="flex flex-wrap gap-2 text-sm">
                            {project.tools.map((tool, index)=>{
                              const Icon = tool.icon;
                              return (
                              <div key={index} className="dark:bg-neutral-800 dark:text-gray-300 text-xs dark:border border-gray-700 p-1 rounded-full"><Icon size={25}/></div>
                              );
                              })}
                          </div>
                        </div>                
                    </motion.div>
                    </div>
                      )
                    })}
                  </div>
      </div>
  )
}

export default page