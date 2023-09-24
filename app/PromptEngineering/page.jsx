import Image from "next/image";
import PE1 from "../../assets/pE12.jpg";
import Link from "next/link";
export default function page() {
  return (
    <div className="bg-gray-950">
      <div className="Main-topic-PE flex justify-center flex-col items-center">
        <section>
          <div className="mt-8 text-center">
            <h1 className="text-5xl font-extrabold">
              What is {" "}
              <span className="text-purple-600">Prompt Engineering?</span>
            </h1>
          </div>
          <div className="mt-4 text-center lg:w-[950px]">
            <p className="text-lg font-medium">
            Prompt engineering is the process of designing and optimizing prompts to guide the behavior of large language models (LLMs). LLMs are trained on massive datasets of text and code, and they can be used to perform a wide range of tasks, such as generating text, translating languages, and writing different kinds of creative content. However, LLMs can also generate outputs that are inaccurate, irrelevant, or even harmful. Prompt engineering can help to mitigate these risks and ensure that LLMs produce the desired results.
            </p>
          </div>
        </section>
        {/* <section>
        <div className="mt-8">
            <h1 className="text-5xl font-extrabold">
                <span className="text-purple-600">Use of{" "}</span>
              Prompt
              Engineering?
            </h1>
          </div>
          <div className="mt-4 text-center lg:w-[700px]">
            <p className="text-lg font-medium">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
              illo sunt praesentium doloremque eaque modi temporibus facere
              voluptatum beatae repudiandae illum tempore
            </p>
          </div>
        </section> */}
        <section>
        <Image src={PE1} alt="Image Not Found" width={700} />
        </section>
      </div>
    </div>
  );
}
