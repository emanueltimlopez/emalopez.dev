export function CTAHeader() {
  return (
    <div className="absolute hidden right-[10%] top-0 mt-6 bg-secondary-text rounded-[50px] w-[220px] h-[60px] md:flex items-center overflow-hidden">
      <img className="rounded-[70px] rounded-tr-none h-full" src="/me-mobile.png" alt="picture of Ema"/>
      <a className="font-serif text-lg text-white py-6 px-2" href="#contact">{"Let's"} Talk</a>
    </div>
  )
}
