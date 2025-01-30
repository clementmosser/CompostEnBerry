'use client'

import Image from 'next/image'
import { useState } from 'react'
import ActuComponent from './actuComponent';

const title="Ceci est un beau titre"
const texte="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."


export default function ActusGrid() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

    const images = [
        '/photo1.png?height=300&width=300',
        '/photo2.png?height=300&width=300',
        '/photo3.png?height=300&width=300',
        '/photo4.png?height=300&width=300',
        '/photo5.png?height=300&width=300',    
        '/photo1.png?height=300&width=300',    
        '/photo2.png?height=300&width=300',    
        '/photo3.png?height=300&width=300',
        '/photo4.png?height=300&width=300'
    ]

  return (
    <div className="px-8 py-16 h-fit min-h-screen bg-yellow-berry-100">
        <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-5/6">
                {images.map((src, index) => (
                    <div 
                        key={`press + ${index}`} 
                        className="aspect-square overflow-hidden hover:grayscale rounded-lg"
                        onClick={() => setSelectedImage(src)}
                    >
                        <Image 
                            src={src} 
                            width={150}
                            height={150}
                            alt={`Gallery image ${index + 1}`} 
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
            {selectedImage && (
                <div 
                  className="
                    fixed 
                    inset-0 
                    z-50 
                    bg-white/70 
                    flex 
                    items-center 
                    justify-center 
                    p-8"
                  onClick={() => setSelectedImage(null)}
                >
                    <ActuComponent
                        srcActu={selectedImage}
                        titleActu={title}
                        txtActu={texte}
                    />
                </div>
            )}
        </div>
    </div>
  )
}
