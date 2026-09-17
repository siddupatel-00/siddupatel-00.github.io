import { TECH_STACK } from "@/data/tech-stack"
import Image from "next/image"
import { Button } from "../ui/button"
import { HeaderTitle } from "./header-title"

export function TechStack() {
  return (
    <>
      <section className="w-full">
        <HeaderTitle title="Tech Stack" />
        <div className="my-2 grid w-full grid-cols-4 gap-2 p-2 lg:grid-cols-6">
          {TECH_STACK.map((item) => {
            const ext = item.ext || (item.key === "antigravity" ? "png" : "svg")
            return (
              <div
                key={item.key}
                className="flex items-center justify-center sm:justify-start"
              >
                {item.theme ? (
                  <>
                    <Image
                      src={`/assets/tech-stack/${item.key}-light.${ext}`}
                      alt={item.title}
                      width={48}
                      height={48}
                      quality={100}
                      unoptimized
                      fetchPriority="high"
                      className="h-8 w-8 rounded-sm dark:hidden"
                    />
                    <Image
                      src={`/assets/tech-stack/${item.key}-dark.${ext}`}
                      alt={item.title}
                      width={48}
                      height={48}
                      quality={100}
                      unoptimized
                      fetchPriority="high"
                      className="hidden h-8 w-8 rounded-sm dark:block"
                    />
                  </>
                ) : (
                  <Image
                    src={item.image || `/assets/tech-stack/${item.key}.${ext}`}
                    alt={item.title}
                    width={48}
                    height={48}
                    quality={100}
                    unoptimized
                    fetchPriority="high"
                    className="h-8 w-8 rounded-sm"
                  />
                )}
                <Button
                  variant="link"
                  className="ml-2 hidden p-0 sm:inline-block"
                >
                  {item.title}
                </Button>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}
