import { Button } from "src/components/ui/button";
import Link from "next/link";

export default function ContactSection() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-6 bg-black px-4 py-24">
      <h1 className="text-center text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
        <span className="inline-block bg-gradient-to-b from-white to-rose-200 bg-clip-text text-transparent">
          GET IN TOUCH
        </span>
      </h1>
      <Link href="mailto:mattiasp@hotmail.com">
        <Button
          variant="outline"
          className="rounded-full border-neutral-800 bg-neutral-900/50 text-neutral-400 hover:bg-neutral-900 hover:text-white"
        >
          mattiasp@hotmail.com
        </Button>
      </Link>
    </div>
  );
}
