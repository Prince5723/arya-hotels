'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion } from 'motion/react'

const hotelLocations = [
  { name: 'Ramnagar', slug: 'ramnagar' },
]

const menuItems = [
  { name: 'About Us', href: '#about' },
  { name: 'Contact Us', href: '#contact' },
]

export const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false)
  const [hotelsDropdownOpen, setHotelsDropdownOpen] = React.useState(false)

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-primary/95 shadow-lg backdrop-blur-sm">
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="relative z-20 flex items-center">
          <div className="rounded-lg p-2">
            <div className="relative h-9 w-28 sm:h-11 sm:w-36">
              <Image
                src="/Aarya-logo-Golden.svg"
                alt="Aarya Hotels"
                fill
                className="object-contain scale-125"
                priority
              />
            </div>
          </div>
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuState(!menuState)}
          className="relative z-20 p-2.5 lg:hidden"
        >
          {menuState ? (
            <X className="h-6 w-6 text-primary-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-primary-foreground" />
          )}
        </button>

        {/* Desktop menu */}
        <div className="hidden lg:flex lg:items-center lg:gap-8">
          <div className="relative">
            <button
              onClick={() => setHotelsDropdownOpen(!hotelsDropdownOpen)}
              className="flex items-center gap-1 text-primary-foreground hover:text-secondary"
            >
              Our Hotels
              <ChevronDown className="h-4 w-4" />
            </button>

            {hotelsDropdownOpen && (
              <div className="absolute left-0 top-full mt-2 w-48 rounded-lg bg-primary p-2 shadow-lg">
                {hotelLocations.map((location) => (
                  <Link
                    key={location.slug}
                    href={`/hotels/${location.slug}`}
                    onClick={() => setHotelsDropdownOpen(false)}
                    className="block rounded-md px-4 py-2 text-primary-foreground hover:bg-primary-foreground/10"
                  >
                    {location.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-primary-foreground hover:text-secondary"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex lg:items-center lg:gap-4">
          <Button variant="secondary" asChild>
            <Link href="#booking">Book Now</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="#partner">Partner With Us</Link>
          </Button>
        </div>

        {/* Mobile menu */}
        <motion.div
          initial={false}
          animate={menuState ? { x: 0 } : { x: '100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed right-0 top-[72px] z-10 h-[calc(100vh-72px)] w-full overflow-y-auto bg-primary px-6 py-8 sm:max-w-sm lg:hidden"
        >
          <div className="space-y-6">
            <div>
              <button
                onClick={() => setHotelsDropdownOpen(!hotelsDropdownOpen)}
                className="flex w-full items-center gap-2 text-primary-foreground"
              >
                Our Hotels
                <ChevronDown className="h-4 w-4" />
              </button>

              {hotelsDropdownOpen && (
                <div className="mt-2 space-y-2 pl-4">
                  {hotelLocations.map((location) => (
                    <Link
                      key={location.slug}
                      href={`/hotels/${location.slug}`}
                      onClick={() => {
                        setHotelsDropdownOpen(false)
                        setMenuState(false)
                      }}
                      className="block py-2 text-primary-foreground/80 hover:text-primary-foreground"
                    >
                      {location.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMenuState(false)}
                className="block text-primary-foreground hover:text-secondary"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="mt-8 space-y-4">
            <Button variant="secondary" className="w-full" asChild>
              <Link href="#booking" onClick={() => setMenuState(false)}>
                Book Now
              </Link>
            </Button>
            <Button variant="outline" className="w-full" asChild>
              <Link href="#partner" onClick={() => setMenuState(false)}>
                Partner With Us
              </Link>
            </Button>
          </div>
        </motion.div>
      </nav>
    </header>
  )
}
