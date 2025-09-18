"use client"

import { useState, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play, Star } from "lucide-react"
import dynamic from 'next/dynamic'

const VideoPopup = dynamic(() => import('@/components/video-popup'), {
  ssr: false
})

export default function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  const handleOpenVideo = useCallback(() => {
    setIsVideoOpen(true)
  }, [])

  const handleCloseVideo = useCallback(() => {
    setIsVideoOpen(false)
  }, [])

  return (
    <section className="py-8 sm:py-12 md:py-20 lg:py-28 bg-gradient-to-br from-orange-50 via-yellow-50 to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-orange-100 rounded-full filter blur-3xl opacity-20 -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-yellow-100 rounded-full filter blur-3xl opacity-20 -ml-40 -mb-40"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <div className="text-center lg:text-left">
            <Badge className="bg-orange-100 text-orange-700 border-orange-200 text-sm md:text-base px-4 py-1.5 md:px-5 md:py-2 mb-6">
              🚀 Nouvelle Saison 2024-2025
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Développez vos compétences <br />
              <span className="bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                avec le Club IMPACT
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Rejoignez notre communauté étudiante dynamique et développez vos talents en photographie, design, podcast et plus encore dans un environnement stimulant et créatif.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-[#FC9804] hover:bg-[#FFAE07] text-white text-base md:text-lg px-8 py-6">
                <Link href="/rejoindre">
                  Rejoindre le Club <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-[#FC9804] text-[#FC9804] hover:bg-[#FC9804]/10 text-base md:text-lg px-8 py-6"
                onClick={handleOpenVideo}
              >
                <Play className="w-5 h-5 mr-2" />
                Voir la vidéo
              </Button>
            </div>
            
            <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6">
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <div key={item} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200">
                      <Image 
                        src={`/avatars/avatar-${item}.jpg`}
                        alt="Membre du club"
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                    </div>
                  ))}
                </div>
                <div className="ml-4 text-left">
                  <p className="text-sm font-medium text-gray-900">+50 Membres</p>
                  <p className="text-xs text-gray-500">Nous rejoignent chaque année</p>
                </div>
              </div>
              
              <div className="h-10 border-l border-gray-200 hidden md:block"></div>
              
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center lg:justify-start">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-1">Étudiants satisfaits</p>
              </div>
            </div>
          </div>
          
          {/* Right column - Image */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl border-8 border-white">
            <Image
              src="/hero-image.jpg"
              alt="Étudiants du Club IMPACT"
              fill
              className="object-cover"
              priority
            />
            
            {/* Play button overlay */}
            <div 
              className="absolute inset-0 flex items-center justify-center bg-black/20 cursor-pointer group transition-all duration-300"
              onClick={handleOpenVideo}
            >
              <div className="w-20 h-20 md:w-24 md:h-24 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 md:w-10 md:h-10 text-[#FC9804] fill-current ml-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Video Popup */}
      <VideoPopup 
        isOpen={isVideoOpen} 
        onClose={handleCloseVideo}
        videoSrc="/club-video.mp4"
      />
    </section>
  )
}
