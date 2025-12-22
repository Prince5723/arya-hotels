'use client'
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  PawPrint,
  Leaf,
  Car,
  Home,
  Mountain,
  Coffee,
  Wifi, 
  Snowflake 
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface TabContent {
  badge: string
  title: string
  description: string
  buttonText: string
  imageSrc: string
  imageAlt: string
}

interface Tab {
  value: string
  icon: React.ReactNode
  label: string
  content: TabContent
}

interface Feature108Props {
  badge?: string
  heading?: string
  description?: string
  tabs: Tab[]
}

const AUTO_INTERVAL = 9000

export default function Feature108({
  badge = 'Features',
  heading = 'Designed for clarity on every screen',
  description = 'Auto-rotating, touch-friendly, and readable from mobile to desktop.',
  tabs
}: Feature108Props) {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  const progressRef = useRef<HTMLDivElement | null>(null)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (paused || tabs.length === 0) return

    if (progressRef.current) {
      progressRef.current.style.transition = 'none'
      progressRef.current.style.width = '0%'

      requestAnimationFrame(() => {
        if (!progressRef.current) return
        progressRef.current.style.transition = `width ${AUTO_INTERVAL}ms linear`
        progressRef.current.style.width = '100%'
      })
    }

    timerRef.current = setTimeout(() => {
      setActive((prev) => (prev + 1) % tabs.length)
    }, AUTO_INTERVAL)

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [active, paused, tabs.length])

  if (!tabs || tabs.length === 0) return null

  return (
    <section className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <Badge variant="outline" className="mb-4">
            {badge}
          </Badge>
          <h2 className="text-3xl font-semibold sm:text-4xl">
            {heading}
          </h2>
          <p className="mt-3 text-foreground/80">
            {description}
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-10 flex gap-2 overflow-x-auto px-1 pb-2 sm:justify-center sm:overflow-visible">
          {tabs.map((tab, i) => (
            <button
              key={tab.value}
              onClick={() => setActive(i)}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              className={cn(
                'relative flex shrink-0 items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition',
                active === i
                  ? 'bg-muted text-primary'
                  : 'text-foreground/80 hover:text-foreground'
              )}
            >
              {tab.icon}
              <span className="whitespace-nowrap">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div
          className="relative overflow-hidden rounded-2xl bg-muted/50 p-6 sm:p-10 cursor-pointer"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onClick={(e) => {
            const target = e.target as HTMLElement
            // don't change slide when clicking interactive elements inside (links/buttons)
            if (target.closest('a,button')) return
            setActive((prev) => (prev + 1) % tabs.length)
            setPaused(false)
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              setActive((prev) => (prev + 1) % tabs.length)
              setPaused(false)
            }
          }}
          tabIndex={0}
          aria-label="Next slide"
        >
          {/* Progress bar */}
          <div className="absolute left-0 top-0 h-1 w-full bg-muted">
            <div ref={progressRef} className="h-full bg-primary" />
          </div>

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            {/* Text */}
            <div className="space-y-5">
              <Badge variant="secondary" className="w-fit">
                {tabs[active].content.badge}
              </Badge>
              <h3 className="text-2xl font-semibold sm:text-3xl lg:text-4xl">
                {tabs[active].content.title}
              </h3>
              <p className="max-w-prose text-foreground/80">
                {tabs[active].content.description}
              </p>
              <Button asChild size="lg" className="mt-2">
                <Link
                  href="https://wa.me/919319020033"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {tabs[active].content.buttonText}
                </Link>
              </Button>
            </div>

            {/* Image */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-background">
              <Image
                src={tabs[active].content.imageSrc}
                alt={tabs[active].content.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="mt-6 flex justify-center gap-2">
          {tabs.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={cn(
                'h-2 rounded-full transition-all',
                active === i ? 'w-8 bg-primary' : 'w-2 bg-foreground/60 hover:bg-foreground/90'
              )}
              aria-label={`Go to tab ${i + 1}`}
            />
          ))}
        </div>

        {/* Features & Amenities */}
<div className="mt-24">
  <h3 className="mb-12 text-center text-3xl font-semibold">
    Features and Amenities
  </h3>

  <div className="grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-3 lg:grid-cols-3">
    {[
      { icon: Mountain, label: 'Panoramic Forest View' },
      { icon: PawPrint, label: 'Close to Jim Corbett Wildlife Sanctuary' },
      { icon: Coffee, label: 'Vegetarian Multi-Cuisine Restaurants' },
      { icon: Car, label: 'Safari to Dhikala Gate' },
      // { icon: Wifi, label: 'High-Speed Wi-Fi' },
{ icon: Snowflake, label: 'Air-Conditioned Rooms' },
      { icon: Home, label: 'Free Parking' }
    ].map((item, i) => {
      const Icon = item.icon
      return (
        <div
          key={i}
          className="flex flex-col items-center text-center text-foreground/90"
        >
          <Icon className="mb-3 h-8 w-8" />
          <p className="max-w-[180px] text-sm">
            {item.label}
          </p>
        </div>
      )
    })}
  </div>
</div>

      </div>
    </section>
  )
}