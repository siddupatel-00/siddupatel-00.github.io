"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"

export function BackButton({ title, href }: { title: string; href: string }) {
  return (
    <>
      <Link
        href={href}
        className="flex items-center justify-start gap-x-1 px-1"
      >
        <Button
          variant={"ghost"}
          size={"icon"}
          className="size-6 cursor-pointer"
        >
          <ArrowLeft className="text-primary/90 size-5" />
        </Button>
        <div>
          <div className="border-edge border-b-[1px] px-2">
            <Button
              variant={"link"}
              className="mx-0 cursor-pointer px-0 text-base"
            >
              {title}
            </Button>
          </div>
        </div>
      </Link>
    </>
  )
}
