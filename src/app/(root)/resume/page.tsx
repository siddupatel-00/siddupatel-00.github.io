import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Resume | Siddartha Surishetti",
  description: "Resume of Siddartha Surishetti",
}

export default function ResumePage() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-4 p-4 text-center">
      <p className="text-muted-foreground text-sm">Opening resume...</p>
      <a
        href="/resume.pdf"
        className="text-primary underline text-sm font-medium"
      >
        Click here if not opened automatically
      </a>
      <script
        dangerouslySetInnerHTML={{
          __html: 'window.location.replace("/resume.pdf");',
        }}
      />
    </div>
  )
}
