import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import MainWrapper from '@/components/MainWrapper'

export default function ApplicationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-white dark:bg-[#1f1f1f]">
      <Navbar />
      <MainWrapper>
        {children}
      </MainWrapper>
      <Footer />
    </div>
  )
}