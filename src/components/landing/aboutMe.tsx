import React from "react";

const AboutSection = () => {
  return (
    <section
      className="flex h-screen w-full items-center justify-center py-12 md:py-24 lg:py-32"
      id="about"
    >
      <div className="container px-4 text-center md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Hi, I’m Mattias,
        </h2>
        <p className="mx-auto mt-4 max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
          Driven full-stack developer with 3+ years of experience. I create
          innovative solutions to optimize processes and boost productivity. For
          example, I developed a sales analysis system that improved strategic
          decision-making.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
