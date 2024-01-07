"use client";
import { api } from "src/trpc/react";

import {
  CardTitle,
  CardHeader,
  CardContent,
  Card,
} from "src/components/ui/card";

import Image from "next/image";
import Link from "next/link";
import { LuArrowLeft } from "react-icons/lu";

export function ProjectById({ id }: { id: string }) {
  const { data } = api.project.getOne.useQuery({ id: id });
  const isProduction = process.env.NODE_ENV === "production";
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <header className="flex items-center justify-between bg-gray-100 p-4 dark:bg-gray-800">
          {isProduction ? (
            <Link
              className="flex items-center"
              href="https://www.petterssoncreative.se/projects/"
            >
              <LuArrowLeft className="h-6 w-6" />
              <span className="ml-2 text-lg font-semibold">
                Back to Portfolio
              </span>
            </Link>
          ) : (
            <Link
              className="flex items-center"
              href="http://localhost:3000/projects/"
            >
              <LuArrowLeft className="h-6 w-6" />
              <span className="ml-2 text-lg font-semibold">
                Back to Portfolio
              </span>
            </Link>
          )}

          <h1 className="text-2xl font-bold">{data?.title}</h1>
        </header>
        <main className="flex flex-1 flex-col overflow-hidden lg:flex-row">
          <div className="flex-1 space-y-8 p-4 lg:p-8">
            <section>
              <h2 className="text-xl font-bold">Project Description</h2>
              <p className="text-gray-600 dark:text-gray-400">
                {data?.description}
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold">Screenshots</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Image
                  alt="Screenshot 1"
                  className="h-64 w-full rounded-md object-cover"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
                <Image
                  alt="Screenshot 2"
                  className="h-64 w-full rounded-md object-cover"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
              </div>
            </section>
            <section>
              <h2 className="text-xl font-bold">Technologies Used</h2>
              <ul className="list-inside list-disc space-y-1">
                <li>React.js</li>
                <li>Tailwind CSS</li>
                <li>Next.js</li>
                <li>Node.js</li>
              </ul>
            </section>
          </div>
          <aside className="border-t bg-gray-50 p-4 dark:bg-gray-900 lg:w-80 lg:border-l lg:border-t-0 lg:p-8">
            <h2 className="mb-4 text-xl font-bold">Project Information</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold">Duration</h3>
                <p>January 2024 - Present</p>
              </div>
              <div>
                <h3 className="font-semibold">Team Members</h3>
                <p>John Doe, Jane Smith, Alice Johnson</p>
              </div>
              <div>
                <h3 className="font-semibold">Category</h3>
                <p>Web Development</p>
              </div>
            </div>
          </aside>
        </main>
        <section className="bg-gray-100 p-4 dark:bg-gray-800 lg:p-8">
          <h2 className="mb-4 text-xl font-bold">Related Projects</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Related Project 1</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Related Project 2</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Related Project 3</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
}
