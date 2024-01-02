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
    </>
  );
}
