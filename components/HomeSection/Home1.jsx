import Image from "next/image";
import Photo1 from "../../assets/adaaa.png";
import Link from "next/link";
export default function Home1() {
  return (
    <div className="bg-gray-950 flex justify-evenly items-center lg:flex-row flex-col overflow-hidden">
      <div className="overflow-hidden">
        <br />
        <Image src={Photo1} alt="blabla" />
      </div>
      <div className="lg:w-[500px] mx-12">
        <div>
          <h1 className="text-5xl lg:text-7xl my-4 font-bold cursor-default">PROMPT <span className="text-purple-600">
          ENGINEERING</span></h1>
          <p className="text-lg p-3 font-bold cursor-default">
          Prompt engineering is useful in the future because it allows us to better communicate with and control generative AI models, which are becoming increasingly powerful and sophisticated. By carefully crafting prompts, we can guide these models to generate more accurate, relevant, and creative content.
          </p>
        </div>
        <div className="mt-8 mb-4">
          <Link href={"/Documentation"} className="bg-gray-900 hover:bg-slate-800 px-8 py-5 rounded-full" >
          See More
          </Link>
        </div>
      </div>
    </div>
  );
}
