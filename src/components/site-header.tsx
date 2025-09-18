'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="inline-block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-xl font-bold text-transparent">
              IMPACT
            </span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            <Link
              href="/#about"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              À propos
            </Link>
            <Link
              href="/#events"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Événements
            </Link>
            <Link
              href="/#testimonials"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Témoignages
            </Link>
            <Link
              href="/#contact"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="sm" className="hidden sm:flex">
            <Link href="/rejoindre">Rejoindre le club</Link>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
