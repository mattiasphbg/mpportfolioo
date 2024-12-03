/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
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

export function ProjectById({ id }: { id: number }) {
  const { data } = api.project.getById.useQuery(id);
  const { data: relatedProjets } = api.project.getAll.useQuery(undefined, {
    enabled: !!data?.id,
  });

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
                {data?.screenshotOne && (
                  <Image
                    alt="Screenshot 1"
                    className="h-64 w-full rounded-md object-cover"
                    height={2000}
                    src={data?.screenshotOne}
                    style={{
                      aspectRatio: "1/1",
                      objectFit: "cover",
                    }}
                    width={2000}
                  />
                )}
                {data?.screenshotTwo && (
                  <Image
                    alt="Screenshot 2"
                    className="h-64 w-full rounded-md object-cover"
                    height={1000}
                    src={data?.screenshotTwo}
                    style={{
                      aspectRatio: "1/1",
                      objectFit: "cover",
                    }}
                    width={1000}
                  />
                )}
              </div>
            </section>
            <section>
              <h2 className="text-xl font-bold">Technologies Used</h2>
              <ul className="list-inside list-disc space-y-1">
                {/* {(data?.techUsed ?? [] ?? []).map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))} */}
              </ul>
            </section>
          </div>
          <aside className="border-t bg-gray-50 p-4 dark:bg-gray-900 lg:w-80 lg:border-l lg:border-t-0 lg:p-8">
            <h2 className="mb-4 text-xl font-bold">Project Information</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold">Duration</h3>
                <p>
                  {data?.start} - {data?.end}
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Team Members</h3>
                {/* <p>{data?.team ? data.team.join(", ") : ""}</p> */}
              </div>
              <div>
                <h3 className="font-semibold">Category</h3>
                <p>{data?.category}</p>
              </div>
            </div>
          </aside>
        </main>
        <section className="bg-gray-100 p-4 dark:bg-gray-800 lg:p-8">
          <h2 className="mb-4 text-xl font-bold">Related Projects</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProjets?.map((row, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle>{row.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">
                    {row.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
