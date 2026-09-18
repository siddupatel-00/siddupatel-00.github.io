"use client"

import { useState } from "react"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import type { Project } from "@/data/projects"
import { PROJECTS } from "@/data/projects"
import { cn } from "@/lib/utils"

import { motion } from "motion/react"
import { ArrowRight, ChevronDown, GithubIcon, LinkIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import { CardDescription } from "../ui/card"
import { HeaderTitle } from "./header-title"

export function Projects() {
  const [showAll, setShowAll] = useState(false)
  if (!PROJECTS.length) return null

  const visibleProjects = showAll ? PROJECTS : PROJECTS.slice(0, 4)

  return (
    <>
      <section className="w-full">
        <HeaderTitle title="Projects" />
        <div className="grid grid-cols-1 gap-2 py-4 sm:grid-cols-2">
          {visibleProjects.map((project) => (
            <SingleProject key={project.title} project={project} />
          ))}
        </div>
        {PROJECTS.length > 4 && (
          <div className="flex justify-center pt-2 pb-6">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowAll((prev) => !prev)}
              className="group flex cursor-pointer items-center gap-1.5 px-4 py-2 text-sm font-medium transition-all"
            >
              <span>{showAll ? "Less" : "More"}</span>
              <ChevronDown
                className={cn(
                  "size-4 transition-transform duration-300",
                  showAll && "rotate-180"
                )}
              />
            </Button>
          </div>
        )}
      </section>
    </>
  )
}

export function SingleProject({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative z-10 p-3"
    >
      {/* Link */}
      <div className="group flex w-full cursor-pointer flex-col gap-2">
        <Link
          href={project.href}
          className="border-border group-hover:border-primary/40 rounded-[10px] border p-[4px] transition-all duration-300 group-hover:shadow-xs"
        >
          <div
            className={cn(
              "bg-muted border-border relative aspect-video w-full overflow-hidden rounded-[6px] border select-none",
              "bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] transition-all duration-300 [--pattern-foreground:var(--color-edge)]/0 group-hover:[--pattern-foreground:var(--color-border)]/90"
            )}
          >
            <h1 className="text-muted-foreground absolute top-2 left-2 text-xs font-medium transition-all duration-300 group-hover:left-1/2 group-hover:-translate-x-1/2">
              {project.title}
            </h1>
            <div className="bg-background absolute bottom-0 left-1/2 h-[80%] w-[80%] -translate-x-1/2 rounded-t-[6px] p-[2px] pb-0 transition-all duration-300 group-hover:h-[75%]">
              <div className="h-full w-full overflow-hidden rounded-t-[4px]">
                <div className="hidden dark:block">
                  <Image
                    alt="Dark Screenshot"
                    loading="lazy"
                    width="1000"
                    height="1000"
                    decoding="async"
                    data-nimg="1"
                    className="h-full w-full object-cover"
                    src={project.darkModeImage}
                  />
                </div>
                <div className="block dark:hidden">
                  <Image
                    src={project.image}
                    alt="Light Screenshot"
                    loading="lazy"
                    width="1000"
                    height="1000"
                    decoding="async"
                    data-nimg="1"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </Link>
        <div className="flex flex-col gap-1 px-2">
          <Link href={project.href}>
            <div className="flex items-center justify-between">
              <h3 className="text-primary/95 mb-0.5 text-sm leading-snug font-medium text-balance sm:text-base">
                {project.title}
              </h3>
            </div>
            <CardDescription className="text-muted-foreground min-h-[38px] text-xs sm:text-sm leading-snug">
              {project.description}
            </CardDescription>
          </Link>

          {project.skills && project.skills.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.skills.slice(0, 3).map((skill) => (
                <span
                  key={skill}
                  className="bg-muted/80 text-muted-foreground/90 text-[11px] font-medium px-2 py-0.5 rounded-md border border-border/60"
                >
                  {skill}
                </span>
              ))}
              {project.skills.length > 3 && (
                <span className="text-muted-foreground/60 text-[11px] font-medium px-1 py-0.5">
                  +{project.skills.length - 3}
                </span>
              )}
            </div>
          )}

          <div className="flex items-center justify-between gap-1 pt-1.5 select-none">
            <div className="flex gap-x-2">
              {project.liveLink && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      className="text-muted-foreground hover:text-foreground flex size-6 shrink-0 items-center justify-center"
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkIcon className="pointer-events-none size-4" />
                      <span className="sr-only">Open Project Link</span>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>Open Project Link</TooltipContent>
                </Tooltip>
              )}

              {project.githubLink && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      className="text-muted-foreground hover:text-foreground flex size-6 shrink-0 items-center justify-center"
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GithubIcon className="ring-muted-foreground pointer-events-none size-4" />
                      <span className="sr-only">Open GitHub Link</span>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>Open GitHub Link</TooltipContent>
                </Tooltip>
              )}
            </div>
            <Link href={project.href} className="flex">
              <p className="text-foreground text-xs transition-colors duration-300">
                View Project
              </p>
              <ArrowRight className="text-foreground ml-1 size-3 -rotate-45 transition-all duration-300 group-hover:rotate-0 sm:size-4" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
