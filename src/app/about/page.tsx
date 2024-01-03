import { Mail } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "src/components/ui/avatar";

export default function Page() {
  return (
    <>
      <div className="flex flex-col items-center p-4">
        <a
          href="https://res.cloudinary.com/dxhfq1g84/image/upload/v1704200614/portfolio/Mp_hgd92f.png"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Avatar className="h-32 w-32 overflow-hidden">
            <AvatarImage
              alt="Image Of Mattias Pettersson"
              src="https://res.cloudinary.com/dxhfq1g84/image/upload/v1704200614/portfolio/Mp_hgd92f.png"
              className="transform-gpu cursor-pointer transition-transform hover:scale-125"
            />
            <AvatarFallback>Me</AvatarFallback>
          </Avatar>
        </a>
        <h1 className="mt-4 text-2xl font-bold">Mattias Pettersson</h1>
        <p className="mt-2 text-center text-gray-600">
          Full-stack Developer | T3 Stack | 3+ years of experience
        </p>
      </div>
      <section className="mt-8 w-full">
        <h2 className="mb-4 ml-2 text-xl font-bold">About Me</h2>
        <p className="text-center text-gray-600">
          I am a passionate full-stack developer with over 3 years of
          experience. I enjoy working with the T3 stack and love building
          because it allows me to create whatever I want. In my free time, I
          work on a virtual museum where every item tells the history of a
          country over centuries. I am always trying to stay up to date with the
          newest tools that interest me.
        </p>
      </section>
    </>
  );
}
