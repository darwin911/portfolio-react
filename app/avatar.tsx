import ProfilePic from "@/public/profilepic_optimized.webp";
import Image from "next/image";

export default function Avatar() {
  return (
    <Image
      src={ProfilePic}
      alt="Darwin Smith headshot"
      className="size-20 rounded-full border-2 border-indigo-500 dark:border-indigo-300 object-cover sm:size-24 h-sm:size-16"
      width={100}
      height={100}
      placeholder="blur"
      sizes="(max-width: 640px) 80px, 96px"
    />
  );
}
