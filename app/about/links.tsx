import { PropsWithChildren } from "react";

export function Links({ children }: PropsWithChildren) {
  return (
    <ul className="mt-6 flex text-base gap-10">
      { children }
    </ul>
  )
}
