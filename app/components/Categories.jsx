"use client"
import { BrainCircuit, Code, Palette } from "lucide-react"
import Button from "./Button"

const Categories = () => {
  return (
    <div className="flex flex-col justify-end items-end w-full max-w-7xl gap-4 md:flex md:flex-row md:justify-between" >
      <Button href="AiTools" icon={<BrainCircuit />} text="AiTools" />
      <Button href="/Art" icon={<Palette />} text="GenArt" />
      <Button href="/NeuralNetwork" icon={<Code />} text="Neural Network" />
    </div> 

  )
}

export default Categories