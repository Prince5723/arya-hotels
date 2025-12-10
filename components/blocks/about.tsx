import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function About() {
    return (
        <section id="about" className="py-16 md:py-32 bg-background">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid gap-6 md:grid-cols-2 md:gap-12">
                    <h2 className="text-4xl font-medium text-primary">
                        Aarya Hotels and Resorts is a growing hospitality chain in India. We are committed to delivering exceptional experiences.
                    </h2>
                    <div className="space-y-6">
                        <p className="text-foreground">
                            Inspired by the principle of Atithi Devo Bhavah (The guest is God), we strive to transform every stay into something truly special. With blend of modern comforts with rich cultural heritage, we believe in offering personalised service for lasting impression.
                        </p>
                        <p className="text-foreground">
                            Our vision is to be the brand that guests love coming back to our hotels. We take pride in upholding our legacy of authentic hospitality and excellence which assures better guest satisfaction. Whether you seek adventure, comfort, or peace away from the daily hustle, Aarya Hotels is your getaway destination.
                        </p>
                        <Button
                            asChild
                            variant="default"
                            size="sm"
                            className="gap-1 pr-1.5 border border-border">
                            <Link href="https://wa.me/918539053555" target="_blank" rel="noopener noreferrer">
                                <span>Partner With Us</span>
                                <ChevronRight className="size-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}