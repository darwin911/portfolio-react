import Image from "next/image";
// import GithubLight from "@/public/github-mark-white.svg";
import GithubDark from "@/public/github-mark.svg";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex h-full flex-col items-center justify-center overflow-hidden p-8 sm:p-20 md:p-24">
      <Image
        className="absolute inset-y-0 left-0 -z-10 min-h-full grow object-cover opacity-30"
        src="https://images.pexels.com/photos/2120040/pexels-photo-2120040.jpeg?auto=compress"
        alt="bg"
        width={3000}
        height={1987}
        priority
      />
      <div className="mt-10 w-full max-w-7xl">
        <div className="flex w-full max-w-3xl justify-between space-y-1 rounded-lg border-8 border-white/10 p-14 leading-none shadow-lg backdrop-blur transition-all">
          <div>
            <h1 className="text-2xl font-semibold tracking-tighter text-stone-800 drop-shadow-heading sm:text-4xl md:text-7xl">
              Darwin Smith
            </h1>
            <p className="text-left text-sm opacity-50 drop-shadow-sm sm:text-xl">
              Software & Web Development
            </p>
          </div>
          <div className="absolute bottom-5 right-5">
            <Link
              href="https://www.github.com/darwin911"
              className="flex flex-col items-center justify-center gap-2"
            >
              <Image
                src={GithubDark}
                alt="Darwin's Github Account"
                width={24}
              />
              <small>Github</small>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
