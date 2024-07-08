import { PropsWithChildren } from "react";

export function List({ children }: PropsWithChildren) {
  return (
    <ul className="flex flex-col gap-4 my-5">
      { children }
    </ul>
  )
}
