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

export function HireMeButton({
  children,
  variant = "default",
  size = "default",
}: {
  children: React.ReactNode;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
}) {
  const [buttonText, setButtonText] = useState("Get in touch →");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="rounded-full"
          variant={variant}
          size={size}
          onMouseEnter={() => setButtonText("Send")}
          onMouseLeave={() => setButtonText("Get in touch →")}
        >
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Send Email</DialogTitle>
          <DialogDescription>
            please provide your name, phone number, email address, and area of
            interest or project you need help with. I will get back to you as
            soon as possible.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-2">
          <AutoForm
            formSchema={HireMeSchema}
            className="max-h-[500px] w-full max-w-[425px] overflow-y-auto sm:max-w-full"
            onSubmit={(submittedValues) => {
              const formData = new FormData();
              formData.append("email", `${submittedValues.email}`);
              formData.append("name", `${submittedValues.name}`);
              formData.append("interest", `${submittedValues.areaOfInterest}`);
              formData.append("message", `${submittedValues.message}`);
              formData.append("company", `${submittedValues.companyName}`);
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
  );
}
