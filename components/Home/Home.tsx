"use client"

import Hero from "@/app/HomePage/Hero/Hero"
import Cards from "@/app/HomePage/Cards/cards"
import Projects from "@/app/HomePage/Projects/projects"
import Tech from "@/app/HomePage/Tech/tech"
import { useState, useEffect } from "react";

const Home = () => {
  const [heroReady, setHeroReady] = useState(false);

  useEffect(() => {
    setHeroReady(true);
  }, []);

  return (
    <div className="overflow-hidden">
      <Hero startAnimation={heroReady} />
      <Cards/>
      <Projects/>
      <Tech/>
    </div>
  )
}

export default Home