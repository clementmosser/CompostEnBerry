'use client'

import Strip from '../Strip/strip'

export default function Helloasso() {

  return (
    <>
        <Strip 
        normal="Adhérez à "
        wrap="l'association !"
        bgColor= "bg-helloasso"
        txtColor= "text-white"
        bgWrap= "bg-white"
        bgTxtWrap= "text-colors-helloasso" 
        />

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