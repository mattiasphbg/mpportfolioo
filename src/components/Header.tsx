import Link from "next/link";
import React, { type SVGProps } from "react";
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

function UserIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
