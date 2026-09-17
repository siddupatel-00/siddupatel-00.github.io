import { USER } from "@/data"
import { Button } from "../ui/button"
import { ContainerWrapper } from "./container"

export function SiteFooter() {
  return (
    <footer className="border-edge w-full border-b-[1px] py-3">
      <ContainerWrapper className="relative">
        <div className="py-0">
          <h3 className="text-muted-foreground px-4 text-center font-mono text-xs text-balance">
            Developed by{" "}
            <Button
              asChild
              variant="link"
              className="m-0 p-0 text-xs underline"
            >
              <a
                href={
                  USER.socials.find((s) => s.name.toLowerCase() === "github")
                    ?.href || "https://github.com/siddupatel-00"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                {USER.name}
              </a>
            </Button>{" "}
            • Portfolio inspired by{" "}
            <Button
              asChild
              variant="link"
              className="m-0 p-0 text-xs underline"
            >
              <a
                href="https://udaykiran.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                udaykiran.dev
              </a>
            </Button>
          </h3>
        </div>
      </ContainerWrapper>
    </footer>
  )
}
