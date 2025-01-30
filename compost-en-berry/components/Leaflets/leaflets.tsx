'use client'

import Image from 'next/image'
import Strip from '../Strip/strip'
import { useState } from 'react'
import { supabase } from '@/lib/supabase/client'

// Get leaflets images
const { data :img1 } = supabase.storage.from('images').getPublicUrl('leaflets/depliant-1.jpg')
const { data :img2 } = supabase.storage.from('images').getPublicUrl('leaflets/depliant-2.jpg')



export default function Leaflets() {
  const [isFullScreen, setIsFullScreen] = useState(false)
  const [isFullScreen2, setIsFullScreen2] = useState(false)


  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen)
  }

  const toggleFullScreen2 = () => {
    setIsFullScreen2(!isFullScreen2)
  }

  return (
    <>
    <Strip 
      normal="nos dépliants de "
      wrap="présentation"
      bgColor= "bg-beige-berry-100"
      txtColor= "text-green-berry-100"
      bgWrap= "bg-green-berry-100"
      bgTxtWrap= "text-beige-berry-100" 
    >
    </Strip>

    {/* Dépliant 1 */}
    <div 
      className="
        relative 
        h-fit
        bg-beige-berry-100
        flex 
        items-center 
        justify-center 
        overflow-hidden
      "
    >
      {/* Image Container */}
      <div 
        className="
          relative 
          size-11/12
          h-[40vh]
          md:h-[60vh]
          lg:h-[80vh]
          xl:h-[95vh]
          cursor-pointer 
          group
        "
        onClick={toggleFullScreen}
      >
        {/* Image */}
        <Image 
          src={img1.publicUrl}
          alt="Leaflet Image 1"
          fill
          className="
            object-contain 
            transition-transform 
            duration-300 
            group-hover:scale-105
          "
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
              src={img1.publicUrl}
              alt="Prospectus Image Full Screen"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>

    {/* Bandeau de séparation*/}
    <div className="relative h-2 bg-beige-berry-100"></div>

    {/* Dépliant 2 */}
    <div 
      className="
        relative 
        h-fit 
        bg-beige-berry-100
        flex 
        items-center 
        justify-center 
        overflow-hidden
      "
    >
      {/* Image Container */}
      <div 
        className="
          relative 
          size-11/12
          h-[40vh]
          md:h-[60vh]
          lg:h-[80vh]
          xl:h-[95vh]
          cursor-pointer 
          group
        "
        onClick={toggleFullScreen2}
      >
        {/* Image */}
        <Image 
          src={img2.publicUrl}
          alt="Leaflet Image 1"
          fill
          className="
            object-contain 
            transition-transform 
            duration-300 
            group-hover:scale-105
          "
        />
      </div>

      {/* Full Screen Overlay */}
      {isFullScreen2 && (
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
          onClick={toggleFullScreen2}
        >
          <div className="relative w-full h-full max-w-[95vw] max-h-[95vh]">
            <Image 
              src={img2.publicUrl}
              alt="Prospectus Image Full Screen"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>

    {/* Bandeau de séparation*/}
    <div className="relative h-2 bg-beige-berry-100"></div>
    </>
    
  )
}