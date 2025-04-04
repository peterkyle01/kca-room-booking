/* eslint-disable @next/next/no-img-element */
'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface RoomGalleryProps {
  images: any[]
  roomName: string
}

export function RoomGallery({ images, roomName }: RoomGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  // If no images are provided, use a placeholder
  const galleryImages =
    images && images.length > 0
      ? images.map((img) => img.image.url)
      : ['/placeholder.svg?height=600&width=1200']

  const handlePrevious = () => {
    setActiveIndex((current) => (current === 0 ? galleryImages.length - 1 : current - 1))
  }

  const handleNext = () => {
    setActiveIndex((current) => (current === galleryImages.length - 1 ? 0 : current + 1))
  }

  return (
    <div className="relative rounded-lg overflow-hidden">
      <div className="aspect-video bg-muted">
        <img
          src={galleryImages[activeIndex] || '/placeholder.svg'}
          alt={`${roomName} - Image ${activeIndex + 1}`}
          className="w-full h-full object-cover"
        />
      </div>

      {galleryImages.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90 rounded-full"
            onClick={handlePrevious}
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Previous image</span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90 rounded-full"
            onClick={handleNext}
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Next image</span>
          </Button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${index === activeIndex ? 'bg-primary' : 'bg-background/60'}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`View image ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}

      {galleryImages.length > 1 && (
        <div className="absolute top-4 right-4 bg-background/80 text-foreground px-2 py-1 rounded-md text-xs font-medium">
          {activeIndex + 1} / {galleryImages.length}
        </div>
      )}
    </div>
  )
}
