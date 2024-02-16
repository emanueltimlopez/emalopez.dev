import { PropsWithChildren } from "react";

export function Text({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col gap-5 my-8">{ children }</div>
  )
}
