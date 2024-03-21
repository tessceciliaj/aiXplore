"use client"
import { motion } from 'framer-motion';
import React from 'react'
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Heading = ({text1, text2}) => {
    const [text, count] = useTypewriter({
        words: [text1, text2],
        loop: true,
        delaySpeed: 2000,
      });

    return (
      <motion.div
      initial={{
        z: -500,
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1.5,
      }}
    >
      <h1 className="text-lg md:text-5xl lg:text-6xl text-lightGray font-semibold px-10">
      <span className="mr-3">{text}</span>
      <Cursor cursorColor="#5d00ff" />
    </h1>
    </motion.div>
  )
}

export default Heading