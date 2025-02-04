'use client'

import { useState, useEffect } from 'react'
import { Database } from "@/types/database.types";
import { supabase } from "@/lib/supabase/client";


export default function LegalMentions() {
    const [legalMentions, setLegalMentions] = useState<Database['public']['Tables']['legal_mentions']['Row'][]>([])
  
      useEffect(() => {
      const fetchUsers = async () => {
          const { data, error } = await supabase.from('legal_mentions').select('*')
          if( data !== null ){
            setLegalMentions(data)
          } else {
            console.log(error)
          }
      }
      
      fetchUsers()
      }, [])
  
  return (
    <div className="px-10 py-8 h-fit min-h-screen bg-beige-berry-100">
        <div className="ml-2 sm:ml-8 w-11/12 md:w-3/4">
            <ol className="list-decimal">
                {legalMentions.map((legalMention, index) => (
                    <div key={`LG: + ${index}`}>
                        <li className='text-base md:text-lg font-semibold py-4'>
                            {legalMention.title}
                        </li>
                        {legalMention.content?.map((content, index) => (
                            <p key={`Content: + ${index}`} className='text-xs md:text-normal '>{content}</p>
                        ))}
                    </div>
                ))}
            </ol>
        </div>
    </div>
  )
}
