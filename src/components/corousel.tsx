"use client"

import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import Image from "next/image"

export function CarouselDemo() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])

    const images = [
      'https://res.cloudinary.com/dftvxcvfw/image/upload/v1713444355/banners/gr6qarexcpvwvlghaxnh.jpg',
      'https://res.cloudinary.com/dftvxcvfw/image/upload/v1713444355/banners/haapscdd7dlgbvgzxz2o.jpg',
      'https://res.cloudinary.com/dftvxcvfw/image/upload/v1713444355/banners/nh4sifiegt9txnzjdelz.jpg',
      'https://res.cloudinary.com/dftvxcvfw/image/upload/v1713444959/banners/cuzw32mev1v0fhywnolq.png',
  ]

  return (
   
      <Carousel
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
      
      className="overflow-hidden rounded-lg">
        <CarouselContent>
          {images.map((src, i) => (
            <CarouselItem key={i}>
              <Image src={src} fill className="object-cover" alt="" />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
  
  )
}