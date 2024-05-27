"use client";
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Dots } from "./corouselMain";

interface Props {
  images: {
    id: number;
    url: string;
  }[];
}

export function CarouselDemo({ images }: Props) {


  return (
    <div className="mx-auto px-4 md:mx-0 md:mr-9 pt-3">
      <Carousel className="w-full max-w-xs  ">
        <CarouselContent className="flex"> 
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <Image
                      src={image.url}
                      alt="Product"
                      width={200}
                      height={200}
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
     
    
  );
}
