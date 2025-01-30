'use client'

import Image from "next/image"
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useRef } from 'react'
import Leaflets from "@/components/Leaflets/leaflets"
import PartnersScroll from "@/components/PartnersScroll/partnersScroll"
import Prospectus from "@/components/Prospectus/prospectus"
import Contact from "@/components/Contact/contact"
import ClientGrid from "@/components/Clients/clientGrid"
import Helloasso from "@/components/Helloasso/helloasso"
import Header from "@/components/Header/header"
import Footer from "@/components/Footer/footer"
import { supabase } from "@/lib/supabase/client"

// Get prospectus image
const { data : background } = supabase.storage.from('images').getPublicUrl('background/logo-fond-terre.jpeg')

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
    <Header />
      <main>
        <div id="accueil" className="bg-fixed h-screen relative w-full overflow-hidden">
          {/* Background Image */}
          <Image 
            src={background.publicUrl} 
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
        <div ref={targetRef}>
          <ClientGrid />
        </div>
        
        <Prospectus />
        <Leaflets />
        <PartnersScroll />
        <div id="joinus"><Helloasso /></div>
        <div id="contact"><Contact/></div>

        <Button 
          className="rounded-full fixed bottom-4 left-4 z-50 bg-green-berry-100/50 hover:bg-green-berry-200/80" 
          size="icon"
          onClick={handleScroll}
        >
          <ChevronUp className="h-6 w-6" />
        </Button>
      </main>
      <Footer />
    </>
    
  );
}



