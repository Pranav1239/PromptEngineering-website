import PEXam1 from "../../assets/Synonyms-Provider-1.jpg";
import Image from "next/image";
export default function page() {
  return (
    <div className="bg-gray-950">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <section>
          <div>
            <h1 className="text-4xl text-center font-extrabold leading-tight text-white">
              Examples
            </h1>
          </div>
        </section>
        <section>
          <div>
            <h2 class="mt-8 text-5xl font-bold text-purple-600">
              To give a best prompt, you should consider the following:
            </h2>

            <ul class="list-disc font-medium mt-4">
              <li class="ml-4 mt-2 mb-2 p-3">
                <b>Be clear and concise.</b> What do you want the AI to do? What
                kind of output are you looking for? State your request in a
                clear and concise way, avoiding ambiguity.
              </li>
              <li class="ml-4 mt-2 mb-2 p-3">
                <b>Provide context. </b> The more context you provide, the
                better the AI will be able to understand your request and
                generate a satisfying response. This includes providing
                information about the topic, the desired tone and style, and any
                other relevant details.
              </li>
              <li class="ml-4 mt-2 mb-2 p-3">
                <b>Be specific.</b> The more specific you are, the better the AI
                will be able to fulfill your request. For example, instead of
                asking the AI to write a poem, ask it to write a poem about a
                lonely robot in a futuristic city.
              </li>
              <li class="ml-4 mt-2 mb-2 p-3">
                <b>Use examples.</b> If you have a specific example of the type
                of output you're looking for, provide it to the AI. This will
                help the AI to better understand your expectations.
              </li>
              <li class="ml-4 mt-2 mb-2 p-3">
                <b>Be interactive.</b> Don't be afraid to experiment with
                different prompts and refine them based on the AI's responses.
                This is a great way to get the best possible results.
              </li>
            </ul>
          </div>
        </section>
        <section>
          <div>
            <h2 class="mt-8 text-3xl font-bold text-purple-600">
              Additional tips
            </h2>

            <ul class="list-disc font-medium mt-4">
              <li class="ml-4 mt-2 mb-2 p-3">
                <b>Start with an action word.</b> This will tell the AI what you
                want it to do. For example, "write a poem," "generate a code
                snippet," or "translate the following sentence into Spanish."
              </li>
              <li class="ml-4 mt-2 mb-2 p-3">
                <b>Use role play.</b> This can help to provide the AI with more
                context and make your request more engaging. For example,
                instead of saying "write a story about a robot," you could say
                "I'm a robot who just discovered that I'm alive. Write a story
                about my adventures."
              </li>
              <li class="ml-4 mt-2 mb-2 p-3">
                <b>Use references.</b> If you have a specific reference in mind,
                such as a book, movie, or article, you can include it in your
                prompt. This will help the AI to understand the tone and style
                you're going for.
              </li>
              <li class="ml-4 mt-2 mb-2 p-3">
                <b>Use double quotes.</b> This can be helpful for distinguishing
                between different parts of your prompt. For example, if you're
                asking the AI to write a poem about a specific topic, you could
                use double quotes to enclose the topic. This will help the AI to
                understand that you want it to focus on that specific topic.
              </li>
            </ul>
          </div>
        </section>
        <hr />
        <section className="mt-4">
          <Image src={PEXam1} alt="Image Not found" />
        </section>
        <section>
          <div>
            <h2 className="mt-8 text-3xl  font-bold leading-tight text-white">
              Example-1
            </h2>
          </div>
          <div>
            <h5 className="font-semibold mt-4 mb-2 text-2xl">
              <span className="text-purple-600 font-extrabold">Prompt:</span>{" "}
              What is the difference between a cat and a dog?
            </h5>
            <p className="font-semibold text-xl">
              <span className="text-purple-600 font-extrabold text-2xl">
                Output:{" "}
              </span>
              A cat is a small, furry mammal that is typically domesticated.
              Cats have four legs, a tail, and whiskers. They are carnivores,
              and their diet consists mainly of meat. Dogs are also small, furry
              mammals that are typically domesticated. However, dogs are larger
              than cats and have a wider range of physical characteristics. Dogs
              are also omnivores, and their diet can include both meat and
              plants.
            </p>
          </div>
        </section>
        <section>
          <div>
            <h2 className="mt-8 text-3xl  font-bold leading-tight text-white">
              Example-2
            </h2>
          </div>
          <div>
            <h5 className="font-semibold mt-4 mb-2 text-2xl">
              <span className="text-purple-600 font-extrabold">Prompt:</span>{" "}
              Write a poem about a cat sitting by a window.
            </h5>
            <p className="font-semibold text-xl">
              <span className="text-purple-600 font-extrabold text-2xl">
                Output:{" "}
              </span>
              <br />
              <br />
              The cat sits by the window,
              <br />
              Watching the world go by.
              <br />
              Her eyes are bright and curious,
              <br />
              Her tail flicks gently to the side.
              <br />
              <br />
              <br />
              She sees the birds flying past,
              <br />
              The squirrels scampering on the lawn.
              <br />
              She watches the people walking by,
              <br />
              And the cars driving up and down.
              <br />
              <br />
              <br />
              The cat is content in her little world,
              <br />
              Sitting by the window.
              <br />
              She is safe and warm,
              <br />
              And she has everything she needs.
              <br />
            </p>
          </div>
        </section>
        <div className="mt-4">
        <hr />
        </div>
      <section>
      <h2 class="mt-8 text-5xl font-bold text-purple-600">
              Task
            </h2>
            <h5 class="mt-8 text-5xl font-bold text-purple-600">
              Try Your Own in chatgpt or googlebard
            </h5>
      </section>
      </div>
    </div>
  );
}
