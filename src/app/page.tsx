import React from "react";

import { CardHeader, CardContent, Card } from "src/components/ui/card";
import { Badge } from "src/components/ui/badge";

import { FaLinkedinIn, FaDiscord } from "react-icons/fa";
import { TbBrandGithubCopilot } from "react-icons/tb";

import { HireMeSection } from "src/components/hireMe/hireMeSection";
import ZoomableImage from "src/components/ZoomableImage";

import { Button } from "src/components/ui/button";
import { User, MessageSquare } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* <HireMeSection
        title="Welcome"
        subTitles="My name is Mattias, and I'm a passionate full-stack developer driven by the desire to create anything I imagine."
      /> */}
      <div className="min-h-screen bg-black text-white">
        {/* Navigation */}
        <nav className="fixed top-0 z-50 flex w-full items-center justify-between p-6">
          <Button variant="ghost" size="icon" className="rounded-full">
            <User className="h-5 w-5" />
            <span className="sr-only">Profile</span>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <MessageSquare className="h-5 w-5" />
            <span className="sr-only">Contact</span>
          </Button>
        </nav>

        {/* Main Content */}
        <main className="flex min-h-screen flex-col items-center justify-center px-4">
          <div className="relative mx-auto w-full max-w-6xl">
            {/* Profile Image */}
            <div className="relative mb-8 aspect-[3/1] w-full">
              <Image
                src="https://res.cloudinary.com/dxhfq1g84/image/upload/v1704200614/portfolio/Mp_hgd92f.png"
                alt="Profile"
                fill
                className=" rounded-2xl object-contain  opacity-75 grayscale"
                priority
              />
            </div>

            {/* Name and Title */}
            <div className="space-y-4 text-center">
              <h1 className="bg-gradient-to-b from-white to-pink-200 bg-clip-text text-6xl font-bold tracking-tighter text-transparent sm:text-8xl">
                Mattias Pettersson
              </h1>
              <p className="text-xl text-zinc-400 sm:text-2xl">
                Full-Stack Developer / Engineer
              </p>
              <div className="pt-4">
                <Button
                  asChild
                  className="rounded-full bg-white px-6 text-black hover:bg-zinc-200"
                >
                  <Link href="/contact">Get in touch →</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="fixed bottom-8 left-1/2 -translate-x-1/2">
            <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/20 p-1">
              <div className="h-2 w-1 animate-bounce rounded-full bg-white/60" />
            </div>
          </div>
        </main>

        <section className="w-full py-12 md:py-24 lg:py-32" id="about">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About Me
            </h2>
            <p className="mt-4 max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
              Driven full-stack developer with 3+ years of experience. I create
              innovative solutions to optimize processes and boost productivity.
              For example, I developed a sales analysis system that improved
              strategic decision-making.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
