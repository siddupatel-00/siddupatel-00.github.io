"use client"

import { TECH_STACK } from "@/data/tech-stack"
import { motion } from "motion/react"
import Image from "next/image"
import { HeaderTitle } from "./header-title"

export function TechStack() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full"
    >
      <HeaderTitle title="Tech Stack" />
      <div className="my-2 grid w-full grid-cols-3 gap-2 p-2 sm:grid-cols-4 md:grid-cols-5">
        {TECH_STACK.map((item) => {
          const ext = item.ext || "svg"
          return (
            <div
              key={item.key}
              className="group flex items-center justify-center sm:justify-start gap-2.5 rounded-lg border border-transparent p-2 transition-all duration-200 hover:border-border hover:bg-muted/50 hover:shadow-xs"
            >
              <div className="flex size-7 items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-110">
                {item.theme ? (
                  <>
                    <Image
                      src={`/assets/tech-stack/${item.key}-light.${ext}`}
                      alt={item.title}
                      width={28}
                      height={28}
                      className="size-6 object-contain dark:hidden"
                    />
                    <Image
                      src={`/assets/tech-stack/${item.key}-dark.${ext}`}
                      alt={item.title}
                      width={28}
                      height={28}
                      className="hidden size-6 object-contain dark:block"
                    />
                  </>
                ) : (
                  <Image
                    src={item.image || `/assets/tech-stack/${item.key}.${ext}`}
                    alt={item.title}
                    width={28}
                    height={28}
                    className="size-6 object-contain"
                  />
                )}
              </div>
              <span className="text-sm font-medium text-primary/85 group-hover:text-primary transition-colors hidden sm:inline-block">
                {item.title}
              </span>
            </div>
          )
        })}
      </div>
    </motion.section>
  )
}
