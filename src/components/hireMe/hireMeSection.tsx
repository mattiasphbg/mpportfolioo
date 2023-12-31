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

import AutoForm, { AutoFormSubmit } from "src/components/ui/auto-form";
import { HireMeSchema } from "../../app/schemas/form";
import type * as z from "zod";
import React, { useState } from "react";
import { Button } from "src/components/ui/button";

export function HireMeSection() {
  const [values, setValues] = useState<Partial<z.infer<typeof HireMeSchema>>>(
    {},
  );
  const { email, name, areaOfInterest, message, companyName, phoneNumber } =
    values;

  return (
    <section className="w-full bg-gray-100 py-12 dark:bg-gray-800 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 text-center md:px-6">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Welcome to My Portfolio
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
            I am a web developer with a passion for creating beautiful and
            accessible experiences.
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                variant="outline"
              >
                Hire Me
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
              <div className="grid gap-4 py-4">
                <AutoForm
                  formSchema={HireMeSchema}
                  values={values}
                  onValuesChange={setValues}
                  onSubmit={(submittedValues) => {
                    // console.log("Form submitted with values:", submittedValues);
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
