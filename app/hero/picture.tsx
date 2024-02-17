// eslint disabled @next/next/no-img-element

import Image from "next/image";

export function Picture() {
  return (
    <div className="hidden md:block absolute left-[-15%] top-[-5em]">
      <Image className="shadow-normal rounded-[70px]" width={120} height={225} src="/me.png" alt="picture of Ema"/>
    </div>
  )
}
