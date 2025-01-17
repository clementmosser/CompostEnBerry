'use client'
import Image from 'next/image'
import Strip from '@/components/Strip/strip'

const logos = [
  '/logo-alter-incub.png',
  '/logo-ch-jacques-coeur.png',
  '/logo-bourges-plus.png',
  '/logo-bourges.png',
  '/logo-coeur-de-berry.png',
  '/logo-credit-agricole.png?height=150&width=150',
  '/logo-georgia.png',
  '/logo-sainte-thorette.png',
  '/logo-smictrem.png',
]

export default function PartnersScroll() {
  return (
    <div>
        <Strip 
          normal="i.els nous font"
          wrap="confiance"
        >
        </Strip>
        <div className="w-full overflow-x-scroll py-8">
            <div className="flex animate-scroll gap-16 whitespace-nowrap">  
            {logos.map((logo, index) => (
                <Image 
                key={index} 
                src={logo} 
                alt={`Logo ${index + 1}`} 
                width={100} 
                height={150} 
                className="grayscale h-14 m-auto size-full opacity-50 transition-all hover:grayscale-0 hover:opacity-100"
                />
            ))}
            {/* Duplicate logos for infinite scroll effect */}
            {logos.map((logo, index) => (
                <Image 
                key={`duplicate-${index}`} 
                src={logo} 
                alt={`Logo ${index + 1}`} 
                width={100} 
                height={100} 
                className="grayscale m-auto size-full opacity-50 transition-all hover:grayscale-0 hover:opacity-100"
                />
            ))}
            </div>
        </div>
    </div>
    
  )
}