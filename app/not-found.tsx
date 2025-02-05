'use client'

import SecondHeader from '@/components/Header/secondHeader'
import Footer from '@/components/Footer/footer'
import Error404 from '@/components/Error/error404'

export default function NotFound() {
  return (
    <div>
        <SecondHeader />
        <Error404 />
        <Footer />
    </div>
    
  )
}