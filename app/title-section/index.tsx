import { ReactElement } from "react";

interface Props {
  section: string;
  text: ReactElement;
}

export function TitleSection({ section, text }: Props){
  return (
    <div>
      <p className="text-xl">---{section}</p>
      <h3 className="font-serif text-3xl text-secondary-text font-bold">{text}</h3>
    </div> 
 )
}
