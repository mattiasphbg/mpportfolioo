import { Mail } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "src/components/ui/avatar";
import { Badge } from "src/components/ui/badge";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
} from "src/components/ui/card";
import Link from "next/link";

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
      <section className="mt-8 w-full">
        <h2 className="mb-4 ml-2 text-xl font-bold">Skills & Expertise</h2>
        <div className="flex flex-wrap justify-center gap-2">
          <Badge>Typescript</Badge>
          <Badge>Next.js</Badge>
          <Badge>React</Badge>
          <Badge>Prisma</Badge>
          <Badge>tRPC</Badge>
          <Badge>Clerk</Badge>
          <Badge>Planetscale</Badge>
          <Badge>tailwind</Badge>
          <Badge>Azure</Badge>
          <Badge>PowerApps</Badge>
        </div>
      </section>
      <section className="mt-8 w-full">
        <h2 className="mb-4 ml-2 text-xl font-bold">Experience</h2>
        <Card className="mb-4">
          <CardHeader>
            <CardTitle>Software Developer</CardTitle>
            <div>Future It Partner | Apr 2022 - Present</div>
          </CardHeader>
          <CardContent>
            Developed and maintained web applications using Typescript, Svelte,
            Azure, Powerapps, PowerAutomate etc.
          </CardContent>
        </Card>
        <Card className="mb-4">
          <CardHeader>
            <CardTitle>Software Developer</CardTitle>
            <div> B3 Kodify AB | 2021 - 2021</div>
          </CardHeader>
          <CardContent>
            Worked on JavaScript and Python (Django.) projects.
          </CardContent>
        </Card>
        <Card className="mb-4">
          <CardHeader>
            <CardTitle>Software Developer</CardTitle>
            <div> Rocketlabs | 2020 - 2020</div>
          </CardHeader>
          <CardContent>PHP: laravel</CardContent>
        </Card>
      </section>
      <section className="mt-8 w-full">
        <h2 className="mb-4 ml-2 text-xl font-bold">Current Projects</h2>
        <Card className="mb-4">
          <CardHeader>
            <CardTitle>Thoughtful gallery</CardTitle>
          </CardHeader>
          <CardContent>
            A virtual museum.
            <Link
              className="ml-2 underline"
              href="https://www.thoughtful-gallery.com/"
              target="_blank"
            >
              View Project
            </Link>
          </CardContent>
        </Card>
        <Card className="mb-4">
          <CardHeader>
            <CardTitle>Integration with Also</CardTitle>
          </CardHeader>
          <CardContent>
            Displaying information about customers' purchased packages and
            comparing it to the previous month's data to enhance the customer
            experience.
            <Link
              className="ml-2 underline"
              href="https://res.cloudinary.com/dxhfq1g84/image/upload/v1704364163/portfolio/meanwhile_ah5uc7.png"
              target="_blank"
            >
              View Project
            </Link>
          </CardContent>
        </Card>
        <Card className="mb-4">
          <CardHeader>
            <CardTitle>One Bridge</CardTitle>
          </CardHeader>
          <CardContent>
            hr solution: onboarding, offboarding etc.
            <Link
              className="ml-2 underline"
              href="https://www.onebridge.se/"
              target="_blank"
            >
              View Project
            </Link>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
