import Link from "next/link"

export default function Footer() {
    return (
      <footer className="bg-white text-colors-berry-green p-2 w-full">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/mentions_legales" className="text-xs">
            Mentions légales
          </Link>
          <div className="text-xs">
            © Compost&apos;en Berry 2025
          </div>
        </div>
      </footer>
    )
  }