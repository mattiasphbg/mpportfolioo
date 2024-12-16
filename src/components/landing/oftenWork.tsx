"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function WorkWithSection() {
  const items = [
    { title: "Startups", href: "#startups" },
    { title: "SaaS", href: "#saas" },
    { title: "Marketing teams", href: "#agencies" },
    { title: "Sales team", href: "#marketing" },
  ];

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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-black p-4 text-white">
      <div className="w-full max-w-4xl ">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-12"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold md:text-5xl"
          >
            I often work with:
          </motion.h2>
          <div className="space-y-6">
            {items.map((item) => (
              <motion.div key={item.title} variants={itemVariants}>
                <Link
                  href={item.href}
                  className="group flex items-center justify-between rounded-lg border border-zinc-800 p-4 text-xl transition-colors duration-200 hover:bg-zinc-800 md:text-2xl"
                >
                  <span>{item.title}</span>
                  <ArrowUpRight
                    className="transform transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1"
                    size={24}
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
