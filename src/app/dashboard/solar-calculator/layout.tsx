import { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: "Solar Calculator",
    template: "%s | Solar Calculator",
  },
  description: "Calculate solar installation details and save them as installations.",
}

interface SolarCalculatorLayoutProps {
  children: React.ReactNode
}

export default function SolarCalculatorLayout({
  children,
}: SolarCalculatorLayoutProps) {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Solar Calculator</h2>
      </div>
      {children}
    </div>
  )
} 