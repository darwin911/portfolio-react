import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import ProfilePic from "@/public/profilepic_white-bg.jpg";

export default function AboutPage() {
  return (
    <main className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center p-8 sm:p-20 md:px-0 md:py-24 ">
      <h1 className="mb-20 text-7xl font-bold tracking-tighter drop-shadow-heading">
        About
      </h1>
      <Card className="max-w-3xl overflow-scroll sm:flex sm:overflow-auto">
        <CardHeader className="w-full flex-row border-b sm:border-b-0 sm:border-r">
          <div className="flex w-full flex-col items-center gap-4">
            <Image
              src={ProfilePic}
              alt="Darwin Smith headshot"
              className="border-current/50 h-28 w-28 rounded-full border-4 object-cover shadow-sm"
              width={96}
              height={96}
            />
            <div className="flex flex-col items-center justify-center rounded px-2 py-0">
              <CardTitle className="truncate">Darwin Smith</CardTitle>
              <CardDescription className="truncate">
                Software Developer
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-10">
          <p className="leading-relaxed tracking-tighter">
            As a software engineer with 4 years of experience, I specialize in
            building modern web applications using cutting-edge technology
            stacks. With a keen eye for design and user experience, I have a
            track record of delivering responsive front-end and full-stack
            solutions that meet and exceed client expectations. If you are
            seeking a dynamic and innovative software engineer to join your
            team, I would love to discuss how my skills and experience can help
            drive your success.
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
