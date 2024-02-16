import { PropsWithChildren } from "react";

export function Header({ children }: PropsWithChildren) {
  return (
    <header className="flex justify-center py-10">
      { children }
    </header>
  )
}
