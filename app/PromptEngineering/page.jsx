import Image from "next/image";
import PE1 from "../../assets/pE12.jpg";
import Link from "next/link";
export default function page() {
  return (
    <div className="bg-gray-950">
      <div className="Main-topic-PE flex justify-center flex-col items-center">
        <section className=" opacity-40">          
        <Image src={PE1} alt="Image Not Found" width={700} />
        </section>
      </div>
    </div>
  );
}
