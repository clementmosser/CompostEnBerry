'use client'
import Image from 'next/image'
import { supabase } from '@/lib/supabase/client'

// Get list of all images in the folder /partenaires
const { data, error } = await supabase.storage.from('images').list('partenaires')

const logos: string[] = [];

if (error){
  console.log("Erreur lors du chargement des images des partenaires")
  console.log(error)
} else {
  for (let i=0; i < data?.length; i++ ){
    const imgInfo=data[i];
    const { data : dataUrl } = supabase.storage.from("images").getPublicUrl(`partenaires/${imgInfo.name}`);
    logos.push(dataUrl.publicUrl)
  }
}

export default function PartnersList() {
  
  return (
    <> 
        {logos.map((logo, index) => (
            <Image 
                key={index} 
                src={logo} 
                alt={`Logo ${index + 1}`} 
                width={100} 
                height={150} 
                className="h-20 m-auto size-full hover:saturate-50"
            />
        ))}
    </>
    
  )
}