
"use client"
import Link from "next/link"
import { motion } from "framer-motion";

const Categories = () => {
  return (

    <div
    className="flex flex-col justify-end items-end w-full max-w-7xl gap-4 md:flex md:flex-row md:justify-between"
  >
        <Link href="/animation">
        <button
        >Animation</button>
        </Link>
         <Link href="/">
         <button>Video</button>
        </Link> 
       <Link href="/">
       <button>Productivity</button>
        </Link>
        <Link href="/">
        <button>Sound</button>
        </Link> 
       </div> 

  )
}

export default Categories