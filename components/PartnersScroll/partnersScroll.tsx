'use client'
import Strip from '@/components/Strip/strip'
import PartnersList from './partnersList'

export default function PartnersScroll() {
  
  return (
    <div>
        <Strip 
          normal="i.els nous font "
          wrap="confiance"
          bgColor= "bg-green-berry-100"
          txtColor= "text-yellow-berry-100"
          bgWrap= "bg-yellow-berry-100"
          bgTxtWrap= "text-green-berry-100" 
        /> 
        <div className="w-full overflow-x-hidden py-12">
          <div className="flex animate-scroll gap-16 whitespace-nowrap"> 
            <PartnersList />
            <PartnersList />
            <PartnersList />
            <PartnersList />
          </div>
        </div>
    </div>
    
  )
}