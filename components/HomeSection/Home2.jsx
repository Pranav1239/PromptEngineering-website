"use client"
import {RiComputerLine} from "react-icons/ri"
import {MdGamepad} from "react-icons/md"
import {SiGamejolt} from "react-icons/si"
import {FaInstagram, FaTwitter} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
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
        <section className="mt-8">
            <div>
            <h1 className="text-3xl text-center lg:text-5xl font-extrabold"><span className="text-purple-600">Prompt engineering</span> makes your work easier. This website was 50% made with ChatGPT and Bard, which is useful.</h1>
            </div>
        </section>
        <div className="mt-4">
            <h1 className="text-3xl text-center lg:text-4xl font-extrabold">Contact<span className="text-purple-600">Me</span></h1>
        </div>
        <div className=" mt-4 flex justify-center items-center">
        <p className="mx-2 hover:text-purple-600"><FaInstagram size={30} /></p>
        <p className="mx-2 hover:text-purple-600"><FaGithub size={30} /></p>
        <p className="mx-2 hover:text-purple-600"><FaTwitter size={30} /></p>
        </div>  
        <br />
        <div className=""></div>
    </motion.div>
  )
}
