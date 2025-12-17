'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useScroll, motion } from 'motion/react'

const hotelLocations = [
  { name: 'Ramnagar', slug: 'ramnagar' },
]

const menuItems = [
  { name: 'About Us', href: '#about' },
  { name: 'Contact Us', href: '#contact' },
]

export const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const [hotelsDropdownOpen, setHotelsDropdownOpen] = React.useState(false)
  const { scrollYProgress } = useScroll()

  React.useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      setScrolled(latest > 0.05)
    })
    return () => unsubscribe()
  }, [scrollYProgress])

  return (
    <header
      className={cn(
        'fixed left-0 top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'bg-primary/95 shadow-lg backdrop-blur-sm'
          : 'bg-transparent'
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="relative z-20 flex items-center">
          <div className={cn(
            "rounded-lg p-2 transition-all duration-300 overflow-hidden",
            scrolled ? "bg-transparent" : "bg-black/95 backdrop-blur-md shadow-xl border border-white/10"
          )}>
            <div className="relative w-32 h-10 sm:w-36 sm:h-11">
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
          className="relative z-20 -m-2.5 -mr-4 block p-2.5 lg:hidden"
        >
          {menuState ? (
            <X className="h-6 w-6 text-primary-foreground" />
          ) : (
            <Menu
              className={cn(
                scrolled ? 'text-primary-foreground' : 'text-primary',
                'h-6 w-6'
              )}
            />
          )}
        </button>

        {/* Desktop menu */}
        <div className="hidden lg:flex lg:items-center lg:gap-8">
          <div className="relative">
            <button
              onClick={() => setHotelsDropdownOpen(!hotelsDropdownOpen)}
              className={cn(
                scrolled ? 'text-primary-foreground' : 'text-primary',
                'hover:text-secondary flex items-center gap-1 duration-150'
              )}
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
              className={cn(
                scrolled ? 'text-primary-foreground' : 'text-primary',
                'hover:text-secondary duration-150'
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA Buttons */}
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
          className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-primary px-6 py-20 sm:max-w-sm lg:hidden"
        >
          <div className="space-y-6">
            <div>
              <button
                onClick={() => setHotelsDropdownOpen(!hotelsDropdownOpen)}
                className="flex items-center gap-2 w-full text-primary-foreground"
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
                      onClick={(e) => {
                        e.stopPropagation()
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

          {/* Mobile CTA Buttons */}
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