"use client"
import {RiComputerLine} from "react-icons/ri"
import {MdGamepad} from "react-icons/md"
import {SiGamejolt} from "react-icons/si"
import { motion } from "framer-motion";
export default function Home2() {
  return (
    <motion.div
    initial={{ x: 0, y: 0, opacity: 0 }}
    animate={{ x: 0, y: 0, opacity: 1 }}
    transition={{ duration: 3 }}
    className="bg-gray-950 mt-12"
    >
        <div className="flex justify-start">
        <hr className="w-96" />
        </div>
        <div className="flex justify-evenly items-center lg:mt-4 mb-8 flex-col lg:flex-row">
        <div className="mx-4 my-4 flex justify-center items-center flex-col">
                <RiComputerLine size={80} className="mb-3" />
            <p className="w-96 text-sm text-center"><b>Prompt engineering</b> is the art of designing prompts to elicit desired responses from AI models.</p>
            </div>
            <div className="mx-4 my-4 flex justify-center items-center flex-col">
                <MdGamepad size={80} className="mb-3"  />
            <p className="w-96 text-sm text-center"><b>Prompt</b> is an instruction or input given to an AI model to guide its response.</p>
            </div>
            <div className="mx-4 my-4 flex justify-center items-center flex-col">
                <SiGamejolt size={80} className="mb-3" />
            <p className="w-96 text-sm text-center"><b>Prompt engineering</b> is fast because it is a lightweight and flexible approach to controlling AI models.</p>
            </div>
        </div>
        <div className="flex justify-end">
        <hr className="w-96" />
        </div>
        <br />
        <div className=""></div>
    </motion.div>
  )
}
