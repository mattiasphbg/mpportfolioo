import React from "react";

import { CardHeader, CardContent, Card } from "src/components/ui/card";
import { Badge } from "src/components/ui/badge";

import { FaLinkedinIn, FaDiscord } from "react-icons/fa";
import { TbBrandGithubCopilot } from "react-icons/tb";

import { HireMeSection } from "src/components/hireMe/hireMeSection";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <HireMeSection
        title="Welcome"
        subTitles="My name is Mattias, and I'm a passionate full-stack developer driven by the desire to create anything I imagine."
      />
      <section className="w-full py-12 md:py-24 lg:py-32" id="about">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            About Me
          </h2>
          <p className="mt-4 max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
            Driven full-stack developer with 3+ years of experience in
            full-stack development. I help companies optimize their processes by
            developing innovative solutions that increase efficiency and
            productivity. For example, I created a system for the sales
            department to analyze and compare sales from previous months,
            leading to better strategic decisions.
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
                <h3 className="text-xl font-bold">One Bridge</h3>
              </CardHeader>
              <CardContent>
                <Image
                  alt="Project 1"
                  className="h-[200px] w-full object-cover"
                  src="https://res.cloudinary.com/dxhfq1g84/image/upload/v1704802806/portfolio/oneBridge_new_four_nccgsh.png"
                  layout="responsive"
                  width={200}
                  height={200}
                />
                <p className="mt-4 text-gray-500">all-in-one HR solution</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardHeader>
                <h3 className="text-xl font-bold">Thoughtful-gallery</h3>
              </CardHeader>
              <CardContent>
                <Image
                  alt="Project 2"
                  className="h-[200px] w-full object-cover"
                  src="https://res.cloudinary.com/dxhfq1g84/image/upload/v1703675151/portfolio/msedge_IHbU7dlQH8_rav4fg.jpg"
                  layout="responsive"
                  width={200}
                  height={200}
                />
                <p className="mt-4 text-gray-500">
                  Isn't it fascinating to be able to explore world history?
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardHeader>
                <h3 className="text-xl font-bold">HaBygg Onboarding</h3>
              </CardHeader>
              <CardContent>
                <Image
                  alt="Project 3"
                  className="h-[200px] w-full object-cover"
                  src="https://res.cloudinary.com/dxhfq1g84/image/upload/v1704806874/portfolio/habygg_cgjwkx.png"
                  layout="responsive"
                  width={200}
                  height={200}
                />
                <p className="mt-4 text-gray-500">
                  Streamlining the process to make new employee integration a
                  breeze.
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
              TypeScript
            </Badge>
            <Badge className="rounded bg-blue-200 px-2 py-1 text-blue-700">
              JavaScript
            </Badge>
            <Badge className="rounded bg-blue-200 px-2 py-1 text-blue-700">
              Next.js
            </Badge>
            <Badge className="rounded bg-blue-200 px-2 py-1 text-blue-700">
              React
            </Badge>

            <Badge className="rounded bg-blue-200 px-2 py-1 text-blue-700">
              Azure
            </Badge>
          </div>
        </div>
      </section>
      <section
        className="w-full bg-gray-100 py-12 dark:bg-gray-800  md:py-12 lg:py-16"
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
