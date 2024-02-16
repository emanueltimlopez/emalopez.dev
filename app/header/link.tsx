import { PropsWithChildren } from "react";

interface Props {
  id: string
}

export function Link({ id, children }: PropsWithChildren<Props>) {
  return <li><a href={`#${id}`}>{ children }</a></li>
}
