'use client'

import { PropsWithChildren, useEffect, useState } from "react"

export function Menu({ children }: PropsWithChildren) {
  const [moveHeader, setMoveHeader] = useState(false)

  useEffect(() => {
    const handleScroll = (event: Event) => {
      const scroll =  window.scrollY
      if (scroll > 150) {
        setMoveHeader(true)
      } else {
        setMoveHeader(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className={`${!moveHeader ? 'absolute' : 'fixed animate-header'} top-0 left-0 flex justify-center w-full z-20`}>
      <ul className={`flex text-lg gap-10 m-6 py-4 px-6 rounded-[70px] ${moveHeader && 'backdrop-blur-sm backdrop-brightness-110'}`}>
        { children }
      </ul>
    </div>
  )
}
