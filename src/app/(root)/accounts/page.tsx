import { BackButton } from "@/components/site/component-info"
import { ContainerWrapper } from "@/components/site/container"
import { Separator } from "@/components/profile/separator"
import { USER } from "@/data"
import { ExternalLink } from "lucide-react"
import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Accounts | Chiru Chiru",
  description: "Connect with Chiru Chiru on social platforms and email.",
}

export default function AccountsPage() {
  return (
    <ContainerWrapper className="py-6">
      <BackButton title="Back" href="/" />
      <Separator />

      <div className="px-4 py-8">
        <div className="space-y-2 mb-8">
          <h1 className="text-primary text-2xl font-bold tracking-tight sm:text-3xl">
            Accounts & Socials
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base">
            Reach out or connect with {USER.fullName} across different platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {USER.socials.map((item) => {
            const isMail = item.href.startsWith("mailto:")
            return (
              <a
                key={item.name}
                href={item.href}
                target={isMail ? undefined : "_blank"}
                rel={isMail ? undefined : "noopener noreferrer"}
                className="group border-edge hover:border-primary/50 relative flex items-center gap-4 rounded-lg border p-4 transition-colors bg-card hover:bg-accent/50"
              >
                <div className="border-edge flex size-12 shrink-0 items-center justify-center rounded-md border p-2 bg-background">
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={40}
                    height={40}
                    className="size-7 rounded-sm object-contain"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-primary font-medium text-sm">
                      {item.name}
                    </span>
                    <ExternalLink className="text-muted-foreground size-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                  <p className="text-muted-foreground truncate text-xs">
                    {item.username}
                  </p>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </ContainerWrapper>
  )
}
