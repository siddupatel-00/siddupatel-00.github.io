"use client"

import { HireMe } from "@/core/hire-me"
import { USER } from "@/data"

const TEXT_TO_ANIMATE = [
  `I'm ${USER.name}`,
  "I'm a Fullstack Vibecoder",
  "Hire me, I use Next.js!",
  "Hire me, I use TypeScript!",
  "Hire me, I use Python!",
  "Hire me, I use TailwindCSS!",
]

export const HireMeDemo = () => {
  return (
    <div className="flex h-[70vh] flex-col items-center justify-center gap-4 p-4">
      <h1 className="text-base underline underline-offset-4">
        check this at bottom right!
      </h1>
      <HireMe text={TEXT_TO_ANIMATE} avatarSrc={USER.avatar} />
    </div>
  )
}

export default HireMeDemo
