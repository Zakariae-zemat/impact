"use client"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface VideoPopupProps {
  isOpen: boolean
  onClose: () => void
  videoSrc?: string
}

export default function VideoPopup({ isOpen, onClose, videoSrc = "" }: VideoPopupProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
        <Button
          onClick={onClose}
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full"
        >
          <X className="w-5 h-5" />
        </Button>

        <video controls autoPlay className="w-full h-full object-cover" poster="">
          <source src={videoSrc} type="video/mp4" />
          Votre navigateur ne supporte pas la lecture vidéo.
        </video>
      </div>
    </div>
  )
}
