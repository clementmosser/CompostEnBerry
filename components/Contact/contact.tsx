import Strip from "../Strip/strip";
import Link from "next/link";
import './contact.css'

export default function Contact(){
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
                                <div className="pb-2">
                                    <p className="font-bold">Compost&apos;en Berry</p>
                                    <p>28 rue Gambon, 18000 Bourges</p>
                                    <p>FRANCE</p>
                                </div>
                                <div className="pb-2">
                                    <p>07 84 08 60 02</p>
                                </div>
                                <div className="pb-2 cursor-pointer">
                                    <p onClick={() => sendMail("contact@compostenberry.fr")}>contact@compostenberry.fr</p>
                                </div>
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