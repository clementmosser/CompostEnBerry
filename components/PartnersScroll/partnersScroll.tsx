'use client'
import Strip from '@/components/Strip/strip'
import PartnersList from './partnersList'
import { useState, useEffect } from 'react'
import { Database } from '@/types/database.types'
import { supabase } from '@/lib/supabase/client'

export default function PartnersScroll() {
  const [titlePartners, setTitlePartners] = useState<Database['public']['Tables']['titles']['Row'][]>([])
    
  useEffect(() => {
  const fetchTitlePartners = async () => {
      const { data , error } = await supabase.from('titles').select('*').eq('component_name','partners')
      if (data !== null){
        console.log(data)
        setTitlePartners(data)
      } else {
          console.log(error)
      }
  }
  
  fetchTitlePartners()
  }, [])
  
  return (
    <div>
        {titlePartners.map((title)=>(
          <Strip 
            key={title.id}
            normal={title.title_normal}
            wrap={title.title_wrap}
            bgColor= "bg-green-berry-100"
            txtColor= "text-yellow-berry-100"
            bgWrap= "bg-yellow-berry-100"
            bgTxtWrap= "text-green-berry-100" 
          />
        ))}
        <div className="w-full overflow-x-hidden py-12">
          <div className="flex animate-scroll gap-16 whitespace-nowrap"> 
            <PartnersList />
            <PartnersList />
            <PartnersList />
            <PartnersList />
            <PartnersList />
            <PartnersList />
            <PartnersList />
          </div>
        </div>
    </div>
    
  )
}