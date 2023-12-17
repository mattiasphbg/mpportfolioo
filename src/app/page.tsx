import { CardHeader, CardContent, Card } from "src/components/ui/card";
import { Badge } from "src/components/ui/badge";
import { Button } from "src/components/ui/button";
import { Label } from "src/components/ui/label";
import { Input } from "src/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "src/components/ui/dialog";

import AutoForm, { AutoFormSubmit } from "src/components/ui/auto-form";
import { HireMeSchema } from "./schemas/form";

import { FaLinkedinIn, FaDiscord } from "react-icons/fa";
import { TbBrandGithubCopilot } from "react-icons/tb";

import Image from "next/image";

// import { api } from "~/trpc/server";

export default async function Home() {
  return (
    <>
      <section className="w-full bg-gray-100 py-12 dark:bg-gray-800 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 text-center md:px-6">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Welcome to My Portfolio
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
              I am a web developer with a passion for creating beautiful and
              accessible experiences.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                  variant="outline"
                >
                  Hire Me
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Send Email</DialogTitle>
                  <DialogDescription>
                    To best assist you, please provide your name, phone number,
                    email address, and area of interest or project you need help
                    with. I will get back to you as soon as possible.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <AutoForm formSchema={HireMeSchema}></AutoForm>
                </div>

                {/* <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input
                      id="name"
                      defaultValue="Pedro Duarte"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      Email
                    </Label>
                    <Input
                      id="username"
                      defaultValue="@peduarte"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      Phone
                    </Label>
                    <Input
                      id="username"
                      defaultValue="+46"
                      className="col-span-3"
                    />
                  </div>
                </div> */}
                <DialogFooter>
                  <Button type="submit">Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            {/* 
            <Button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
              Hire Me
            </Button> */}
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32" id="about">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            About Me
          </h2>
          <p className="mt-4 max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
            I'm a developer with a keen eye for detail and a passion for making
            things beautiful. I love solving problems and bringing ideas to life
            in the browser.
          </p>
        </div>
      </section>
      <section
        className="w-full bg-gray-100 py-12 dark:bg-gray-800 md:py-24 lg:py-32"
        id="projects"
      >
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Projects
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="shadow-lg">
              <CardHeader>
                <h3 className="text-xl font-bold">Project 1</h3>
              </CardHeader>
              <CardContent>
                <Image
                  alt="Project 1"
                  className="h-[200px] w-full object-cover"
                  src="/placeholder.svg"
                  layout="responsive"
                  width={200}
                  height={200}
                />
                <p className="mt-4 text-gray-500">
                  This is a description of the project.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardHeader>
                <h3 className="text-xl font-bold">Project 2</h3>
              </CardHeader>
              <CardContent>
                <Image
                  alt="Project 2"
                  className="h-[200px] w-full object-cover"
                  src="/placeholder.svg"
                  layout="responsive"
                  width={200}
                  height={200}
                />
                <p className="mt-4 text-gray-500">
                  This is a description of the project.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardHeader>
                <h3 className="text-xl font-bold">Project 3</h3>
              </CardHeader>
              <CardContent>
                <Image
                  alt="Project 3"
                  className="h-[200px] w-full object-cover"
                  src="/placeholder.svg"
                  layout="responsive"
                  width={200}
                  height={200}
                />
                <p className="mt-4 text-gray-500">
                  This is a description of the project.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32" id="skills">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Skills
          </h2>
          <div className="mt-8 flex flex-wrap items-center space-x-4">
            <Badge className="rounded bg-blue-200 px-2 py-1 text-blue-700">
              JavaScript
            </Badge>
            <Badge className="rounded bg-blue-200 px-2 py-1 text-blue-700">
              React
            </Badge>
            <Badge className="rounded bg-blue-200 px-2 py-1 text-blue-700">
              Node.js
            </Badge>
            <Badge className="rounded bg-blue-200 px-2 py-1 text-blue-700">
              Tailwind
            </Badge>
            <Badge className="rounded bg-blue-200 px-2 py-1 text-blue-700">
              Powerapps
            </Badge>
            <Badge className="rounded bg-blue-200 px-2 py-1 text-blue-700">
              TypeScript
            </Badge>
          </div>
        </div>
      </section>
      <section
        className="w-full bg-gray-100 py-12 dark:bg-gray-800 md:py-24 lg:py-32"
        id="contact"
      >
        <div className="container px-4 text-center md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Contact Me
          </h2>
          <p className="mx-auto mt-4 max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
            Have a project in mind? Let's make something great together. Get in
            touch with me.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <a
              className="text-gray-500 hover:text-blue-600"
              href="https://www.linkedin.com/in/mattias-pettersson-a97b05184/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaLinkedinIn className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              className="text-gray-500 hover:text-blue-600"
              href="https://discord.com/users/253514757565448193"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaDiscord className="h-6 w-6" />

              <span className="sr-only">Discord</span>
            </a>
            <a
              className="text-gray-500 hover:text-blue-600"
              href="https://github.com/mattiasphbg
              "
              rel="noopener noreferrer"
              target="_blank"
            >
              <TbBrandGithubCopilot className="h-6 w-6" />

              <span className="sr-only">GitHub</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

// async function CrudShowcase() {
//   // const latestPost = await api.post.getLatest.query();

//   return (
//     <div className="w-full max-w-xs">
//       {/* {latestPost ? (
//         <p className="truncate">Your most recent post: {latestPost.name}</p>
//       ) : (
//         <p>You have no posts yet.</p>
//       )} */}

//       <CreatePost />
//     </div>
//   );
// }
