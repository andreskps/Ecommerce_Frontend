'use client'

import { cn } from '@/lib/utils'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Carousel() {

    const images = [
        'https://res.cloudinary.com/dftvxcvfw/image/upload/v1713444355/banners/gr6qarexcpvwvlghaxnh.jpg',
        'https://res.cloudinary.com/dftvxcvfw/image/upload/v1713444355/banners/haapscdd7dlgbvgzxz2o.jpg',
        'https://res.cloudinary.com/dftvxcvfw/image/upload/v1713444355/banners/nh4sifiegt9txnzjdelz.jpg',
        'https://res.cloudinary.com/dftvxcvfw/image/upload/v1713444959/banners/cuzw32mev1v0fhywnolq.png',
    ]


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
               {images.map((src, i) => (
                  <div className="relative h-96 flex-[0_0_100%]" key={i}>
                     <Image src={src} fill className="object-cover" alt="" />
                  </div>
               ))}
            </div>
         </div>
         <Dots itemsLength={images.length} selectedIndex={selectedIndex} />
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