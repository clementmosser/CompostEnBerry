'use client'

import Footer from "@/components/Footer/footer";
import Strip from "@/components/Strip/strip";
import SecondHeader from "@/components/Header/secondHeader";
import LegalMentions from "@/components/LegalMentions/legalMentions";

export default function Page() {

  return (
    <>
      <main>
        <SecondHeader />
        <Strip 
          normal="Mentions"
          wrap="Légales"
          bgColor= "bg-green-berry-100"
          txtColor= "text-beige-berry-100"
          bgWrap= "bg-beige-berry-100"
          bgTxtWrap= "text-green-berry-100" 
        />
        <LegalMentions />
      </main>
      <Footer />
    </>
    
  );
}



