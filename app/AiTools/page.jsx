"use client"
import { motion } from "framer-motion"
import Button from "../components/Button"
import { DoorOpen, Shell } from "lucide-react"

const Animation = () => {
  return (
  <motion.div className="flex flex-col md:flex-row items-center justify-center w-full h-screen gap-8">
      <Button href="/" icon={<DoorOpen />} text="Homepage" />
      <Button href="/Illusion" icon={<Shell />} text="Illusion" />
  </motion.div>
  )
}

export default Animation