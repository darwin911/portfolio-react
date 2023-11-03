import { Card } from "@/components/ui/card";
import Pong from "@/public/pong.png";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="relative flex h-full flex-col items-center justify-center overflow-hidden px-4 py-8 sm:px-8 sm:py-20 md:py-24">
      <h1 className="text-3xl font-semibold tracking-tighter text-stone-800 drop-shadow-heading dark:text-zinc-50  dark:drop-shadow-heading-light sm:text-5xl md:text-7xl lg:whitespace-nowrap">
        Projects
      </h1>
      <div className="flex flex-col items-center pt-10">
        <Link href="https://pong-js.netlify.app/" target="_blank">
          <Image src={Pong} alt="" className="w-96" />
        </Link>

        <p className="pt-3">
          Pong! was my first game. It was built with vanilla JavaScript.
        </p>
      </div>
    </main>
  );
}
