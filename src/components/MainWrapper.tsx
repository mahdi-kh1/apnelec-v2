"use client"
import { usePathname } from 'next/navigation'

export default function MainWrapper({
  children
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isHomePage = pathname === '/' || pathname === '/sign-up' || pathname === '/sign-in' || pathname === '/access'

  return (
    <main className={`${!isHomePage ? 'pt-32' : ''}`}>
      {children}
    </main>
  )
}