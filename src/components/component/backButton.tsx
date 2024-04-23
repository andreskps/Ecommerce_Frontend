"use client"

import { ArrowBigLeft } from 'lucide-react';

import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";

export function BackButton() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <Button onClick={handleBack} className="flex items-center justify-center w-12 h-12 rounded-full bg-primario text-zinc-50 shadow-sm hover:bg-none">
      <ArrowBigLeft />
    </Button>
  );
}