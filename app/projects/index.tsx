import { PropsWithChildren } from "react";

export function Projects({ children }: PropsWithChildren) {
  return (
    <section id="projects" className="p-6 md:p-20 flex flex-col gap-6">
      { children }
    </section>
  )
}
