"use client"

import fallbackData from "@/data/github-contributions.json"
import { USER } from "@/data"
import { cn } from "@/lib/utils"
import { GithubIcon } from "lucide-react"
import { motion } from "motion/react"
import { useEffect, useMemo, useState } from "react"
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip"
import { HeaderTitle } from "./header-title"

type DayContribution = {
  date: string
  count: number
  level: number
}

type ContributionsData = {
  total: {
    lastYear: number
  }
  contributions: DayContribution[]
}

const LEVEL_COLORS = [
  "bg-neutral-200 dark:bg-neutral-800/80 border border-neutral-300/40 dark:border-neutral-700/30",
  "bg-emerald-300 dark:bg-emerald-950 border border-emerald-400/40 dark:border-emerald-800/50",
  "bg-emerald-400 dark:bg-emerald-800 border border-emerald-500/40 dark:border-emerald-700/60",
  "bg-emerald-500 dark:bg-emerald-600 border border-emerald-600/40 dark:border-emerald-500/60",
  "bg-emerald-600 dark:bg-emerald-400 border border-emerald-700/40 dark:border-emerald-300/60",
]

function formatDate(dateStr: string) {
  const [year, month, day] = dateStr.split("-").map(Number)
  const date = new Date(year, month - 1, day)
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}

export function GitHubContributions() {
  const [data, setData] = useState<ContributionsData>(fallbackData as ContributionsData)

  useEffect(() => {
    async function fetchLatest() {
      try {
        const res = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${USER.username}?y=last`
        )
        if (res.ok) {
          const json = await res.json()
          if (json?.contributions?.length) {
            setData(json)
          }
        }
      } catch {
        // Fallback data already present
      }
    }
    fetchLatest()
  }, [])

  // Group into weeks of 7 days
  const { weeks, monthLabels } = useMemo(() => {
    const list = data.contributions || []
    const weekGroups: DayContribution[][] = []
    for (let i = 0; i < list.length; i += 7) {
      weekGroups.push(list.slice(i, i + 7))
    }

    const labels: { index: number; month: string }[] = []
    let lastMonth = -1

    weekGroups.forEach((week, wIndex) => {
      const firstDay = week[0]
      if (firstDay) {
        const monthIndex = new Date(firstDay.date).getMonth()
        if (monthIndex !== lastMonth) {
          lastMonth = monthIndex
          labels.push({
            index: wIndex,
            month: new Date(firstDay.date).toLocaleDateString("en-US", {
              month: "short",
            }),
          })
        }
      }
    })

    return { weeks: weekGroups, monthLabels: labels }
  }, [data])

  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full"
    >
      <HeaderTitle title="Contributions" />

      <div className="p-3">
        <div className="border-border/80 bg-card/40 rounded-xl border p-3 sm:p-4">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-primary text-xs font-medium sm:text-sm">
              <span className="font-semibold text-emerald-500 dark:text-emerald-400">
                {data.total?.lastYear || 573}
              </span>{" "}
              contributions in the last year
            </p>
            <a
              href={`https://github.com/${USER.username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary flex items-center gap-1.5 text-xs transition-colors"
            >
              <GithubIcon className="size-3.5" />
              <span>@{USER.username}</span>
            </a>
          </div>

          {/* Grid Container */}
          <div className="overflow-x-auto pb-1">
            <div className="inline-flex flex-col gap-1 min-w-full">
              {/* Month Header */}
              <div className="flex text-[10px] text-muted-foreground pl-6">
                {weeks.map((_, i) => {
                  const label = monthLabels.find((m) => m.index === i)
                  return (
                    <div
                      key={i}
                      className="w-[14px] shrink-0 text-left"
                    >
                      {label ? label.month : ""}
                    </div>
                  )
                })}
              </div>

              {/* Day Labels + Contribution Heatmap */}
              <div className="flex gap-1.5 items-center">
                {/* Day Labels: Mon, Wed, Fri */}
                <div className="flex flex-col justify-between h-[88px] text-[9px] text-muted-foreground pr-1 shrink-0 select-none">
                  <span>Mon</span>
                  <span>Wed</span>
                  <span>Fri</span>
                </div>

                {/* Heatmap Columns */}
                <div className="flex gap-[3px]">
                  {weeks.map((week, wIndex) => (
                    <div key={wIndex} className="flex flex-col gap-[3px]">
                      {week.map((day) => (
                        <Tooltip key={day.date}>
                          <TooltipTrigger asChild>
                            <div
                              className={cn(
                                "size-[11px] rounded-[2px] transition-transform duration-100 hover:scale-125 cursor-pointer",
                                LEVEL_COLORS[day.level] || LEVEL_COLORS[0]
                              )}
                            />
                          </TooltipTrigger>
                          <TooltipContent className="text-xs">
                            <p>
                              <span className="font-semibold">
                                {day.count === 0 ? "No" : day.count} contribution
                                {day.count === 1 ? "" : "s"}
                              </span>{" "}
                              on {formatDate(day.date)}
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Legend Footer */}
              <div className="mt-3 flex items-center justify-end gap-1.5 text-[10px] text-muted-foreground select-none">
                <span>Less</span>
                {LEVEL_COLORS.map((colorClass, idx) => (
                  <div
                    key={idx}
                    className={cn("size-[10px] rounded-[2px]", colorClass)}
                  />
                ))}
                <span>More</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
