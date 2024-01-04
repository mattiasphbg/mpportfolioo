import Link from "next/link";
import React from "react";
import { ModeToggle } from "src/components/ui/ModeToggle";
import { FaHome } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex h-14 items-center justify-between px-4 lg:px-6">
      <Link className="flex items-center justify-center" href="/">
        <FaHome className="h-6 w-6" />
        <span className="sr-only">Portfolio</span>
      </Link>

      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium underline-offset-4 hover:underline"
          href="/about"
        >
          About
        </Link>
        <Link
          className="text-sm font-medium underline-offset-4 hover:underline"
          href="/projects"
        >
          Projects
        </Link>
        <Link
          className="text-sm font-medium underline-offset-4 hover:underline"
          href="/skills"
        >
          Skills
        </Link>
        <Link
          className="text-sm font-medium underline-offset-4 hover:underline"
          href="/contact"
        >
          Contact
        </Link>
      </nav>
      <div className="ml-3">
        <ModeToggle />
      </div>
    </header>
  );
}
