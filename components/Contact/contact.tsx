import Strip from "../Strip/strip";
import Link from "next/link";
import './contact.css'
import { useEffect, useState } from "react"
import { supabase } from '@/lib/supabase/client'
import { Database } from '@/types/database.types'

export default function Contact(){
    const [contacts, setContact] = useState<Database['public']['Tables']['contact']['Row'][]>([])
    
        useEffect(() => {
        const fetchUsers = async () => {
            const { data, error } = await supabase.from('contact').select('*')
            if ( data !== null ){
                setContact(data)
            } else {
                console.log(error)
            }
        }
        
        fetchUsers()
        }, [])
    
    return (
        <>
            <div className="flex">
                <div className="w-full bg-beige-berry-100">
                    <Strip 
                        normal=""
                        wrap="Nous contacter"
                        bgColor= "bg-beige-berry-100"
                        txtColor= "text-yellow-berry-100"
                        bgWrap= "bg-yellow-berry-100"
                        bgTxtWrap= "text-beige-berry-100" 
                    />
                    <div className="flex justify-center md:justify-around">
                        <div className="grid grid-cols-2 w-full px-6 py-4 gap-3 sm:gap-10 text-sm md:text-md text-helloasso">
                            <div className="sm:text-end">
                                {contacts.map((contact, index) => (
                                    <div key={index}>
                                        <div className="pb-2">
                                            <p className="font-bold">{contact.name}</p>
                                            <p>{contact.adress}</p>
                                            <p>{contact.country}</p>
                                        </div>
                                        <div className="pb-2">
                                            <p>{contact.tel}</p>
                                        </div>
                                        <div className="pb-2 cursor-pointer">
                                            <p onClick={() => sendMail(`${contact.mail}`)}>{contact.mail}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div>
                                {NAV_SECTIONS.map((section) => (
                                    <div 
                                        key={(section.id, section.label)}
                                        onClick={() => scrollToSection(section.id)}
                                        className="pb-2 cursor-pointer hover:text-colors-berry-green"
                                    >
                                        {section.label}
                                    </div>
                                ))}
                                <Link 
                                    href="/actualites"
                                    className="pb-2 cursor-pointer hover:text-colors-berry-green">
                                    Nos actualités
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

// Define the sections for navigation
const NAV_SECTIONS = [
    { id: 'accueil', label: 'Accueil' }
  ]

function sendMail(email: string){
    const mailto = `mailto:${email}`
    location.href = mailto
}

// Smooth scroll function
const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
    element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    })
    }
}