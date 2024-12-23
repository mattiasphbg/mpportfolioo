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
  return (
    <Card className="mx-auto w-full max-w-4xl">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        <CardDescription>{context}</CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="introduction">
            <AccordionTrigger>Introduction</AccordionTrigger>
            <AccordionContent>
              <p className="mb-2">
                <strong>Context:</strong> {context}
              </p>
              <p>
                <strong>Your Role:</strong> {role}
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="problem">
            <AccordionTrigger>The Problem</AccordionTrigger>
            <AccordionContent>
              <p className="mb-2">
                <strong>Challenge:</strong> {challenge}
              </p>
              <strong>Objectives:</strong>
              <ul className="mt-1 list-disc pl-5">
                {objectives.map((objective, index) => (
                  <li key={index}>{objective}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="approach">
            <AccordionTrigger>Approach</AccordionTrigger>
            <AccordionContent>
              <p className="mb-2">
                <strong>Research and Planning:</strong> {research}
              </p>
              <p>
                <strong>Strategy:</strong> {strategy}
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="execution">
            <AccordionTrigger>Execution</AccordionTrigger>
            <AccordionContent>
              <strong>Process:</strong>
              <ol className="mb-2 mt-1 list-decimal pl-5">
                {process.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
              <strong>Tools and Techniques:</strong>
              <ul className="mt-1 list-disc pl-5">
                {tools.map((tool, index) => (
                  <li key={index}>{tool}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="challenges">
            <AccordionTrigger>Challenges and Solutions</AccordionTrigger>
            <AccordionContent>
              {challenges.map((item, index) => (
                <div key={index} className="mb-2">
                  <p>
                    <strong>Obstacle:</strong> {item.obstacle}
                  </p>
                  <p>
                    <strong>Solution:</strong> {item.solution}
                  </p>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="results">
            <AccordionTrigger>Results</AccordionTrigger>
            <AccordionContent>
              <strong>Outcomes:</strong>
              <ul className="mb-2 mt-1 list-disc pl-5">
                {outcomes.map((outcome, index) => (
                  <li key={index}>{outcome}</li>
                ))}
              </ul>
              <p>
                <strong>Impact:</strong> {impact}
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="lessons">
            <AccordionTrigger>Lessons Learned</AccordionTrigger>
            <AccordionContent>
              <strong>Insights:</strong>
              <ul className="mb-2 mt-1 list-disc pl-5">
                {lessons.map((lesson, index) => (
                  <li key={index}>{lesson}</li>
                ))}
              </ul>
              <p>
                <strong>Improvements:</strong> {improvements}
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="conclusion">
            <AccordionTrigger>Conclusion</AccordionTrigger>
            <AccordionContent>
              <p className="mb-2">
                <strong>Summary:</strong> {summary}
              </p>
              {callToAction && (
                <p>
                  <strong>Call to Action:</strong> {callToAction}
                </p>
              )}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}
