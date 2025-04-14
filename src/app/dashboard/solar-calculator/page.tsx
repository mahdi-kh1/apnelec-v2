import { Metadata } from "next"
import SolarCalculator from "@/components/solar-calculator/SolarCalculator"

export const metadata: Metadata = {
  title: "Solar Calculator",
  description: "Calculate solar installation details and save them as installations.",
}

export default function SolarCalculatorPage() {
  return (
    <div className="container py-10">
      <SolarCalculator />
    </div>
  )
} 