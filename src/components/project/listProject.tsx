"use client";
import { Button } from "src/components/ui/button";
import Image from "next/image";

import {
  CardTitle,
  CardDescription,
  CardHeader,
  Card,
} from "src/components/ui/card";
import {
  HoverCardTrigger,
  HoverCardContent,
  HoverCard,
} from "src/components/ui/hover-card";

import React from "react";
import Link from "next/link";

import { api } from "src/trpc/react";

export function ListProject() {
  const { data, isLoading } = api.project.getAll.useQuery();

  const isProduction = process.env.NODE_ENV === "production";

  return (
    <>
      {data?.map((field, i) => (
        <Card key={i}>
          <CardHeader className="flex flex-row items-center gap-4">
            <Image
              alt="Project Image"
              className="h-20 w-20 rounded-lg object-cover"
              height={100}
              src={`${field.img}`}
              style={{
                aspectRatio: "100/100",
                objectFit: "cover",
              }}
              width={100}
            />
            <div className="grid gap-1">
              <CardTitle>{field.title}</CardTitle>
              <CardDescription>{field.description}</CardDescription>
            </div>
          </CardHeader>
          <HoverCard>
            <HoverCardTrigger asChild>
              {isProduction ? (
                <Link href={`https://www.petterssoncreative.se/${field.id}`}>
                  <Button className="mt-4" variant="outline">
                    View details
                  </Button>
                </Link>
              ) : (
                <Link href={`http://localhost:3000/projects/${field.id}`}>
                  <Button className="mt-4" variant="outline">
                    View details
                  </Button>
                </Link>
              )}
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="p-4">
                <h4 className="font-medium">Project 1</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {field.description}
                </p>
              </div>
            </HoverCardContent>
          </HoverCard>
        </Card>
      ))}
    </>
  );
}
