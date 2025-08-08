"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "src/components/ui/dialog";

import AutoForm from "src/components/ui/auto-form";
import { HireMeSchema } from "../../app/schemas/form";

import React, { useState } from "react";
import { Button } from "src/components/ui/button";

export function HireMeSection({
  title,
  subTitles,
}: {
  title: string;
  subTitles: string;
}) {
  const [buttonText, setButtonText] = useState("Hire Me");
  return (
    <section className="w-full bg-gray-100 py-12 dark:bg-gray-800 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 text-center md:px-6">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
            {subTitles}
          </p>

          <Dialog>
            <DialogTrigger asChild>
              <Button
                className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                variant="outline"
                content="Send Email"
                onMouseEnter={() => setButtonText("Hire me")}
                onMouseLeave={() => setButtonText("Send Email")}
              >
                {buttonText}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Send Email</DialogTitle>
                <DialogDescription>
                  please provide your name, phone number, email address, and
                  area of interest or project you need help with. I will get
                  back to you as soon as possible.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4  py-2">
                <AutoForm
                  formSchema={HireMeSchema}
                  className="max-h-[500px] w-full max-w-[425px] overflow-y-auto sm:max-w-full"
                  onSubmit={(submittedValues) => {
                    const formData = new FormData();
                    formData.append("email", `${submittedValues.email}`);
                    formData.append("name", `${submittedValues.name}`);
                    formData.append(
                      "interest",
                      `${submittedValues.areaOfInterest}`,
                    );
                    formData.append("message", `${submittedValues.message}`);
                    formData.append(
                      "company",
                      `${submittedValues.companyName}`,
                    );
                    formData.append("phone", `${submittedValues.phoneNumber}`);

                    fetch("/api/send", {
                      method: "POST",
                      body: formData,
                    })
                      .then((response) => {
                        if (response.ok) {
                          return response.json();
                        } else {
                          throw new Error("Failed to submit form");
                        }
                      })
                      .then((data) => {
                        console.log("Response data:", data);
                      })
                      .catch((error) => {
                        console.error("Error occurred:", error);
                      });
                  }}
                  fieldConfig={{
                    message: {
                      fieldType: "textarea",
                    },
                  }}
                >
                  <DialogFooter>
                    <Button type="submit">Send</Button>
                  </DialogFooter>
                </AutoForm>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}
