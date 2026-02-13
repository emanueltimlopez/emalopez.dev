import { PropsWithChildren } from "react";

export function Blog({ children }: PropsWithChildren) {
  return (
    <section id="blog" className="p-6 md:p-20 flex flex-col gap-6">
      { children }
    </section>
  )
}
