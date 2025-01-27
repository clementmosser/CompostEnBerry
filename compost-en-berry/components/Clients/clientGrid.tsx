'use client'

import ClientItem from "./clientItem"

export default function ClientGrid(){

    return(
        <>
            <div className="flex text-center justify-center bg-beige-berry-100 text-colors-berry-green text-lg md:text-2xl font-bold">
                <h1 className="w-3/4 pt-6">Pour tous vos projets de compostage dans le Berry (18 et 36), l’association Compost’en Berry vous accompagne.</h1>
            </div>
            
            <div className="flex items-center justify-center bg-beige-berry-100">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <ClientItem backGroundColorClass="bg-green-berry-100" />
                    <ClientItem backGroundColorClass="bg-yellow-berry-100" />
                    <ClientItem backGroundColorClass="bg-orange-500" />
                </div>
            </div>
        </>
        
        
    )
}



