'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
        
const sentences = [
    'Installation de composteurs partagés (en pied d’immeuble, de quartier, dans les cimetières…)',
    'Initiation au compostage pour les usagers',
    'Diagnostic biodéchets dans les établissements de restauration collective',
    'Compostage autonome en établissement scolaire ou professionnel',
    'Initiation au lombricompostage, aux toilettes sèches',
    'Pilotage de projet en circuit court',
    'Gestion de plateforme de compostage de proximité',
    'Animation pédagogique en milieu scolaire, tout niveau',
]

export default function ClientItem() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="h-screen w-ful flex">
        <div className="relative w-80 h-auto my-20">
            <div 
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={cn(
                "relative overflow-hidden rounded-xl transition-all duration-300 ease-in-out",
                " w-full h-full", // Default size
                isHovered ? "scale-125 shadow-2xl" : "scale-75" // Grow on hover
                )}
            >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                <Image 
                    src="/photo1.png?height=1000&width=1500" 
                    alt="Card Background"
                    fill
                    className="object-cover"
                />
                </div>

                {/* Text Section */}
                <div 
                className={cn(
                    "absolute bottom-0 left-0 right-0 bg-green-berry-100 text-colors-berry-green-l",
                    "transition-all duration-300 ease-in-out",
                    isHovered ? "h-3/4" : "h-1/3" // Grow text section on hover
                )}
                >
                    <div className="text-center">
                        <span className="before:block before:absolute before:-inset-2 before:-skew-y-2 before:bg-green-berry-l-100 relative inline-block mb-6 px-1">
                            <h3 className="relative uppercase text-colors-berry-green font-semibold">
                            Pour les collectivités
                            </h3>
                        </span>
                        <div className={cn("text-center text-sm overflow-scroll",isHovered ? "hidden" : "font-medium")}>
                            <p>En savoir plus</p>   
                        </div>
                        <div className={cn("text-left text-xs overflow-scroll",isHovered ? "font-light" : "hidden")}>
                            <ul className="ml-8 mr-4 list-disc">
                                {sentences.map((sentence, index) => (
                                    <li className="mb-2" key={`${sentence}-${index}`}>{sentence}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
      
    </div>
  )
}