import { PropsWithChildren } from "react";

export function Overlay({ children }: PropsWithChildren) {
  return ( 
    <div className="bg-overlay">
      { children }
    </div>
  )
} 
