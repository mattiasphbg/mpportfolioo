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
import AboutSection from "~/components/landing/aboutMe";
import WorkWithSection from "~/components/landing/oftenWork";
import WorkedWith from "~/components/landing/workedWith";

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
                src="https://res.cloudinary.com/dxhfq1g84/image/upload/v1733568757/661004790ba41b1c6ba1fd12_hero_background-p-500_pmgup4.webp" // Replace with your wrapper image URL
                alt="Wrapper Image"
                fill
                className="rounded-2xl object-cover"
                sizes="100vw"
                priority
              />
              <div className="absolute inset-0">
                {" "}
                {/* Container for the profile image and overlay */}
                <Image
                  src="https://res.cloudinary.com/dxhfq1g84/image/upload/v1733567572/Mp_hgd92f__1_-removebg_g48ete.png"
                  alt="Profile"
                  fill
                  className="object-contain opacity-75 grayscale"
                  sizes="100vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-500 to-gray-500 opacity-50 mix-blend-multiply"></div>
              </div>
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

        <AboutSection />
        <WorkWithSection />
        <WorkedWith />
      </div>
    </>
  );
}
