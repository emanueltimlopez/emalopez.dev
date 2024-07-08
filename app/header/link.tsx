import { PropsWithChildren } from "react";

interface Props {
  id: string
}

export function Link({ id, children }: PropsWithChildren<Props>) {
  return <li><a href={id} className="hover:italic" >{ children }</a></li>
}
