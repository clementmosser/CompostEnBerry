'use client'

import { useEffect, useState } from "react"
import { supabase } from '@/lib/supabase/client'
import { Database } from '@/types/database.types'
import Image from "next/image"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Error404 from "../Error/error404"

const CDNURL = "https://nnuroccvvykhyoxideoi.supabase.co/storage/v1/object/public/images/"

interface MyBucket {
  name: string;
  id: string;
  updated_at: string;
  created_at: string;
  last_accessed_at: string;
  metadata: Record<string, string>;
}

export default function RetrieveActus(info: {actuId : number}) {

    const [currentIndex, setCurrentIndex] = useState(0)
    const [existArticle, setExistArticle] = useState(true)
    const [actus, setActus] = useState<Database['public']['Tables']['actualites']['Row'][]>([])
    const [images , setImages ] = useState<MyBucket[]>([]);

    const handleNext = () => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      )
    }
    
    const handlePrevious = () => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      )
    }

    // Retrieve the actu information to display
    useEffect(() => {
    const fetchActus = async () => {
        const { data, error } = await supabase.from('actualites').select('*').eq('id', info.actuId)
        if (error){
          console.log(error)
          setExistArticle(false)
        } else if ( data.length === 0) {
          setExistArticle(false)
        } else {
          setActus(data)
        }
    }
    fetchActus()
    }, [])

    // Get bucket name
    let bucketName = ""
    async function getBucket() {
      actus.map((buck) => (
        bucketName=`${buck.photo_bucket}`
      ))
    } 
    getBucket()

    // Get images from bucket
    useEffect(() => {
      const getImages = async () => {
        if(bucketName !== ""){
          const { data, error } = await supabase
          .storage
          .from('images')
          .list(bucketName);

          if(data !== null){
            setImages(data);
          } else {
            console.log(error);
          }
        }
      }
      getImages()
    })

    const imagesUrl: (string | StaticImport)[] = []
    images.map((image) => {
      return (
        imagesUrl.push(CDNURL + bucketName + "/" + image.name)
      )
    })

    if (!existArticle) {
      return (<Error404 />)
    } else {
      return(
      <div className="bg-beige-berry-100">
      <div className="container mx-auto px-4 py-6 md:py-12">
      {actus.map((actu, index) => (
          <div key={`${actu} + ${index}`} className="grid md:grid-cols-2 gap-8 items-center">
            {/* Text Column */}
            <div className="space-y-6 overflow-scroll">
              <h1 className="text-2xl md:text-3xl font-bold text-primary px-4">
                {actu.title}
              </h1>

              <div className="text-lg md:text-xl p-4 text-muted-foreground text-justify leading-relaxed">
                {actu.text_content.map((text, index) => (
                  <p key={`${text} + ${index}`}>{text}</p>
                ))}
              </div>
            </div>
            
            {/* Carousel Section */}
            <div className="aspect-square relative rounded-xl overflow-hidden shadow-lg">
              {/* Image Container */}
              <div className="aspect-square relative overflow-hidden rounded-xl shadow-lg">
                <Image 
                  src={imagesUrl[currentIndex]} 
                  alt={`Carousel image ${currentIndex + 1}`}
                  fill
                  className="object-cover"
                />
            
                {/* Navigation Buttons */}
                <div className="absolute inset-0 flex items-center justify-between z-10 px-4">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={handlePrevious}
                    className="bg-green-berry-100/50 hover:bg-green-berry-100/75 border-none rounded-full"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={handleNext}
                    className="bg-green-berry-100/50 hover:bg-green-berry-100/75 border-none rounded-full"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                </div>
              </div>

              {/* Indicator Dots */}
              <div className="absolute inset-0 top-auto bottom-8 flex justify-center space-x-2">
                {imagesUrl.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`
                      w-3 h-3 rounded-full 
                      ${index === currentIndex ? 'bg-green-berry-100' : 'bg-green-berry-l-100'}
                    `}
                  />
                ))}
              </div>
            </div>
          </div>
      ))}
          
      </div>
      </div>
      )
    }
}




