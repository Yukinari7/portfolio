import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

const ScrollUp = () => {
const [isVisible, setIsVisible] = useState(false);
useEffect(()=>{
    const toggleVisiblity =()=>{
        if(window.scrollY>300) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }
    window.addEventListener("scroll", toggleVisiblity)
    return()=>window.removeEventListener("scroll", toggleVisiblity)
},[])

const scrollUp =()=> {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
  return (
    <div>
        <button onClick={scrollUp} className={`bg-neutral-800 border border-gray-700 dark:bg-white flex text-white dark:text-black 
            rounded-full w-12 h-12 items-center justify-center focus:outline-none transition-all duration-300 
            ease-in-out ${isVisible ? "opacity-100":"opacity-0"}`}><FaArrowUp className="animate-bounce w-4 h-4 md:w-5 md:h-5"/>
        </button>
    </div>
  )
}

export default ScrollUp