'use client'

import { Banner } from '@/app/interface/banners/banner.interface'
import { cn } from '@/lib/utils'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'



interface PropsCarousel{
     banners:Banner[]
}




export default function Carousel({banners}:PropsCarousel) {


   //  const images = [
   //      'https://res.cloudinary.com/dftvxcvfw/image/upload/v1713444355/banners/gr6qarexcpvwvlghaxnh.jpg',
   //      'https://res.cloudinary.com/dftvxcvfw/image/upload/v1713444355/banners/haapscdd7dlgbvgzxz2o.jpg',
   //      'https://res.cloudinary.com/dftvxcvfw/image/upload/v1713444355/banners/nh4sifiegt9txnzjdelz.jpg',
   //      'https://res.cloudinary.com/dftvxcvfw/image/upload/v1713444959/banners/cuzw32mev1v0fhywnolq.png',
   //      'https://res.cloudinary.com/dftvxcvfw/image/upload/v1715703211/banners/hcswpfkquicpi08dbppn.jpg'
   //  ]


   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({
        delay: 5000,
   })])

   const [selectedIndex, setSelectedIndex] = useState(0)

   useEffect(() => {
      function selectHandler() {
         const index = emblaApi?.selectedScrollSnap()
         setSelectedIndex(index || 0)
      }

      emblaApi?.on('select', selectHandler)

      return () => {
         emblaApi?.off('select', selectHandler)
      }
   }, [emblaApi])

   return (
      <>
         <div className="overflow-hidden rounded-lg" ref={emblaRef}>
            <div className="flex">
               {banners.map((banner, i) => (
                  <div className="relative h-96 flex-[0_0_100%]" key={banner.id}>
                     <Image src={banner.urlImg} fill className="object-cover" alt={banner.name} />
                  </div>
               ))}
            </div>
         </div>
         <Dots itemsLength={banners.length} selectedIndex={selectedIndex} />
      </>
   )
}

type Props = {
   itemsLength: number
   selectedIndex: number
}
const Dots = ({ itemsLength, selectedIndex }: Props) => {
   const arr = new Array(itemsLength).fill(0)
   return (
      <div className="flex gap-1 justify-center -translate-y-8">
         {arr.map((_, index) => {
            const selected = index === selectedIndex
            return (
               <div
                  className={cn({
                     'h-3 w-3 rounded-full transition-all duration-300 bg-primary-foreground':
                        true,
                     // tune down the opacity if slide is not selected
                     'h-3 w-3 opacity-50': !selected,
                  })}
                  key={index}
               />
            )
         })}
      </div>
   )
}