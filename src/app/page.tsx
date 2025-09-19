"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import ImageSlider from "@/components/image-slider"
import VideoPopup from "@/components/video-popup"
import {
  Camera,
  Mic,
  PenTool,
  Users,
  Star,
  ArrowRight,
  Play,
  BookOpen,
  Megaphone,
  Video,
  Target,
  Rocket,
  MessageCircle,
  MapPin,
  Mail,
  Phone,
  Sparkles,
  Zap,
  Heart,
} from "lucide-react"

import { TestimonialSlider } from "@/components/testimonial-slider"

export default function HomePage() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  
  // Typewriter animation state
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const text = "IMPACT"
    let currentIndex = 0
    let timeoutId: NodeJS.Timeout | null = null
    let animationTimeoutId: NodeJS.Timeout | null = null

    const typeNext = () => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1))
        currentIndex++
        timeoutId = setTimeout(typeNext, 200)
      } else {
        setIsTyping(false)
        animationTimeoutId = setTimeout(() => {
          setDisplayedText("")
          setIsTyping(true)
          currentIndex = 0
          typeNext()
        }, 3000)
      }
    }

    typeNext()

    return () => {
      if (timeoutId) clearTimeout(timeoutId)
      if (animationTimeoutId) clearTimeout(animationTimeoutId)
    }
  }, [])

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Header */}
      <header className="bg-white backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center justify-between">
            <div className="flex items-center">
              <img className="h-12 w-auto" src="logo-light.png" alt="Logo Impact" />
            </div>
            
            {/* Menu Desktop */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex items-center space-x-8">
                <Link href="#activites" className="text-gray-700 hover:text-orange-600 transition-colors font-medium text-sm md:text-base">
                  Activités
                </Link>
                <Link href="#temoignages" className="text-gray-700 hover:text-orange-600 transition-colors font-medium text-sm md:text-base">
                  Témoignages
                </Link>
                <Link href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors font-medium text-sm md:text-base">
                  Contact
                </Link>
              </div>
              <Link href="/rejoindre" className="ml-4">
                <Button
                  size="lg"
                  className="bg-orange-600 hover:bg-orange-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-orange-600 text-sm md:text-base"
                >
                  Nous Rejoindre
                </Button>
              </Link>
            </div>
            
            {/* Menu Mobile Button */}
            <div className="md:hidden">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => {
                  const mobileMenu = document.getElementById('mobile-menu');
                  if (mobileMenu) {
                    mobileMenu.classList.toggle('hidden');
                  }
                }}
                className="text-gray-700 hover:bg-orange-50"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </Button>
            </div>
          </nav>
          
          {/* Mobile Menu */}
          <div id="mobile-menu" className="hidden md:hidden mt-4 pb-4">
            <div className="space-y-3">
              <Link 
                href="#activites" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                onClick={() => document.getElementById('mobile-menu')?.classList.add('hidden')}
              >
                Activités
              </Link>
              <Link 
                href="#temoignages" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                onClick={() => document.getElementById('mobile-menu')?.classList.add('hidden')}
              >
                Témoignages
              </Link>
              <Link 
                href="#contact" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                onClick={() => document.getElementById('mobile-menu')?.classList.add('hidden')}
              >
                Contact
              </Link>
              <Link 
                href="/rejoindre" 
                className="block px-3 py-2 rounded-md text-base font-medium text-white bg-orange-600 hover:bg-orange-700 text-center"
                onClick={() => document.getElementById('mobile-menu')?.classList.add('hidden')}
              >
                Nous Rejoindre
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <motion.section 
        className="py-8 sm:py-12 md:py-20 lg:py-28 bg-gradient-to-br from-orange-50 via-yellow-50 to-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="absolute inset-0 z-0 opacity-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        </motion.div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            <motion.div 
              className="space-y-4 sm:space-y-6 md:space-y-8 order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div 
                className="space-y-3 sm:space-y-4 md:space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Badge className="bg-orange-100 text-orange-700 border-orange-200 hover:bg-orange-200 transition-colors text-xs sm:text-sm inline-flex">
                  <Target className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-1.5 flex-shrink-0" />
                  <span className="truncate sm:whitespace-normal">Nouvelle Année Universitaire 2025-2026</span>
                </Badge>

                <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                  <span className="block text-gray-900 mb-1 sm:mb-2">Rejoignez le Club</span>
                  <span className="block bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
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
              </motion.div>

              <motion.div 
                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
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
                  onClick={() => setIsVideoOpen(true)}
                >
                  <Play className="mr-2 h-4 w-4" />
                  Savoir Plus
                </Button>
              </motion.div>

              <motion.div 
                className="flex items-center justify-between xs:justify-start xs:gap-4 sm:gap-8 pt-4 sm:pt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
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
                    <span className="block xs:hidden">&Eacute;v&eacute;nements</span>
                    <span className="hidden xs:block">&Eacute;v&eacute;nements/An</span>
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
              </motion.div>
            </motion.div>

            <motion.div 
              className="order-1 lg:order-2 w-full"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <ImageSlider />
            </motion.div>
          </div>
        </div>
      </motion.section>

      <VideoPopup isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
      
      {/* Activities Section */}
      <section id="activites" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200 text-lg px-4 py-2">
              <Rocket className="w-5 h-5 mr-2" />
              Nos Domaines d&#39;Excellence
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 text-balance">
              Développez vos Talents avec
              <span className="block bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                IMPACT
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto text-pretty leading-relaxed">
              Découvrez nos domaines d&#39;expertise qui vous permettront de développer vos compétences et votre
              créativité dans un environnement stimulant et innovant.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Photography Card */}
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-orange-100 hover:border-orange-300 bg-gradient-to-br from-white to-orange-50/30 overflow-hidden">
              <CardHeader className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <Camera className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-gray-900 text-xl group-hover:text-orange-600 transition-colors">
                  Photographie
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Maîtrisez l&#39;art de capturer les moments avec des ateliers pratiques animés par des professionnels
                  expérimentés et passionnés.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-xl border border-orange-200 overflow-hidden group-hover:scale-105 transition-transform duration-500 shadow-inner">
                  <img 
                    src="/IMG_9967.jpg" 
                    alt="Atelier de photographie" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Public Speaking Card */}
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-orange-100 hover:border-orange-300 bg-gradient-to-br from-white to-yellow-50/30 overflow-hidden">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <Megaphone className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-gray-900 text-xl group-hover:text-orange-600 transition-colors">
                  Prise de Parole en Public
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Perfectionnez votre éloquence et gagnez en confiance pour prendre la parole en public avec assurance
                  et charisme.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-xl border border-yellow-200 overflow-hidden group-hover:scale-105 transition-transform duration-500 shadow-inner">
                  <img 
                    src="/IMG_0350.JPG" 
                    alt="Atelier de prise de parole" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Design Card */}
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-orange-100 hover:border-orange-300 bg-gradient-to-br from-white to-orange-50/30 overflow-hidden">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-400 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <PenTool className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-gray-900 text-xl group-hover:text-orange-600 transition-colors">
                  Design
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Découvrez l&#39;univers du design graphique et développez vos compétences créatives avec nos ateliers
                  pratiques et projets concrets.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-xl border border-orange-200 overflow-hidden group-hover:scale-105 transition-transform duration-500 shadow-inner">
                  <img 
                    src="/IMG_4866.JPG" 
                    alt="Atelier de design" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Podcast et Interviews Card */}
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-orange-100 hover:border-orange-300 bg-gradient-to-br from-white to-yellow-50/30 overflow-hidden">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-400 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <Mic className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-gray-900 text-xl group-hover:text-orange-600 transition-colors">
                  Podcasts et Interviews
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Participez à nos podcasts passionnants couvrant l&#39;orientation post-universitaire, les événements et
                  l&#39;actualité étudiante.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-xl border border-yellow-200 overflow-hidden group-hover:scale-105 transition-transform duration-500 shadow-inner">
                  <img 
                    src="/IMG_0018.JPG" 
                    alt="Studio podcast" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Video Production Card */}
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-orange-100 hover:border-orange-300 bg-gradient-to-br from-white to-yellow-50/30 overflow-hidden">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <Video className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-gray-900 text-xl group-hover:text-orange-600 transition-colors">
                  Montage Vidéo
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Créez des montages vidéo professionnels pour documenter la vie étudiante et les événements marquants
                  de la FST.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-xl border border-orange-200 overflow-hidden group-hover:scale-105 transition-transform duration-500 shadow-inner">
                  <img 
                    src="/IMG_1163.JPG" 
                    alt="Équipe vidéo" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Community Card */}
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-orange-100 hover:border-orange-300 bg-gradient-to-br from-white to-yellow-50/30 overflow-hidden">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-gray-900 text-xl group-hover:text-orange-600 transition-colors">
                  Communauté
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Rejoignez une communauté dynamique où innovation, médiatisation et communication se rencontrent pour
                  créer l&#39;impact positif.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-xl border border-orange-200 overflow-hidden group-hover:scale-105 transition-transform duration-500 shadow-inner">
                  <img 
                    src="/IMG_0428.JPG" 
                    alt="Équipe vidéo" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="temoignages" className="py-16 md:py-20 lg:py-28 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 md:space-y-6 mb-12 md:mb-16">
            <Badge className="bg-orange-100 text-orange-700 border-orange-200 text-sm md:text-base px-4 py-1.5 md:px-5 md:py-2">
              <MessageCircle className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              Témoignages
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-balance">
              Ce que disent nos Specials 
              <span className="bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                Membres
              </span>
            </h2>
          </div>

          <TestimonialSlider />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white/30 rounded-full animate-pulse"></div>
            <div className="absolute top-32 right-20 w-16 h-16 border-2 border-white/30 rounded-full animate-pulse delay-500"></div>
            <div className="absolute bottom-20 left-32 w-24 h-24 border-2 border-white/30 rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <Badge className="bg-black/20 text-white border-white/30 text-lg px-4 py-2 backdrop-blur-sm">
              <Zap className="w-5 h-5 mr-2" />
              Votre Avenir Commence Ici
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-white text-balance leading-tight">
              Prêt à Rejoindre une Communauté
              <span className="block">Dynamique et Inspirante ?</span>
            </h2>
            <p className="text-xl text-white/90 text-pretty max-w-3xl mx-auto leading-relaxed">
              Ne manquez pas cette opportunité exceptionnelle de grandir, d&#39;apprendre, de positiver et de partager vos
              idées créatives. Votre parcours d&#39;excellence commence maintenant !
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <Link href="/rejoindre">
                <Button
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-gray-100 group shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 font-semibold"
                >
                  <Heart className="mr-2 h-5 w-5" />
                  Rejoindre le Club IMPACT
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 hover:bg-white/10 bg-white/5 text-white backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <BookOpen className="mr-2 h-4 w-4" />
                En Savoir Plus
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <img className="w-32 h-12" src="logo.png" alt="" />
              </div>
              <p className="text-gray-300 text-pretty leading-relaxed">
                Une initiative révolutionnaire qui inspire, éduque et soutient les étudiants dans leur développement
                personnel et professionnel à travers l&#39;innovation et la créativité.
              </p>
            </div>

            <div className="space-y-6">
              <h4 className="font-semibold text-lg text-orange-400">Nos Activités</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3">
                  <Camera className="w-4 h-4 text-orange-400" />
                  Photographie
                </li>
                <li className="flex items-center gap-3">
                  <Mic className="w-4 h-4 text-orange-400" />
                  Podcasts
                </li>
                <li className="flex items-center gap-3">
                  <PenTool className="w-4 h-4 text-orange-400" />
                  Design
                </li>
                <li className="flex items-center gap-3">
                  <Megaphone className="w-4 h-4 text-orange-400" />
                  Prise de Parole
                </li>
                <li className="flex items-center gap-3">
                  <Video className="w-4 h-4 text-orange-400" />
                  Montage Vidéo
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="font-semibold text-lg text-orange-400">Contact</h4>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-orange-400" />
                  <span>Faculté des Sciences et Techniques Settat</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-orange-400" />
                  <span>clubimpact@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-orange-400" />
                  <span>+212 702-403552</span>
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-12 bg-gray-700" />

          <div className="text-center text-gray-400">
            <p>&copy; 2023 Club IMPACT - FSTS. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
