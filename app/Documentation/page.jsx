import Image from "next/image";
import LLMIMG from "../../assets/page-1.jpg";
import Link from "next/link";
export default function page() {
  return (
    <div className="bg-gray-950">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <section>
          <div>
            <h1 className="text-4xl text-center font-extrabold leading-tight text-white">
              Documentation
            </h1>
          </div>
        </section>
        <div>
          <h1 className="text-3xl font-bold leading-tight text-purple-600">
            Prompt Engineering Basics
          </h1>

          <p className="mt-4 text-lg text-white">
            Prompt engineering is the process of designing and optimizing
            prompts to guide the behavior of large language models (LLMs). LLMs
            are a type of artificial intelligence that can generate and
            understand human language. They are trained on massive datasets of
            text and code, which allows them to perform a wide range of tasks,
            such as translation, summarization, and question answering.
          </p>
        </div>

        <div>
          <h2 className="mt-8 text-2xl font-bold leading-tight text-purple-600">
            Why is prompt engineering important?
          </h2>

          <p className="mt-4 text-lg text-white">
            Prompt engineering is important for a number of reasons. First, it
            can help you to get the most out of LLMs. By carefully designing
            your prompts, you can guide the model to produce results that are
            more relevant to your needs.
          </p>
        </div>

        <div>
          <h2 className="mt-8 text-2xl font-bold leading-tight text-purple-600">
            How to design effective prompts
          </h2>

          <p className="mt-4 text-lg text-white">
            When designing prompts, it is important to be as specific and clear
            as possible. The prompt should clearly define what you want the LLM
            to do, and it should provide all of the necessary information to
            complete the task. For example, if you want the LLM to generate a
            summary of a news article, the prompt should include the title and
            URL of the article, as well as any other relevant information.
          </p>

          <p className="mt-4 text-lg text-white">
            Second, prompt engineering can help you to improve the quality of
            the output from LLMs. By providing the model with clear and concise
            instructions, you can help it to avoid making mistakes and to
            generate more polished results.
          </p>

          <p className="mt-4 text-lg text-white">
            Third, prompt engineering can help you to use LLMs for more creative
            and innovative tasks. By experimenting with different prompt formats
            and styles, you can push the boundaries of what LLMs can do.
          </p>
        </div>

        <div>
          <h1 className="text-3xl font-bold mt-4 leading-tight text-purple-600">
            What is LLM?
          </h1>

          <p className="mt-4 text-lg text-white">
            LLM in prompt engineering stands for large language model. LLMs are
            a type of artificial intelligence (AI) model that can generate and
            understand human language. They are trained on massive datasets of
            text and code, which gives them a broad understanding of the world
            and the ability to generate text in a variety of different formats.
            <br />
            <br />
            Prompt engineering is the process of designing prompts that guide
            LLMs to generate desired outputs. A good prompt engineer can help
            organizations get the most out of their LLM AI models by designing
            prompts that produce high-quality and relevant results.
          </p>
        </div>
        <div className="mt-4 mb-4">
          <Image src={LLMIMG} alt="Image Not found" />
        </div>
        <div>
          <h2 className="mt-2 mb-4 text-2xl font-medium leading-tight text-white">
            Check Some Examples{" "}
            <Link
              href={"/Examples"}
              className="text-blue-500 underline text-xl"
            >
              Click here
            </Link>
          </h2>
        </div>
        <hr />

        <h2 className="mt-8 text-2xl font-bold leading-tight text-purple-600">
          10 tips for effective prompt engineering
        </h2>

        <ol className="mt-4 list-decimal pl-4 text-lg text-white">
          <li>Be specific.</li>
          <li>Provide context.</li>
          <li>Use examples.</li>
          <li>Use keywords.</li>
          <li>Break down complex tasks.</li>
          <li>Use feedback.</li>
          <li>Experiment.</li>
          <li>Use the right LLM.</li>
          <li>Use a prompt engineering tool.</li>
          <li>Have fun!</li>
        </ol>

        <h2 className="mt-8 text-2xl font-bold leading-tight text-purple-600  ">
          10 topics in prompt engineering
        </h2>

        <ol className="mt-4 list-decimal pl-4 text-lg text-white">
          <li>Prompt formats</li>
          <li>Prompt styles</li>
          <li>Prompt context</li>
          <li>Prompt keywords</li>
          <li>Prompt examples</li>
          <li>Multi-step prompts</li>
          <li>Prompt feedback</li>
          <li>Prompt evaluation</li>
          <li>Prompt engineering tools</li>
          <li>Prompt engineering best practices</li>
        </ol>

        <h2 className="mt-8 text-2xl font-bold leading-tight text-purple-600">
          Conclusion
        </h2>

        <p className="mt-4 text-lg text-white">
          Prompt engineering is an important skill for anyone who wants to use
          LLMs effectively. By carefully crafting prompts, you can influence the
          model to produce more accurate, informative, and creative results.
        </p>
        <div>
        <h2 className="mt-8 text-2xl font-bold leading-tight">
          <span className="text-purple-600">Learn ChatGPT from Documentation </span>
          <Link 
          href={"https://platform.openai.com/docs/introduction/overview"} 
          target="_blank"
          className="text-blue-700 underline cursor-pointer"
          >Click here</Link>
        </h2>
        </div>
      </div>
    </div>
  );
}
