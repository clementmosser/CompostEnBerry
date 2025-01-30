"use client"

import Image from 'next/image'

export default function ActuComponent({srcActu, titleActu, txtActu} : {srcActu:string; titleActu: string; txtActu: string;}) {

    return (
        <div className="relative p-4 rounded-lg bg-white flex max-w-[95vw] max-h-[75vh]">
            <Image 
                src={srcActu}
                alt="Selected image"
                width={1000}
                height={1000}
                className="object-contain max-w-[50%] max-h-full"
            /> 
            <div className="overflow-scroll">
                <h1 className="text-center text-xl font-bold p-5">{titleActu}</h1>
                <p className="text-justify text-base font-light p-5">{txtActu}</p>
            </div>
        </div>
    )
}

                

