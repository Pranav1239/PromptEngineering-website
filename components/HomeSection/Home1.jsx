"use client"
import Link from "next/link";
import Image from "next/image";
import Photo1 from "../../assets/adaaa.png";
import { motion } from "framer-motion";
export default function Home1() {
  const variants = {
    visible: (custom) => ({
      opacity: 1,
      transition: { delay: custom * 0.2 }
    })
  }
  return (
    <div className="bg-gray-950 flex justify-evenly items-center lg:flex-row flex-col overflow-hidden">
        <motion.div
        initial={{ x: 0, y: 0, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 2 }}
        className="overflow-hidden"
      >
        <br />
        <Image src={Photo1} alt="ImageNotFound" />
      </motion.div>

      <div className="lg:w-[500px] mx-12">
      <motion.div
        initial={{ x: 0, y: -100, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div>
          <h1 className="text-5xl lg:text-7xl my-4 font-bold cursor-default">
            PROMPT <span className="text-purple-600">ENGINEERING</span>
          </h1>
          <p className="text-lg p-3 font-bold cursor-default">
            Prompt engineering is useful in the future because it allows us to
            better communicate with and control generative AI models, which are
            becoming increasingly powerful and sophisticated. By carefully
            crafting prompts, we can guide these models to generate more
            accurate, relevant, and creative content.
          </p>
        </div>
        <div className="mt-8 mb-4">
          <Link
            href={"/Documentation"}
            className="bg-gray-900 hover:bg-slate-800 px-8 py-5 rounded-full"
          >
            See More
          </Link>
        </div>
      </motion.div>
      </div>
    </div>
  );
}
