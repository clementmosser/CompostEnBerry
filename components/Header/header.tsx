'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import logo from '../../public/logo-berry.png'
import { useState, useEffect, useCallback } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '../ui/button'
import { motion, AnimatePresence } from 'framer-motion'

// Define the sections for navigation
const NAV_SECTIONS = [
  { id: 'accueil', label: 'Accueil' },
  { id: 'contact', label: 'Contact' }
]

export default function Header() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY
    
    // Determine scroll direction
    if (currentScrollY > lastScrollY) {
      // Scrolling down
      setIsVisible(false)
    } else {
      // Scrolling up
      setIsVisible(true)
    }

    // Update last scroll position
    setLastScrollY(currentScrollY)
  }, [lastScrollY])

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll)

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])


  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
      setIsMenuOpen(false) // Close mobile menu after selection
    }
  }


  return (
    // className="top-0 z-50 bg-white shadow-sm"
    <header 
      className={cn("fixed top-0 left-0 w-full z-50 bg-white shadow-md transition-all duration-300 ease-in-out",
      // Translate header up when not visible
      !isVisible && "-translate-y-full"
    )}>
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
            <div 
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="text-sm font-medium cursor-pointer text-gray-700 hover:text-green-berry-100 transition-colors py-2.5"
            >
              {section.label}
            </div>
          ))}
          <Link 
            href="/actualites"
            className="text-sm font-medium cursor-pointer text-gray-700 hover:text-green-berry-100 transition-colors py-2.5">
            Nos actualités
          </Link>
          <Button 
            type="button" 
            onClick={() => scrollToSection('joinus')}
            className="text-white bg-green-berry-100 hover:bg-green-berry-200 focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
          >
            Rejoignez-nous
          </Button>
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
                  <div 
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className="text-sm font-medium text-gray-700 hover:text-green-berry-100 transition-colors py-2.5"
                  >
                  {section.label}
                  </div>
              ))}
              <Link 
                href="/actualites"
                className="text-sm font-medium cursor-pointer text-gray-700 hover:text-green-berry-100 transition-colors py-2.5">
                Nos actualités
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      </div>
    </header>
  )
}
