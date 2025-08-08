"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "src/components/ui/accordion";
import { motion } from "framer-motion";

interface ProjectStoryProps {
  title: string;
  context: string;
  role: string;
  challenge: string;
  objectives: string[];
  research: string;
  strategy: string;
  process: string[];
  tools: string[];
  challenges: { obstacle: string; solution: string }[];
  outcomes: string[];
  impact: string;
  lessons: string[];
  improvements: string;
  summary: string;
  callToAction?: string;
}

export function ProjectStory({
  title,
  context,
  role,
  challenge,
  objectives,
  research,
  strategy,
  process,
  tools,
  challenges,
  outcomes,
  impact,
  lessons,
  improvements,
  summary,
  callToAction,
}: ProjectStoryProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="flex min-h-screen items-center justify-center  p-4 text-white">
      <Card className="mx-auto w-full max-w-4xl bg-transparent">
        <CardHeader>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <CardTitle className="text-2xl font-bold">{title}</CardTitle>
              <CardDescription>{context}</CardDescription>
            </motion.div>
          </motion.div>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {[
              {
                value: "introduction",
                title: "Introduction",
                content: (
                  <>
                    <p className="my-2">
                      <strong>Context:</strong> {context}
                    </p>
                    <p>
                      <strong>Your Role:</strong> {role}
                    </p>
                  </>
                ),
              },
              {
                value: "problem",
                title: "The Problem",
                content: (
                  <>
                    <p className="my-2">
                      <strong>Challenge:</strong> {challenge}
                    </p>
                    <strong>Objectives:</strong>
                    <ul className="mt-2 list-disc pl-5">
                      {objectives.map((objective, index) => (
                        <li key={index}>{objective}</li>
                      ))}
                    </ul>
                  </>
                ),
              },
              {
                value: "approach",
                title: "Approach",
                content: (
                  <>
                    <p className="my-2">
                      <strong>Research and Planning:</strong> {research}
                    </p>
                    <p>
                      <strong>Strategy:</strong> {strategy}
                    </p>
                  </>
                ),
              },
              {
                value: "execution",
                title: "Execution",
                content: (
                  <>
                    {/* 
                      The `mt-2` (margin-top) utility on <strong> does not have a visible effect 
                      because <strong> is an inline element by default, and margin-top/bottom 
                      does not apply to inline elements. To make margin utilities work, 
                      use block or inline-block display.
                    */}
                    <strong className="mt-2 block">Process:</strong>
                    <ol className="my-2 list-decimal pl-5">
                      {process.map((step, index) => (
                        <li key={index}>{step}</li>
                      ))}
                    </ol>
                    <strong className="mt-2 block">
                      Tools and Techniques:
                    </strong>
                    <ul className="mt-1 list-disc pl-5">
                      {tools.map((tool, index) => (
                        <li key={index}>{tool}</li>
                      ))}
                    </ul>
                  </>
                ),
              },
              {
                value: "challenges",
                title: "Challenges and Solutions",
                content: (
                  <>
                    {challenges.map((item, index) => (
                      <div key={index} className="my-2">
                        <p>
                          <strong>Obstacle:</strong> {item.obstacle}
                        </p>
                        <p>
                          <strong>Solution:</strong> {item.solution}
                        </p>
                      </div>
                    ))}
                  </>
                ),
              },
              {
                value: "results",
                title: "Results",
                content: (
                  <>
                    <strong className="mt-2 block">Outcomes:</strong>
                    <ul className="my-2 list-disc pl-5">
                      {outcomes.map((outcome, index) => (
                        <li key={index}>{outcome}</li>
                      ))}
                    </ul>
                    <p>
                      <strong>Impact:</strong> {impact}
                    </p>
                  </>
                ),
              },
              {
                value: "lessons",
                title: "Lessons Learned",
                content: (
                  <>
                    <strong className="mt-2 block">Insights:</strong>
                    <ul className="my-2 list-disc pl-5">
                      {lessons.map((lesson, index) => (
                        <li key={index}>{lesson}</li>
                      ))}
                    </ul>
                    <p>
                      <strong>Improvements:</strong> {improvements}
                    </p>
                  </>
                ),
              },
              {
                value: "conclusion",
                title: "Conclusion",
                content: (
                  <>
                    <p className="my-2">
                      <strong>Summary:</strong> {summary}
                    </p>
                    {callToAction && (
                      <p>
                        <strong>Call to Action:</strong> {callToAction}
                      </p>
                    )}
                  </>
                ),
              },
            ].map(({ value, title, content }, index) => (
              <AccordionItem key={value} value={value}>
                <AccordionTrigger className="flex items-center justify-between border border-zinc-800 p-4 text-xl transition-colors duration-200 hover:bg-zinc-800 md:text-2xl">
                  {title}
                </AccordionTrigger>
                <AccordionContent>
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={itemVariants}
                  >
                    {content}
                  </motion.div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </section>
  );
}
