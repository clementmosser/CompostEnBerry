'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Menu } from 'lucide-react'
import logo from '../../public/logo-berry.png'
import { useState, useEffect, useCallback } from 'react'
import { cn } from '@/lib/utils'


export default function Header() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

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
            width={150} 
            height={150} 
            className="h-15 w-auto"
          />
        </Link>

        {/* Navigation for larger screens */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            href="/" 
            className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
          >
            Accueil
          </Link>
          <Link 
            href="/contact" 
            className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
          >
            Contact
          </Link>
          <Link 
            href="/presse" 
            className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
          >
            La presse en parle!
          </Link>
          <button type="button" className="text-white bg-green-berry-100 hover:bg-green-berry-200 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">Rejoignez-nous</button>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <div>
            <Menu className="h-6 w-6" />
          </div>
        </div>
      </div>
    </header>
  )
}