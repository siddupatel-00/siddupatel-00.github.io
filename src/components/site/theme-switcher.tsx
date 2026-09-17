"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const currentTheme = resolvedTheme || theme

  const handleClick = () => {
    if (currentTheme === "dark") {
      setTheme("light")
    } else {
      setTheme("dark")
    }
  }

  if (!mounted) {
    return (
      <div className="hover:bg-accent/50 flex cursor-pointer items-center justify-center rounded-md p-2 transition-colors">
        <div className="size-5" />
      </div>
    )
  }

  return (
    <div
      className="hover:bg-accent/50 flex cursor-pointer items-center justify-center rounded-md p-2 transition-colors"
      onClick={handleClick}
      aria-label="Toggle theme"
      role="button"
    >
      {currentTheme === "dark" ? (
        <Sun className="size-5" />
      ) : (
        <Moon className="size-5" />
      )}
    </div>
  )
}
