'use client'
import ActusGrid from "@/components/Actus/actusGrid";
import Footer from "@/components/Footer/footer";
import Strip from "@/components/Strip/strip";
import { Button } from "@/components/ui/button";
import { X } from 'lucide-react';
import Link from "next/link";

export default function Page() {
  
  return (
    <>
      <main>
        <div className="
          absolute
          top-0
          mt-3
          z-10
          px-4 
          py-2"
        >
          <Link href="/">
            <Button 
              variant="outline" 
              size="icon"
              className="rounded-full bg-green-berry-l-100 hover:bg-green-berry-l-200"
            >
              <X />
            </Button>
          </Link>
        </div>
        
        <Strip 
          normal="Nos"
          wrap="Actualités"
          bgColor= "bg-green-berry-100"
          txtColor= "text-yellow-berry-100"
          bgWrap= "bg-yellow-berry-100"
          bgTxtWrap= "text-green-berry-100" 
        />
        <ActusGrid />
      </main>
      <Footer />
    </>
    
  );
}



