import { Button } from "src/components/ui/button";
import Image from "next/image";
import { Input } from "src/components/ui/input";
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

export default function Page() {
  return (
    <>
      <div className="flex min-h-screen w-full flex-col">
        <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-gray-100/40 p-4 dark:bg-gray-800/40 md:gap-8 md:p-10">
          <div className="mx-auto flex w-full max-w-6xl items-center gap-4">
            <form className="flex-1">
              <Input
                className="bg-white dark:bg-gray-950"
                placeholder="Filter projects..."
              />
              <Button className="sr-only" type="submit">
                Submit
              </Button>
            </form>
          </div>
          <div className="mx-auto grid w-full max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Image
                  alt="Project Image"
                  className="h-20 w-20 rounded-lg object-cover"
                  height={100}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width={100}
                />
                <div className="grid gap-1">
                  <CardTitle>Project 1</CardTitle>
                  <CardDescription>
                    This is a brief description of Project 1.
                  </CardDescription>
                </div>
              </CardHeader>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button className="mt-4" variant="outline">
                    View Details
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="p-4">
                    <h4 className="font-medium">Project 1</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      This is a more detailed description of Project 1.
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Image
                  alt="Project Image"
                  className="h-20 w-20 rounded-lg object-cover"
                  height={100}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width={100}
                />
                <div className="grid gap-1">
                  <CardTitle>Project 2</CardTitle>
                  <CardDescription>
                    This is a brief description of Project 2.
                  </CardDescription>
                </div>
              </CardHeader>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button className="mt-4" variant="outline">
                    View Details
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="p-4">
                    <h4 className="font-medium">Project 2</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      This is a more detailed description of Project 2.
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Image
                  alt="Project Image"
                  className="h-20 w-20 rounded-lg object-cover"
                  height={100}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width={100}
                />
                <div className="grid gap-1">
                  <CardTitle>Project 3</CardTitle>
                  <CardDescription>
                    This is a brief description of Project 3.
                  </CardDescription>
                </div>
              </CardHeader>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button className="mt-4" variant="outline">
                    View Details
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="p-4">
                    <h4 className="font-medium">Project 3</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      This is a more detailed description of Project 3.
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </Card>
          </div>
        </main>
      </div>
    </>
  );
}
