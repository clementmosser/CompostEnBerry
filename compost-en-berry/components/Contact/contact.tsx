import Strip from "../Strip/strip";
import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";
import './contact.css'

// Define the sections for navigation
const NAV_SECTIONS = [
    { id: 'accueil', label: 'Accueil' }
  ]

export default function Contact(){

    const instagramUrl = 'https://www.instagram.com/compostenberry18/'
    const facebookUrl = 'https://www.facebook.com/share/15waJzwgnk/?mibextid=wwXIfr'

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

    return (
        <>
            <div className="flex">
                <div className="w-1/3 bg-green-berry-100 pb-10">
                <Strip 
                    normal="Nous suivre"
                    wrap=""
                    bgColor= "bg-green-berry-100"
                    txtColor= "text-yellow-berry-100"
                    bgWrap= "bg-yellow-berry-100"
                    bgTxtWrap= "text-green-berry-100" 
                >
                </Strip>
                    <div className="grid grid-rows-1 sm:grid-rows-2 gap-4 justify-center">
                        <div className="text-normal lg:text-lg px-2 font-bold text-colors-berry-beige text-center">
                            <h1>Suivez-nous sur les réseaux:</h1>
                        </div>
                        <div className="flex justify-center">
                            {/*Instagram URL*/}
                            <button className="inline-flex items-center justify-center size-10 mr-4 py-1 rounded-full instagram text-white">
                                <Link 
                                    href={instagramUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex"
                                >
                                    <Instagram 
                                        strokeWidth={1.5} 
                                        className="text-current"
                                    />
                                </Link>
                            </button>

                            {/*Facebook URL*/}
                            <button className="inline-flex items-center justify-center size-10 py-1 facebook rounded-full text-white">
                                <Link 
                                    href={facebookUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex"
                                >
                                    <Facebook 
                                        strokeWidth={1.5} 
                                        className="text-current"
                                    />
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-2/3 bg-beige-berry-100">
                    <Strip 
                        normal=""
                        wrap="Nous contacter"
                        bgColor= "bg-beige-berry-100"
                        txtColor= "text-yellow-berry-100"
                        bgWrap= "bg-yellow-berry-100"
                        bgTxtWrap= "text-beige-berry-100" 
                    />
                    <div className="flex justify-center">
                        <div className="grid grid-cols-1 w-11/12 md:grid-cols-2 justify-start text-xs md:text-sm">
                            <div className="text-colors-berry-green">
                                <div className="pb-2">
                                    <p className="font-bold">Compost&apos;en Berry</p>
                                    <p>28 rue Gambon, 18000 Bourges</p>
                                    <p>FRANCE</p>
                                </div>
                                <div className="pb-2">
                                    <p>07 84 08 60 02</p>
                                </div>
                                <div className="pb-2">
                                    <p>contact@compostenberry.fr</p>
                                </div>
                            </div>

                            <div className="text-gray-700">
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