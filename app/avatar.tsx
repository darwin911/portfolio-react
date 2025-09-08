import ProfilePic from "@/public/profilepic_optimized.webp";
import Image from "next/image";

export default function Avatar() {
  return (
    <Image
      src={ProfilePic}
      alt="Darwin Smith headshot"
      className="size-20 rounded-full border-2 border-card-foreground object-cover shadow-xs sm:size-28 h-sm:size-16"
      width={112}
      height={112}
      placeholder="blur"
      sizes="(max-width: 640px) 80px, (max-width: 768px) 112px, 112px"
    />
  );
}
