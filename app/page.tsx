'use client'

import Image from "next/image"
import { ChevronDown } from 'lucide-react'
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
const { data : background } = supabase.storage.from('images').getPublicUrl('background/logo-fond-terre.png')
const { data : logoBackground } = supabase.storage.from('images').getPublicUrl('background/logo-CEB-blanc.png')

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
        {/* Accueil */}
        <div id="accueil" className="bg-fixed h-screen relative w-full overflow-hidden bg-orange-berry-100">
          {/* Background Image */}
          <Image 
            src={background.publicUrl} 
            alt="Background landscape"
            fill
            priority
            className="absolute inset-0 z-0 object-cover brightness-50"
          />
          {/* Centered Image */}
          <div className="relative z-10 flex items-center justify-center h-full">
            <Image 
              src={logoBackground.publicUrl} 
              alt="Background logo"
              width={1000} 
              height={1000} 
              className="max-w-[80%] max-h-[80%] object-contain"
            />
          </div>

          {/* Scroll Button*/}
          <div className="absolute flex justify-center bottom-0 left-0 right-0 p-6 z-20">
              <Button 
                onClick={handleScroll} 
                variant="outline" 
                size="icon" 
                className="rounded-full flex justify-center w-full size-14 mt-8 mb-6 border-0 animate-bounce bg-green-berry-100 hover:bg-green-berry-200"
              >
                <ChevronDown className="h-6 w-6" />
              </Button>
          </div>
        </div>

        {/* Affichage des préstations en fonctions des clients */}
        <div ref={targetRef}>
          <ClientGrid />
        </div>

        {/* Prospectus */}
        <div>
          <Prospectus />
        </div>

        {/* Dépliants */}
        <div>
          <Leaflets />
        </div>

        {/* Scroll des partenaires */}
        <div>
          <PartnersScroll />
        </div>

        {/* Formulaire HelloAsso */}
        <div id="joinus">
          <Helloasso />
        </div>

        {/* Contacts */}
        <div id="contact">
          <Contact/>
        </div>

      </main>

      <Footer />
    </>
    
  );
}



