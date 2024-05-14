"use client"
import { motion } from "framer-motion"
import Button from "../components/Button"
import { Box, DoorOpen } from "lucide-react"

const Art = () => {
  return (
    <motion.div className="flex flex-col md:flex-row items-center justify-center w-full h-screen gap-8">
        <Button href="/FlutterAnimation" icon={<DoorOpen />} text="Flutter Animation" />
        <Button href="/Three" icon={<Box />} text="Multiple Window 3D" />
    </motion.div>
    )
}

export default Art