'use client'

import Strip from '../Strip/strip'
import { useState, useEffect } from 'react'
import { Database } from '@/types/database.types'
import { supabase } from '@/lib/supabase/client'

export default function Helloasso() {
  const [titleHelloasso, setTitleHelloasso] = useState<Database['public']['Tables']['titles']['Row'][]>([])
      
  useEffect(() => {
  const fetchTitleHelloasso = async () => {
      const { data , error } = await supabase.from('titles').select('*').eq('component_name','helloasso')
      if (data !== null){
        console.log(data)
        setTitleHelloasso(data)
      } else {
          console.log(error)
      }
  }
  
  fetchTitleHelloasso()
  }, [])

  return (
    <>
      {titleHelloasso.map((title)=>(
        <Strip 
          key={title.id}
          normal={title.title_normal}
          wrap={title.title_wrap}
          bgColor= "bg-helloasso"
          txtColor= "text-white"
          bgWrap= "bg-white"
          bgTxtWrap= "text-colors-helloasso"
        />
      ))}
      <div className="flex items-center justify-center pt-4 pb-10 bg-helloasso">
        <iframe 
          id="haWidget" 
          src="https://www.helloasso.com/associations/compost-en-berry/adhesions/adhesion2025/widget" 
          className="w-4/5 h-screen">
        </iframe>
      </div>
    </>
    
  )
}