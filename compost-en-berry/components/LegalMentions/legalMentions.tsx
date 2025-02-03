'use client'

import { useState, useEffect } from 'react'
import { Database } from "@/types/database.types";
import { supabase } from "@/lib/supabase/client";


export default function LegalMentions() {
    const [legalMentions, setLegalMentions] = useState<Database['public']['Tables']['legal_mentions']['Row'][]>([])
  
      useEffect(() => {
      const fetchUsers = async () => {
          const { data } = await supabase.from('legal_mentions').select('*')
          setLegalMentions(data)
      }
      
      fetchUsers()
      }, [])
  
  return (
    <div className="px-8 py-8 h-fit min-h-screen bg-beige-berry-100">
        <div className="ml-2 sm:ml-8 w-11/12 md:w-3/4">
            {legalMentions.map((legalMention, index) => (
                <ol key={`LG: + ${index}`}>
                    <li className='text-base md:text-lg font-semibold py-4'>{legalMention.title}</li>
                    {legalMention.content?.map((content, index) => (
                        <p key={`Content: + ${index}`} className='text-xs md:text-normal '>{content}</p>
                    ))}
                </ol>
                
            ))}
        </div>
    </div>
  )
}
