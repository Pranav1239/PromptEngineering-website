import Link from "next/link"
import { FaInstagram , FaGithub , FaLinkedin , FaTwitter } from "react-icons/fa"


export default function Footer() {
  return (
    <div>
      <div className="mt-10 w-full flex items-center justify-center">
        <div className="md:w-2/3 w-full px-4 text-white flex flex-col">
          <div className="w-full text-7xl font-bold">
            <h1 className="w-full md:w-2/3">
              How can we help you. get in touch
            </h1>
          </div>
          <div className="flex mt-8 flex-col md:flex-row md:justify-between">
            <p className="w-full md:w-2/3 text-white">
              Do you want to talk to the maker of this website? Contact me using
              the link below. Feel free to collaborate or simply chat.
              <span className="text-yellow-600">Have a great day!</span>
            </p>
          </div>
          <div className="flex flex-col">
            <div className="flex mt-24 mb-12 flex-row justify-between">
              <Link
                href={"https://www.instagram.com/pranav._pk9"}
                target="_blank"
                className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase"
              >
                <FaInstagram />
              </Link>
              <Link
                href={"https://twitter.com/pranav7_X"}
                target="_blank"
                className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase"
              >
                <FaTwitter />
              </Link>
              <Link
                href={"https://github.com/Pranav1239"}
                target="_blank"
                className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase"
              >
                <FaGithub />
              </Link>
              <Link
                href={"https://www.linkedin.com/in/pk919"}
                target="_blank"
                className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase"
              >
                <FaLinkedin />
              </Link>
            </div>
            <hr className="border-gray-600" />
          </div>
        </div>
      </div>
    </div>
  )
}
