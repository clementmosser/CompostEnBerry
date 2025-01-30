'use client'
import Image from 'next/image'
import Strip from '@/components/Strip/strip'
import { supabase } from '@/lib/supabase/client'

// Get list of all images in the folder /partenaires
const { data, error } = await supabase.storage.from('images').list('partenaires')

const logos: string[] = [];

for (let i=0; i < data?.length; i++ ){
  const imgInfo=data[i];
  const { data : dataUrl } = supabase.storage.from("images").getPublicUrl(`partenaires/${imgInfo.name}`);
  logos.push(dataUrl.publicUrl)
}

export default function PartnersScroll() {
  
  return (
    <div>
        <Strip 
          normal="i.els nous font "
          wrap="confiance"
          bgColor= "bg-green-berry-100"
          txtColor= "text-yellow-berry-100"
          bgWrap= "bg-yellow-berry-100"
          bgTxtWrap= "text-green-berry-100" 
        />
        <div className="w-full overflow-x-hidden py-12">
            <div className="flex animate-scroll gap-16 whitespace-nowrap">  
            {logos.map((logo, index) => (
                <Image 
                  key={index} 
                  src={logo} 
                  alt={`Logo ${index + 1}`} 
                  width={100} 
                  height={150} 
                  className="h-20 m-auto size-full transition-all hover:grayscale hover:opacity-50"
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
                  className="h-20 m-auto size-full transition-all hover:grayscale hover:opacity-50"
                />
            ))}
            </div>
        </div>
    </div>
    
  )
}