import { PropsWithChildren } from "react";

export function Contact({ children }: PropsWithChildren) {
  return (
    <section id="contact" className="p-6 md:p-20 md:grid md:grid-cols-2">
      { children }
    </section>
  ) }
