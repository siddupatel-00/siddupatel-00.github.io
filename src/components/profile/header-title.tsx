import { cn, slugify } from "@/lib/utils"

type HeaderTitleProps = {
  title: string
  className?: string
}
export function HeaderTitle({ title, className }: HeaderTitleProps) {
  const slug = slugify(title)
  const id = slug === "about" ? "about-heading" : slug

  return (
    <div
      className={cn(
        "border-b-edge flex h-10 w-full items-center justify-start border-b-[1px]",
        className
      )}
    >
      <h2
        className="text-primary/90 p-2 text-xl font-bold md:text-2xl scroll-mt-16"
        id={id}
      >
        {title}
      </h2>
    </div>
  )
}
