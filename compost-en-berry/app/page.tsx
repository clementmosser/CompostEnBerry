'use client'

import Image from "next/image"
import background from "../public/logo-fond-terre.jpeg"
import { ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useRef } from 'react'
import ClientItem from "@/components/ClientItem/clientItem"

export default function Page() {
  const targetRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <>
    <div className="bg-fixed h-screen relative w-full overflow-hidden">
      {/* Background Image */}
      <Image 
        src={background} 
        alt="Background landscape"
        fill
        priority
        className="absolute inset-0 z-0 object-cover brightness-50"
      />

      {/* Scroll Button*/}
      <div className="h-screen flex items-end justify-center bg-green-berry-100">
          <Button 
            onClick={handleScroll} 
            variant="outline" 
            size="icon" 
            className="rounded-full size-14 mt-8 mb-10 border-0 animate-bounce bg-green-berry-100 hover:bg-green-berry-200"
          >
            <ChevronDown className="h-6 w-6" />
          </Button>
      </div>
    </div>
    <div 
        ref={targetRef} 
        className="h-screen flex items-center justify-center bg-secondary/10"
      >
        <ClientItem></ClientItem>
        <ClientItem></ClientItem>
        <ClientItem></ClientItem>
    </div>
    </>
    
  );
}