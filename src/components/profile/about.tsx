import { HeaderTitle } from "./header-title"

export function About() {
  return (
    <section className="w-full">
      <HeaderTitle title="About" />
      <div className="p-3">
        <ul className="space-y-3">
          <li className="flex items-start gap-2.5 text-primary/90 text-sm sm:text-base leading-relaxed">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
            <span>
              <strong className="font-semibold text-primary">Fullstack Vibecoder:</strong> Dedicated to architecting and shipping clean, neat, end-to-end web products with modern web technologies and AI developer tools.
            </span>
          </li>
          <li className="flex items-start gap-2.5 text-primary/90 text-sm sm:text-base leading-relaxed">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
            <span>
              <strong className="font-semibold text-primary">Problem Solving:</strong> Strong foundational depth with 100+ Data Structures &amp; Algorithms problems solved in Python.
            </span>
          </li>
          <li className="flex items-start gap-2.5 text-primary/90 text-sm sm:text-base leading-relaxed">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
            <span>
              <strong className="font-semibold text-primary">Full-Stack Engineering:</strong> Building production-grade apps with Next.js, React, TypeScript, WebRTC, and distributed edge databases.
            </span>
          </li>
        </ul>
      </div>
    </section>
  )
}


