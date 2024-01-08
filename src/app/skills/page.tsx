import { FaCode } from "react-icons/fa6";
import { AiOutlineLayout } from "react-icons/ai";
import { MdOutlineShortText } from "react-icons/md";
import { LuBadge } from "react-icons/lu";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                My Skills & Expertise
              </h1>
              <p className="mx-auto mb-2 max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
                A showcase of my skills and expertise in various areas.
              </p>
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12 xl:grid-cols-4">
            <div className="space-y-4">
              <h2 className="text-xl font-bold">Technical Skills</h2>
              <div className="flex items-center space-x-2">
                <FaCode className="h-6 w-6" />
                <span className="font-medium">JavaScript</span>
                <span className="text-sm text-gray-500">(Advanced)</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaCode className="h-6 w-6" />
                <span className="font-medium">Typescript</span>
                <span className="text-sm text-gray-500">(Intermediate)</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaCode className="h-6 w-6" />
                <span className="font-medium">Python</span>
                <span className="text-sm text-gray-500">(Beginner)</span>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-xl font-bold">Design Skills</h2>
              <div className="flex items-center space-x-2">
                <AiOutlineLayout className="h-6 w-6" />
                <span className="font-medium">Tailwind</span>
                <span className="text-sm text-gray-500">(Intermediate)</span>
              </div>
              <div className="flex items-center space-x-2">
                <AiOutlineLayout className="h-6 w-6" />
                <span className="font-medium">Graphic Design</span>
                <span className="text-sm text-gray-500">(Beginner)</span>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-xl font-bold">Communication Skills</h2>
              <div className="flex items-center space-x-2">
                <MdOutlineShortText className="h-6 w-6" />
                <span className="font-medium">Public Speaking</span>
                <span className="text-sm text-gray-500">(Beginner)</span>
              </div>
              <div className="flex items-center space-x-2">
                <MdOutlineShortText className="h-6 w-6" />
                <span className="font-medium">Team Collaboration</span>
                <span className="text-sm text-gray-500">(Advanced)</span>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-xl font-bold">Certifications</h2>
              <div className="flex items-center space-x-2">
                <LuBadge className="h-6 w-6" />
                <span className="font-medium">
                  AZ-900: Microsoft Azure Fundamentals - Present
                </span>
              </div>
              <Link
                href={
                  "https://www.credly.com/badges/10ad7bff-ddaa-4a0c-a42d-8b73d09ed8e6?source=linked_in_profile"
                }
                className=" hover:underline"
              >
                <div className="flex items-center space-x-2">
                  <LuBadge className="h-6 w-6" />
                  <span className="font-medium">
                    Microsoft Certified: Power Platform Fundamentals
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
