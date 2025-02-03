'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import './client.css'

export default function ClientItem({backGroundColorClass, name, sentences, imgBg}) {
    const [isHovered, setIsHovered] = useState(false)
    
  return (
    <div className="card-size justify-center flex drop-shadow-xl">
        <div className="relative w-full h-auto my-2">
            <div 
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={cn(
                `relative overflow-scroll pb-4 scale-95 shadow-2xl rounded-xl transition-all duration-300 ease-in-out`,
                " w-full h-full", // Default size
                )}
            >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                <Image 
                    src={imgBg}
                    alt="Card Background"
                    fill
                    className="object-cover"
                />
                </div>

                {/* Text Section */}
                <div 
                className={cn(
                    `absolute bottom-0 left-0 right-0 ${backGroundColorClass} text-colors-berry-green-l`,
                    "transition-all duration-300 ease-in-out",
                    isHovered ? "h-3/4" : "h-1/5" // Grow text section on hover
                )}
                >
                    <div className="text-center">
                        <span className="before:block before:absolute before:-inset-2 before:-skew-y-2 before:bg-green-berry-l-100 relative inline-block mb-6 px-1">
                            <h3 className="relative uppercase text-colors-berry-green font-semibold">
                            Pour les {name}
                            </h3>
                        </span>
                        <div className={cn("text-center text-base",isHovered ? "hidden" : "font-medium")}>
                            <p className="pt-2">En savoir plus</p>   
                        </div>
                        <div className={cn("text-left text-sm",isHovered ? "font-normal" : "hidden")}>
                            <ul className="ml-8 mr-4 pb-2 list-disc">
                                {sentences.map((sentence, index) => (
                                    <li className="mb-2" key={`${sentence} + ${index}`}>{sentence}</li>
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