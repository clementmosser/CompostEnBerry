'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Database } from "@/types/database.types";
import { supabase } from "@/lib/supabase/client";
import Link from 'next/link';
import './actus.css'

function dateFormat(date: string | number | Date){
    const newDate = new Date(date)
        const formattedDate = new Intl.DateTimeFormat('fr-FR', { year: 'numeric', month: 'short', day: 'numeric' }).format(newDate);
        return formattedDate;
}

export default function ActusGrid() {
    const [actus, setActus] = useState<Database['public']['Tables']['actualites']['Row'][]>([])
  
    useEffect(() => {
    const fetchActus = async () => {
        const { data , error } = await supabase.from('actualites').select('*').order('created_at', {ascending: false})
        if (data !== null){
            setActus(data)
        } else {
            console.log(error)
        }
    }
    
    fetchActus()
    }, [])
  
  return (
    <div className="px-2 py-10 h-fit min-h-screen bg-beige-berry-100">
        <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 w-11/12">
                {actus.map((actu, index) => (
                    <div key={`Actu: + ${index}`} className="aspect-video relative overflow-hidden hover:saturate-50 hover:drop-shadow-xl rounded-xl" >
                    <Link href={`/actualites/${actu.id}`}>
                        <Image 
                            src={`${actu.cover_photo}`} 
                            width={1000}
                            height={1000}
                            alt={`Gallery image ${index + 1}`} 
                            className="w-full h-full absolute object-cover"
                        />
                        
                        {/* Centered Text Container */}
                        <div className="relative z-20 flex items-end h-full text-background">
                            <div className="text-white text-left max-w-2xl">
                                <p className='text-xs sm:text-sm md:text-md font-light mx-4 mb-2'>
                                    {dateFormat(actu.created_at)}
                                </p>
                                <h1 className="text-normal sm:text-normal md:text-lg font-semibold mx-4 mb-6">
                                    {actu.title}
                                </h1>
                            </div>
                        </div>
                    </Link>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
