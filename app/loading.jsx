import { BiLoaderAlt } from "react-icons/bi"
export default function loading() {
  return (
    <div className=" bg-gray-950 flex h-screen items-center justify-center">
        <div className="loader">
        <BiLoaderAlt width={550} height={550} />
        </div>
    </div>
  )
}
