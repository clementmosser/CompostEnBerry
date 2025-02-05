'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home } from 'lucide-react'

export default function Error404() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-beige-berry-100">
        <div className="max-w-md w-full space-y-8 text-center p-6">
            <div className="relative">
                <div className="absolute inset-0 bg-background/10 rounded-full blur-3xl animate-pulse">
                </div>
                <div className="relative z-10 text-9xl font-extrabold text-green-berry-200 drop-shadow-2xl">
                404
                </div>
            </div>
        
            <div className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground text-green-berry-200">
                Oops! La page n'existe pas
                </h2>
                <p className="text-muted-foreground">
                La page semble s'être perdue dans les nuages. Ne vous inquiétez pas, on peut vous aider à retrouver votre chemin.
                </p>
            </div>
        
            <div className="flex justify-center space-x-4">
                <Button asChild className='text-white bg-green-berry-100 hover:bg-green-berry-200 hover:scale-110 focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none'>
                    <Link href="/" className="flex items-center gap-2">
                        <Home className="w-4 h-4" />
                        Revenir à l'acceuil
                    </Link>
                </Button>
            </div>
        </div>
    </div>
    
  )
}