import { PropsWithChildren } from "react";

export function Limit({ children }: PropsWithChildren) {
  return (
    <div className="relative max-w-[1280px] mx-auto">{ children }</div>
  )
}
