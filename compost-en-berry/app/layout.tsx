import Header from "../components/Header/header"
import PartnersScroll from "@/components/PartnersScroll/partnersScroll"

import './globals.css'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        <Header />
        {/* Layout UI */}
        {/* Place children where you want to render a page or nested layout */}
        <main>
          {children}
          <PartnersScroll />
        </main>
      </body>
    </html>
  )
}