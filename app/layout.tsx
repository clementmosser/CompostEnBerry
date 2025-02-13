import { Metadata } from "next"

import './globals.css'

export const metadata: Metadata = {
  title: {
    default: "Compost'en Berry",
    template: "%s | Compost'en Berry"
  },
  description: 'Compostage de proximité et collecte des biodéchets',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.ico'},
    ],
    apple: [
      { url: '/apple-icon.png' },
    ],
  },
  openGraph: {
    title: "Compost'en Berry / Compostage et collecte des biodéchets",
    description: "Compost'en Berry c'est de l'animation et un service de collecte des biodéchets pour les établissements de restauration collective.",
    url: 'https://www.compostenberry.fr',
    siteName: "Compost'en Berry",
    images: [
      {
        url: 'https://www.compostenberry.fr/favicon.ico',
        width: 800,
        height: 600,
      },
    ]
  },
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