"use client"
import { motion } from "framer-motion"
import Link from "next/link"

const Animation = () => {
  return (
  <motion.div className="flex flex-col md:flex-row items-center justify-center w-full h-screen gap-8">
      <button> Playground</button>
    <Link href="/">
      <button> Homepage </button>
    </Link> 
    <Link href="/Illusion">
    <button>
      Illusion
    </button>
    </Link>
  </motion.div>
  )
}

export default Animation