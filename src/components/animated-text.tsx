"use client"

import { useState, useEffect } from "react"

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  loop?: boolean
  pauseDuration?: number
}

export default function AnimatedText({
  text,
  className = "",
  delay = 100,
  loop = false,
  pauseDuration = 2000,
}: AnimatedTextProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (currentIndex < text.length && !isComplete) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, delay)

      return () => clearTimeout(timeout)
    } else if (currentIndex >= text.length && !isComplete) {
      setIsComplete(true)

      if (loop) {
        const resetTimeout = setTimeout(() => {
          setDisplayedText("")
          setCurrentIndex(0)
          setIsComplete(false)
        }, pauseDuration)

        return () => clearTimeout(resetTimeout)
      }
    }
  }, [currentIndex, text, delay, isComplete, loop, pauseDuration])

  return (
    <span className={className}>
      {displayedText}
      {(!isComplete || loop) && <span className="animate-pulse text-orange-500">|</span>}
    </span>
  )
}
