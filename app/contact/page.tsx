import { EnvelopeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="relative flex h-full flex-col items-center justify-center overflow-hidden px-4 py-8 sm:px-8 sm:py-20 md:p-0 h-md:py-6 h-sm:py-4">
      <div className="grid size-full place-items-center sm:grid-cols-2">
        <div>
          <h1 className="text-3xl font-semibold tracking-tighter text-stone-800 drop-shadow-heading dark:text-zinc-50  dark:drop-shadow-heading-light sm:text-5xl md:text-7xl lg:whitespace-nowrap h-lg:text-4xl h-md:text-3xl h-sm:text-2xl">
            Contact
          </h1>
        </div>
        <div className="flex size-full items-center justify-center bg-card invert">
          <ul>
            <li className="flex items-center gap-2">
              <span className="sr-only">Email:</span>
              <EnvelopeIcon className="size-10" />
              <Link href="mailto:darwinpsmith@gmail.com" target="_blank">
                darwinpsmith@gmail.com
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
