import { HireMeSection } from "src/components/hireMe/hireMeSection";

import { FaLinkedinIn, FaDiscord } from "react-icons/fa";
import { TbBrandGithubCopilot } from "react-icons/tb";

export default function Page() {
  return (
    <>
      <HireMeSection
        title="Get in Touch"
        subTitles="Have a question or want to work together?"
      />

      <footer className="fixed bottom-0 w-full">
        <section
          className="w-full  bg-white py-12 dark:bg-gray-800 md:py-12 lg:py-16"
          id="contact"
        >
          <div className="container px-4 text-center md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"></h2>
            <p className="mx-auto mt-4 max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl"></p>
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
                href="https://github.com/mattiasphbg"
                rel="noopener noreferrer"
                target="_blank"
              >
                <TbBrandGithubCopilot className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}
