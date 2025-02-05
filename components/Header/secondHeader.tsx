'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import logo from '../../public/logo-berry.png'
import { useState } from 'react'
import { Button } from '../ui/button'
import { motion, AnimatePresence } from 'framer-motion'

// Define the sections for navigation
const NAV_SECTIONS = [
  { id: '/', label: 'Accueil' },
  { id: 'actualites', label: 'Nos actualités' },
]

export default function SecondHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    // className="top-0 z-50 bg-white shadow-sm"
    <header 
      className="w-full z-50 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-1 px-4 md:px-6 lg:px-2">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image 
            src={logo} 
            alt="Logo" 
            width={200} 
            height={200} 
            className="h-16 py-2 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {NAV_SECTIONS.map((section) => (
            <Link 
                key={section.id}
                href={`/${section.id}`}
                className="text-sm font-medium cursor-pointer text-gray-700 hover:text-green-berry-100 transition-colors py-2.5">
                    {section.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <Button 
            variant="outline" 
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>

        </div>

        <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, x: 20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: -20, x: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="fixed top-16 right-4 z-40 bg-white shadow-lg rounded-lg border"
          >
            <div className="flex flex-col p-4 space-y-2 min-w-[200px] cursor-pointer">
                {NAV_SECTIONS.map((section) => (
                    <Link 
                    key={section.id}
                    href={`/${section.id}`}
                    className="text-sm font-medium cursor-pointer text-gray-700 hover:text-green-berry-100 transition-colors py-2.5">
                        {section.label}
                    </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      </div>
    </header>
  )
}
