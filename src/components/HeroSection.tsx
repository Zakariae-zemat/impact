"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Target, Sparkles, ArrowRight, Play } from "lucide-react"
import ImageSlider from "./image-slider"
import dynamic from 'next/dynamic'

// Dynamically import VideoPopup to avoid SSR issues
const VideoPopup = dynamic(() => import('@/components/video-popup'), {
  ssr: false
})

export default function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
  // Typewriter animation state
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  const handleCloseVideo = useCallback(() => {
    setIsVideoOpen(false);
  }, []);

  const handleOpenVideo = useCallback(() => {
    setIsVideoOpen(true);
  }, []);

  useEffect(() => {
    const text = "IMPACT"
    let currentIndex = 0
    let timeoutId: NodeJS.Timeout | null = null

    const typeNext = () => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1))
        currentIndex++
        timeoutId = setTimeout(typeNext, 200)
      } else {
        setIsTyping(false)
        timeoutId = setTimeout(() => {
          setDisplayedText("")
          setIsTyping(true)
          currentIndex = 0
          typeNext()
        }, 3000)
      }
    }

    typeNext()

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
    }
  }, [])

  return (
    <>
      {/* Hero Section - Mobile First Responsive */}
      <section className="py-8 sm:py-12 md:py-20 lg:py-28 bg-gradient-to-br from-orange-50 via-yellow-50 to-white relative overflow-hidden">
  <div className="absolute inset-0 z-0 opacity-20">
    <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
  </div>
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
      <div className="space-y-4 sm:space-y-6 md:space-y-8 order-2 lg:order-1">
        <div className="space-y-3 sm:space-y-4 md:space-y-6">
          <Badge className="bg-orange-100 text-orange-700 border-orange-200 hover:bg-orange-200 transition-colors text-xs sm:text-sm inline-flex">
            <Target className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-1.5 flex-shrink-0" />
            <span className="truncate sm:whitespace-normal">Nouvelle Année Universitaire 2024-2025</span>
          </Badge>

          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
            <span className="block text-gray-900 mb-1 sm:mb-2">Rejoignez le Club</span>
            <span className="block bg-gradient-to-r from-orange-600 via-yellow-600 to-orange-600 bg-clip-text text-transparent">
              {displayedText}
              {isTyping && displayedText.length < 6 && (
                <span className="animate-pulse text-orange-400">|</span>
              )}
            </span>
          </h1>

          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed text-pretty max-w-none lg:max-w-2xl">
            Une initiative révolutionnaire à la FST qui inspire, éduque et soutient les étudiants dans leur
            développement personnel et professionnel à travers la créativité et la communication.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <Link href="/rejoindre" className="w-full sm:w-auto">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white group shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            >
              <Sparkles className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Rejoindre le Club
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Button
            variant="outline"
            size="lg"
            className="border-orange-200 hover:bg-orange-50 bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300"
            onClick={handleOpenVideo}
          >
            <Play className="mr-2 h-4 w-4" />
            Savoir Plus
          </Button>
        </div>

        <div className="flex items-center justify-between xs:justify-start xs:gap-4 sm:gap-8 pt-4 sm:pt-6">
          <div className="text-center group min-w-0 flex-1 xs:flex-initial">
            <div className="text-xl xs:text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
              50+
            </div>
            <div className="text-xs sm:text-sm text-gray-600 font-medium leading-tight">
              <span className="block xs:hidden">Membres</span>
              <span className="hidden xs:block">Membres Actifs</span>
            </div>
          </div>
          <Separator orientation="vertical" className="h-8 sm:h-12 bg-orange-200 flex-shrink-0" />
          <div className="text-center group min-w-0 flex-1 xs:flex-initial">
            <div className="text-xl xs:text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
              20+
            </div>
            <div className="text-xs sm:text-sm text-gray-600 font-medium leading-tight">
              <span className="block xs:hidden">Événements</span>
              <span className="hidden xs:block">Événements/An</span>
            </div>
          </div>
          <Separator orientation="vertical" className="h-8 sm:h-12 bg-orange-200 flex-shrink-0" />
          <div className="text-center group min-w-0 flex-1 xs:flex-initial">
            <div className="text-xl xs:text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
              5
            </div>
            <div className="text-xs sm:text-sm text-gray-600 font-medium leading-tight">
              <span className="block xs:hidden">Domaines</span>
              <span className="hidden xs:block">Domaines d&apos;Expertise</span>
            </div>
          </div>
        </div>
      </div>

      <div className="order-1 lg:order-2 w-full">
        <ImageSlider />
      </div>
    </div>
  </div>
</section>

      <VideoPopup isOpen={isVideoOpen} onClose={handleCloseVideo} videoSrc="/club-impact-presentation.mp4" />
    </>
  )
}