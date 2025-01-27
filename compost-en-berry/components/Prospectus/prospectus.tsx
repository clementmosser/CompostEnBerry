'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Prospectus() {
  const [isFullScreen, setIsFullScreen] = useState(false)

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen)
  }

  return (
    <div 
      className="
        relative 
        bg-yellow-berry-100
        flex 
        items-center 
        justify-center 
        overflow-hidden
      "
    >
      {/* Crooked Text */}
      <div 
        className="
          absolute
          top-0
          mt-2
          z-10
          transform
          bg-green-berry-100
          px-4 
          py-2 
          rounded-md
        "
      >
        <h1 className="text-2xl drop-shadow-2xl uppercase font-bold text-yellow-berry-100">
          Rejoignez nous!
        </h1>
      </div>

      {/* Image Container */}
      <div 
        className="
          relative 
          size-11/12
          h-[70vh]
          md:h-[80vh]
          group
          my-4
        "
      >
        {/* Image */}
        <Image 
          src="/engagez-vous-1.jpg?height=800&width=600" 
          alt="Prospectus Image"
          fill
          className="
            cursor-pointer
            object-contain 
            transition-transform 
            duration-300 
            group-hover:scale-105
          "
          onClick={toggleFullScreen}
        />
      </div>

      {/* Full Screen Overlay */}
      {isFullScreen && (
        <div 
          className="
            fixed 
            inset-0 
            z-50 
            bg-black/90 
            flex 
            items-center 
            justify-center 
            p-8
          "
          onClick={toggleFullScreen}
        >
          <div className="relative w-full h-full max-w-[95vw] max-h-[95vh]">
            <Image 
              src="/engagez-vous-1.jpg?height=800&width=600" 
              alt="Prospectus Image Full Screen"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  )
}