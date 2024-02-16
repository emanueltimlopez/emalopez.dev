import { PropsWithChildren } from "react";

export function About({ children }: PropsWithChildren) {
  return (
    <section id="about" className="p-6 md:p-20 md:grid md:grid-cols-2">
      { children }
    </section>
  ) }
