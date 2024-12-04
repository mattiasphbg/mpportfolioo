"use client";
import { Button } from "src/components/ui/button";
import ZoomableImage from "src/components/ZoomableImage";
import { Skeleton } from "src/components/ui/skeleton";

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

  if (isLoading) {
    return (
      <>
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <Skeleton className="h-20 w-20 rounded-lg" />
            <div className="grid gap-1">
              <Skeleton className="h-4 w-40" />
              <Skeleton className="h-3 w-60" />
            </div>
          </CardHeader>
          <HoverCard>
            <HoverCardTrigger asChild>
              <Skeleton className="h-10 w-20" />
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="p-4">
                <Skeleton className="h-4 w-60" />
                <Skeleton className="h-3 w-80" />
              </div>
            </HoverCardContent>
          </HoverCard>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <Skeleton className="h-20 w-20 rounded-lg" />
            <div className="grid gap-1">
              <Skeleton className="h-4 w-40" />
              <Skeleton className="h-3 w-60" />
            </div>
          </CardHeader>
          <HoverCard>
            <HoverCardTrigger asChild>
              <Skeleton className="h-10 w-20" />
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="p-4">
                <Skeleton className="h-4 w-60" />
                <Skeleton className="h-3 w-80" />
              </div>
            </HoverCardContent>
          </HoverCard>
        </Card>
      </>
    );
  }

  return (
    <>
      {data?.map((field, i) => (
        <Card key={i}>
          <CardHeader className="flex items-center justify-center gap-4">
            <ZoomableImage
              alt="Project Image"
              className="h-400 w-400 aspect-square rounded-lg object-contain"
              height={2000}
              src={`${field.img}`}
              width={2000}
            />
            <div className="grid gap-1">
              <CardTitle>{field.title}</CardTitle>
              <CardDescription>{field.description}</CardDescription>
            </div>
          </CardHeader>
          <HoverCard>
            <HoverCardTrigger asChild>
              {isProduction ? (
                <Link
                  href={`https://www.petterssoncreative.se/projects/${field.id}`}
                >
                  <Button className="mt-4" variant="outline">
                    View details
                  </Button>
                </Link>
              ) : (
                <Link href={`http://localhost:3000/projects/${field.id}`}>
                  <Button className="m-4" variant="outline">
                    View details
                  </Button>
                </Link>
              )}
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="p-4">
                <h4 className="font-medium">{field.title}</h4>
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
