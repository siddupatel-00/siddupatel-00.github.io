"use client"

import { motion } from "motion/react"
import { HeaderTitle } from "./header-title"

export function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full"
    >
      <HeaderTitle title="About" />
      <div className="p-3">
        <ul className="space-y-2.5">
          <li className="flex items-start gap-2.5 text-primary/90 text-sm sm:text-base leading-normal">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
            <span>
              <strong className="font-semibold text-primary">AI Product Builder:</strong> Turning ideas into clean, functional, end-to-end web products at high speed using modern web technologies and AI developer tools.
            </span>
          </li>
          <li className="flex items-start gap-2.5 text-primary/90 text-sm sm:text-base leading-normal">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
            <span>
              <strong className="font-semibold text-primary">Problem Solving:</strong> Strong algorithmic and logic fundamentals with 100+ Data Structures &amp; Algorithms problems solved in Python.
            </span>
          </li>
          <li className="flex items-start gap-2.5 text-primary/90 text-sm sm:text-base leading-normal">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
            <span>
              <strong className="font-semibold text-primary">Full-Stack Execution:</strong> Designing, prototyping, and shipping complete applications with responsive UI, live databases, and cloud deployments.
            </span>
          </li>
        </ul>
      </div>
    </motion.section>
  )
}


