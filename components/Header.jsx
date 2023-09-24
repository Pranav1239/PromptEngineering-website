import Link from "next/link"
import {AiFillHome , AiFillBulb} from 'react-icons/ai'
import {BiSolidBook} from 'react-icons/bi'
import {FaQuestion} from 'react-icons/fa'
export default function Header() {

  return (
    <div>
   <nav className="overflow-hidden bg-black flex p-4 justify-center items-center">
        <div className="flex flex-row justify-center">
            <Link className="text-white hover:text-pink-500 lg:text-2xl mx-6"  href={"/"}>
              <AiFillHome />
              </Link>
            <Link className="text-white hover:text-pink-500 lg:text-2xl mx-6"  href={"/PromptEngineering"}>
              <AiFillBulb />
            </Link>
            <Link className="text-white hover:text-pink-500 lg:text-2xl mx-6"  href={"/Documentation"}>
              <BiSolidBook />
              </Link>
            <Link className="text-white hover:text-pink-500 lg:text-2xl mx-6"  href={"/Examples"}>
              <FaQuestion />
              </Link>
        </div>
    </nav>
    <hr id="hr-nav" />
    </div>

  )
}
