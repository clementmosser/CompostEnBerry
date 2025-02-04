'use client'

import ClientItem from "./clientItem"
import { useEffect, useState } from "react"
import { supabase } from '@/lib/supabase/client'
import { Database } from '@/types/database.types'

export default function ClientGrid(){
    const [clients, setClients] = useState<Database['public']['Tables']['clients']['Row'][]>([])

    useEffect(() => {
    const fetchUsers = async () => {
        const { data, error } = await supabase.from('clients').select('*')
        if ( data !== null ){
            setClients(data)
        } else {
            console.log(error)
        }
    }
    
    fetchUsers()
    }, [])

    return(
        <>
            <div className="flex text-center justify-center bg-beige-berry-100 text-colors-berry-green text-normal sm:text-lg md:text-2xl font-bold">
                <h1 className="w-3/4 pt-6">Pour tous vos projets de compostage dans le Berry (18 et 36), l’association Compost’en Berry vous accompagne.</h1>
            </div>
            
            <div className="flex items-center justify-center bg-beige-berry-100">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {clients.map(client => (
                        //img = supabase.storage.from('images').getPublicUrl(client.img_name);
                        //imgUrl = img.publicUrl;
                        <ClientItem 
                            key={client.id} 
                            backGroundColorClass={client.backGroundColorClass} 
                            name={client.name}
                            sentences={client.sentences}
                            imgBg={client.img_url}
                        />
                    ))}
                </div>
            </div>
        </>
        
        
    )
}



