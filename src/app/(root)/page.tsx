import { About } from "@/components/profile/about"
import { Blogs } from "@/components/profile/blogs"
import { Experience } from "@/components/profile/experience"
import { ProfileHeader } from "@/components/profile/profile-header"
import { Projects } from "@/components/profile/projects"
import { Separator } from "@/components/profile/separator"
import { TechStack } from "@/components/profile/tech-stack"
import { ContainerWrapper } from "@/components/site/container"
import { AnimatingScrollBars } from "@/components/site/scroll-bars"
import { BLOGS, EXPERIENCE, PROJECTS } from "@/data"

const Page = () => {
  return (
    <ContainerWrapper className="">
      <div id="about" className="scroll-mt-20" />
      <ProfileHeader />
      <Separator />

      <About />

      {PROJECTS.length > 0 && (
        <>
          <Separator />
          <Projects />
        </>
      )}

      {EXPERIENCE.length > 0 && (
        <>
          <Separator />
          <Experience />
        </>
      )}

      <Separator />
      <TechStack />

      {BLOGS.length > 0 && (
        <>
          <Separator />
          <Blogs />
        </>
      )}

      <Separator />
      <AnimatingScrollBars />
    </ContainerWrapper>
  )
}

export default Page

