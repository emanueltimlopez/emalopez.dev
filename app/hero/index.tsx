import { PropsWithChildren } from "react";

export function Hero({ children }: PropsWithChildren) {
  return (
    <section className="relative flex justify-center py-10 md:py-0 min-h-auto md:min-h-[70vh] content-center flex-wrap">
      { children }
    </section>
  )
}
