import { Metadata } from "next"

import './globals.css'

export const metadata: Metadata = {
  title: {
    default: "Compost'en Berry",
    template: "%s | Compost'en Berry"
  },
  icons: {
    icon: '/app/favicon.ico'
  }
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
          {children}
      </body>
    </html>
  )
}