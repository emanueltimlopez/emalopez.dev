import { PropsWithChildren } from "react";

export function Articles({ children }: PropsWithChildren) {
  return (
    <section id="projects" className="p-6 md:p-20 md:grid md:grid-cols-2">
      {children}
    </section>
  );
}
