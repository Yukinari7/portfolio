import { useEffect, useState } from "react"

export default function ViewCounter() {
const [views, setViews] = useState<number | null>(null);
useEffect(()=> {
const storageKey = 'has_visited_portfolio';
const hasVisited = localStorage.getItem(storageKey);
const endpoint = hasVisited ? 'https://abacus.jasoncameron.dev/get/ememprinceson.vercel.app/home-views':'https://abacus.jasoncameron.dev/hit/ememprinceson.vercel.app/home-views'
    fetch(endpoint)
    .then((res)=> res.json())
    .then((data)=> {
        setViews(data.value);

        if (!hasVisited) {
            localStorage.setItem(storageKey, 'true');
        }
    })  
    .catch((err)=> console.error("Error fetching view count:", err))
},[])
  return (
    <div className="w-[90%] mx-auto justify-center pb-15 text-sm text-gray-600 dark:text-gray-400">{views !== null ? (<span>Global Reach: {views.toLocaleString()} visitors.</span>):(<span>Global Reach: --- visitors</span>)}</div>
  )
}
