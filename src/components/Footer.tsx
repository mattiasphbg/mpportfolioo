import React from "react";
import { FaLinkedinIn, FaDiscord } from "react-icons/fa";
import { TbBrandGithubCopilot } from "react-icons/tb";

export default function Footer() {
  return (
    <footer
      className="w-full bg-gray-100 py-12 dark:bg-gray-800  md:py-24 lg:py-32"
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
    </footer>
  );
}
