import { PropsWithChildren } from "react";

export function List({ children }: PropsWithChildren) {
  return (
    <ul className="flex flex-col gap-10 my-10">
      { children }
    </ul>
  )
}
