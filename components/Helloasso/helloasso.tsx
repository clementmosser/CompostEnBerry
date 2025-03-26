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
        setTitleHelloasso(data)
      } else {
        console.log(error)
      }
  }
  
  fetchTitleHelloasso()
  }, [])

  const [presentation, setPresentation] = useState<Database['public']['Tables']['adhesion_presentation']['Row'][]>([])
    
  useEffect(() => {
  const fetchPresentation = async () => {
      const { data , error } = await supabase.from('adhesion_presentation').select('*')
      if (data !== null){
        setPresentation(data)
      } else {
        console.log(error)
      }
  }
  
  fetchPresentation()
  }, [])

  const [goals, setGoals] = useState<Database['public']['Tables']['adhesion_goals']['Row'][]>([])
    
  useEffect(() => {
  const fetchGoals = async () => {
      const { data , error } = await supabase.from('adhesion_goals').select('*')
      if (data !== null){
        setGoals(data)
      } else {
        console.log(error)
      }
  }
  
  fetchGoals()
  }, [])

  return (
    <div className='bg-helloasso'>
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

      <div className="flex items-center justify-center py-10 border-none">
        {presentation.map((pres)=>(
          <div key={pres.id} className='w-4/5 text-justify text-white'>
            {(pres.text ?? []).map((sentence, index)=>(
              <p 
                key={`Sentence+ ${index}`}
                className='pb-3'
              >
                {sentence}
              </p>   
        ))}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center pt-4 pb-10">
        <iframe 
          id="haWidget" 
          src="https://www.helloasso.com/associations/compost-en-berry/adhesions/adhesion2025/widget"
          className="w-4/5 h-screen lg:h-[640px] xl:h-[620px]">
        </iframe>
      </div>
      <div className='text-white text-justify'>
        {goals.map((goal)=>(
          <GoalItem 
            key={`GoalId + ${goal.id}`}
            id={goal.id}
            title={goal.title}
            text={goal.text}
          />
        ))}
      </div>
    </div>
  )
}

function GoalItem(item: {id: number, title: string | null, text: string[] | null}){
  if (item.text !== null){
    return(
      <div key={item.id} className="py-10 ">
        <h1 className='flex items-center justify-center text-2xl font-bold pb-4'>
          {item.title}
        </h1>
        <div className='flex items-center justify-center'>
          <ul className="w-4/5 ml-8 mr-4 pb-2 list-disc xl:px-20">
              {item.text.map((text: string, index: number) => (
                  <li className="mb-2" key={`${text} + ${index}`}>{text}</li>
              ))}
          </ul>
        </div>
      </div>
    )
  }
}
