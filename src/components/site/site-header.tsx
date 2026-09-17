"use client"

import { USER } from "@/data"
import { NAV_ITEMS } from "@/data/nav-items"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "../ui/button"
import { ContainerWrapper } from "./container"
import MobileNavbar from "./mobile-nav"
import { ThemeSwitcher } from "./theme-switcher"

export function SiteHeader() {
  const pathname = usePathname()
  const activeUrl = "/" + pathname.split("/")[1]
  return (
    <header className="border-edge sticky top-0 z-50 h-12 w-full border-b-[1px] backdrop-blur-xs">
      <ContainerWrapper className="">
        <nav className="z-50 mx-auto flex h-full w-full items-center justify-between px-2">
          {/* Desktop Nav */}
          <div className="hidden h-full w-full items-center justify-between sm:flex">
            <Link
              href="/"
              onClick={(e) => {
                if (pathname === "/") {
                  e.preventDefault()
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
              }}
            >
              <h2 className="text-primary font-bold sm:text-xl">
                {USER.name.toUpperCase()}
              </h2>
            </Link>
            <ul className="flex items-center gap-x-3">
              {NAV_ITEMS.map((item, index) => {
                return (
                  <li key={index}>
                    <Button
                      variant="link"
                      asChild
                      className={cn(
                        "text-sm",
                        activeUrl === item.href
                          ? "text-primary"
                          : "text-muted-foreground"
                      )}
                    >
                      <Link
                        prefetch={false}
                        key={index}
                        href={item.href}
                        onClick={(e) => {
                          if (item.href === "/#about" && pathname === "/") {
                            e.preventDefault()
                            window.scrollTo({ top: 0, behavior: "smooth" })
                          }
                        }}
                        className="hover:text-primary"
                      >
                        {item.name}
                      </Link>
                    </Button>
                  </li>
                )
              })}
              <ThemeSwitcher />
            </ul>
          </div>
          <div className="relative flex h-full items-center gap-x-3 sm:hidden">
            <MobileNavbar activeUrl={activeUrl} />
          </div>

          <div className="sm:hidden">
            <Link
              href="/"
              onClick={(e) => {
                if (pathname === "/") {
                  e.preventDefault()
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
              }}
            >
              <span className="text-primary font-bold text-sm tracking-wide">
                {USER.name}
              </span>
            </Link>
          </div>

          <div className="sm:hidden">
            <ThemeSwitcher />
          </div>
        </nav>
      </ContainerWrapper>
    </header>
  )
}
