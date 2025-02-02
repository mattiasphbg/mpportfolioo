//import React from "react";

import { Button } from "src/components/ui/button";
import { MessageSquare } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import AboutSection from "~/components/landing/aboutMe";
import WorkWithSection from "~/components/landing/oftenWork";
import WorkedWith from "~/components/landing/workedWith";
import LatestProjects from "~/components/landing/latestProjects";
import ContactSection from "~/components/landing/getInTouch";
import { ProjectStory } from "~/components/landing/projectStory";

export default function Home() {
  const projects = [
    {
      id: "1",
      title: "FITP portalen",
      description: "Enhances Microsoft Analytics for improved ease of use.",
      imageUrl:
        "https://res.cloudinary.com/dxhfq1g84/image/upload/v1733821397/fitp_portalend_o5lmso.png",
      link: "https://fitp-also-portal-beta.vercel.app/",
    },
    {
      id: "2",
      title: "OneBridge",
      description: "Making hr-system easier.",
      imageUrl:
        "https://res.cloudinary.com/dxhfq1g84/image/upload/v1704802807/portfolio/oneBridge_new_three_cxsfug.png",
      link: "https://www.onebridge.se/",
    },
    {
      id: "3",
      title: "Habygg",
      description: "Personalized Hr-system.",
      imageUrl:
        "https://res.cloudinary.com/dxhfq1g84/image/upload/v1704807172/portfolio/habygg_2_ybzgmn.png",
      link: "https://habygg.com/",
    },
  ];
  return (
    <>
      {/* <HireMeSection
        title="Welcome"
        subTitles="My name is Mattias, and I'm a passionate full-stack developer driven by the desire to create anything I imagine."
      /> */}
      <div className="min-h-screen bg-black text-white">
        {/* Navigation */}
        <nav className="fixed top-0 z-50 flex w-full items-center justify-between p-6">
          <Link
            href="https://www.linkedin.com/in/petterssoncreative/"
            target="_blank"
          >
            <Button variant="ghost" size="icon" className="rounded-full">
              <Image
                src="https://res.cloudinary.com/dxhfq1g84/image/upload/v1733567572/Mp_hgd92f__1_-removebg_g48ete.png" // Replace with the actual path to your profile image
                alt="Profile"
                className="h-5 w-5 rounded-full"
                width={5}
                height={5}
              />
              <span className="sr-only">Profile</span>
            </Button>
          </Link>
          <Button variant="ghost" size="icon" className="rounded-full">
            <MessageSquare children className="h-5 w-5" />

            <span className="sr-only">Contact</span>
          </Button>
        </nav>

        {/* Main Content */}
        <main className="flex min-h-screen flex-col items-center justify-center px-4">
          <div className="relative mx-auto w-full max-w-6xl">
            {/* Profile Image */}
            <div className="relative mb-8 aspect-[3/1] w-full">
              <Image
                src="https://res.cloudinary.com/dxhfq1g84/image/upload/v1733568757/661004790ba41b1c6ba1fd12_hero_background-p-500_pmgup4.webp"
                alt="Wrapper Image"
                fill={true}
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
                  fill={true}
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

        <ProjectStory
          title="FITP PORTALEN: Future IT Partner's Invoice Management Journey"
          context="Future IT Partner faced challenges with their invoices for licenses and packaging."
          role="As a developer, I was the main person responsible for addressing these challenges."
          challenge="There were issues with billing due to errors in licenses and packaging."
          objectives={[
            "Find a way to easily identify any changes in the system.",
            "Automate processes as much as possible to minimize errors.",
            "Implement a new, user-friendly design",
            "Integrate with existing billing management systems",
          ]}
          research="To create a successful project, identify the client's needs, structure the project effectively, and determine which tools and resources to integrate."
          strategy="Schedule a meeting with the client to discuss their specific needs and tailor a solution for them by utilizing resources like Google and ChatGPT for additional insights, and break down the project into manageable parts."
          process={[
            "Requirements gathering and user research",
            "Wireframing and prototyping",
            "Development of core features",
            "A table with a color-coded column to indicate license status",
            "Save the state of licenses each month.",
            "Exclude certain licenses from the list using PowerBI",
            "Create a dedicated page for packaging, allowing companies to expand with their employees and various packages.",
            "Compare the licenses with the current state of the licenses in the system.",
          ]}
          tools={[
            "React for the front-end",
            "Lodash for data manipulation",
            "Inngest for logging",
            "Tanstack for listing and filtering",
          ]}
          challenges={[
            {
              obstacle: "Comparing current data with previous data.",
              solution:
                "To solve the Lodash part of the code, I utilized functions like _.differenceWith, _.omit, and _.isEqual to efficiently compare and manipulate data sets, allowing me to identify added, deleted, and edited rows by filtering and tagging records based on custom criteria.",
            },
            {
              obstacle: "Ensuring the API functions correctly.",
              solution:
                "Used an API from a different region, switching to the European URL: https://marketplace.also.se/SimpleAPI/SimpleAPIService.svc/rest/",
            },
          ]}
          outcomes={[
            "The project met its objectives by enabling accurate billing at each accounting period.",
            "The system was designed to be user-friendly.",
            "Implemented a serverless database to store monthly data snapshots.",
          ]}
          impact="Billing errors have significantly decreased because clients can now quickly identify errors before invoices are sent out."
          lessons={[
            "Scalability is crucial, as client needs are constantly evolving.",
            "Both backend and frontend should be kept simple, following the 'Don't Make Me Think' approach.",
          ]}
          improvements="In the future, I would use fewer useEffect/useState hooks and rely more on React Query for better performance, as it caches data when the page re-renders if the data hasn't changed."
          summary="The transition from billing issues to improved revenue shows the success of this project."
          callToAction="If you have any suggestions for further improvement, please feel free to email us, as our goal is to create the best system possible."
        />

        <ProjectStory
          title="From Concept to Reality: Adding MFA to Docuro's Document Management System"
          context="Docuro is a document management system. The client needed Multi-Factor Authentication (MFA) added because their customers wanted increased security."
          role="Development Lead: Decide on the tools we should use."
          challenge="Ensure users can log in with their Microsoft business accounts and then find them in Docuro's personal database. There was no PHP support from Microsoft at the time this was implemented."
          objectives={[
            "Enable users to select their Microsoft account with a single button click. The icons should be user-customized.",
          ]}
          research="Familiarize yourself with their system while exploring the possibilities available in Laravel and investigating the options provided by Microsoft."
          strategy="Use the Microsoft Graph API and create controllers."
          process={[
            "Set up a local Docker container.",
            "Connect Docuro properties with Microsoft.",
            "Create a component with the option to log in using a Microsoft account.",
          ]}
          tools={["Microsoft Graph", "Laravel userController"]}
          challenges={[
            {
              obstacle: "Setting up Docker Compose.",
              solution:
                "Need to add new requirements for composers new updates to the system. Which had new naming conventions.",
            },
          ]}
          outcomes={[
            "Users can now use their regular Microsoft account with Docuro's system.",
            "There wasn't enough time to add Google integration.",
            "The integration was seamlessly incorporated with existing systems.",
          ]}
          impact="The client's needs were met as desired."
          lessons={[
            "It's important to have plans prepared as early as possible.",
          ]}
          improvements="Ask more questions from the project creator, which saves time."
          summary="Expanding their system with MFA was both rewarding and educational. It involved learning how PHP works instead of TypeScript while also delivering what the client needed."
          callToAction="If you have any suggestions for further improvement, please feel free to email us, as our goal is to create the best system possible."
        />

        <AboutSection />
        <WorkWithSection />
        <WorkedWith />
        <LatestProjects projects={projects} />
        <ContactSection />
      </div>
    </>
  );
}
