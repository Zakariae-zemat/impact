"use client"

import { useState, useEffect } from "react"

const images = [
  "/pic.jpeg",
  "/IMG_1237.JPG",
  "/IMG_4259.JPG",
  "/DSCF1036.JPG",
  "/2024_1010_21274500.jpg",
]

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full max-w-2xl mx-auto h-64 sm:h-80 md:h-96 lg:h-[28rem] rounded-xl">
      {images.map((src, index) => {
        const isActive = index === currentIndex
        const zIndex = isActive ? 10 : 5 - Math.abs(index - currentIndex)
        const opacity = isActive ? 1 : 0.2
        const rotation = isActive ? 2 : 5 // Reduced rotation for better mobile view
        const scale = isActive ? 1 : 0.92 // Adjusted scale for better mobile view

        return (
          <div 
            key={index}
            className="absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out"
            style={{
              zIndex,
              opacity,
              transform: `rotate(${isActive ? rotation : rotation * 2}deg) scale(${scale})`,
              padding: '0.5rem', // Adds some spacing around the image
            }}
          >
            <img
              src={src || "/placeholder.svg"}
              alt={`Club activity ${index + 1}`}
              className="w-full h-full rounded-xl object-cover shadow-lg border-2 border-white/50"
              style={{
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              }}
            />
          </div>
        )
      })}
    </div>
  )
}