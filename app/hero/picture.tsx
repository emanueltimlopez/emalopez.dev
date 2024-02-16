// eslint disabled @next/next/no-img-element

export function Picture() {
  return (
    <div className="hidden md:block absolute left-[-15%] top-[-5em]">
      <img className="shadow-normal rounded-[70px]" width="120px" src="/me.png" alt="picture of Ema"/>
    </div>
  )
}
