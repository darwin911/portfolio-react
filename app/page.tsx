import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center p-8 sm:p-20 md:p-24 h-full">
      <Image
        className="absolute top-0 left-0 bottom-0 -z-10 opacity-30 flex-grow object-cover min-h-screen"
        src="https://images.pexels.com/photos/2120040/pexels-photo-2120040.jpeg?auto=compress"
        alt="bg"
        width={3000}
        height={1987}
        priority
      />
      <div className="border-8 border-white/10 backdrop-blur-sm p-14 rounded-lg leading-none space-y-1  transition-all w-full max-w-lg">
        <h1 className="text-3xl text-zinc-600 drop-shadow">Darwin Smith</h1>
        <p className="drop-shadow-sm text-left text-zinc-700">
          Software Developer | Web
        </p>
      </div>
    </main>
  );
}
