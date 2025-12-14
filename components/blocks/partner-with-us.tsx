'use client'
import { Button } from '@/components/ui/button'
import { ChevronRight, Building2, Users, TrendingUp, Award, Handshake, GraduationCap, Briefcase, CheckCircle2, MessageSquare, Calendar, Star } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'motion/react'

export default function PartnerWithUs() {
    // Partnership benefits cards
    const benefitsCards = [
        {
            title: "Strong Organizational Set-up",
            icon: Building2,
            description: "Robust infrastructure and streamlined operations"
        },
        {
            title: "Brand Recall & Loyalty",
            icon: TrendingUp,
            description: "Established brand recognition among travelers"
        },
        {
            title: "Talent Pool with Mobility",
            icon: Users,
            description: "Skilled professionals ready to serve"
        },
        {
            title: "Diverse Portfolio Experience",
            icon: Award,
            description: "Expertise in hotels, resorts & farms"
        },
        {
            title: "Ease of Access & Economy",
            icon: Handshake,
            description: "Streamlined partnership process"
        },
        {
            title: "Hotel Development",
            icon: Building2,
            description: "End-to-end development support"
        },
        {
            title: "Training & HR Development",
            icon: GraduationCap,
            description: "Comprehensive staff training programs"
        },
        {
            title: "Specialised Professionals",
            icon: Briefcase,
            description: "Expert senior management team"
        }
    ]

    return (
        <section id="partner-with-us" className="relative overflow-hidden bg-background">
            {/* Refined layered gradient */}
            <div className="relative pt-16 pb-40">
                <div className="absolute inset-0">
                    <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-primary/12 via-primary/4 to-transparent" />
                    <div className="absolute -left-10 top-10 h-64 w-64 rounded-full bg-secondary/25 blur-3xl opacity-70" />
                    <div className="absolute right-0 top-28 h-72 w-72 rounded-full bg-primary/20 blur-3xl opacity-70" />
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-10 h-32 w-96 bg-accent/25 blur-3xl opacity-60" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    {/* Top Section - Content */}
                    <div className="max-w-4xl mx-auto mb-16">
                        {/* Engagement Badge */}
                        <div className="flex justify-center mb-8">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div
                                            key={i}
                                            className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary border-2 border-background"
                                        />
                                    ))}
                                </div>
                                <span className="text-sm font-medium text-foreground ml-2">
                                    We are rapidly growing
                                </span>
                            </div>
                        </div>

                        {/* Main Heading */}
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary text-center mb-6">
                            Partner With Us
                        </h2>

                        {/* Description */}
                        <p className="text-lg md:text-xl text-foreground text-center leading-relaxed mb-8 max-w-3xl mx-auto">
                            We are young and dynamic growing hotel chains in India. Integrating contemporary amenities with quintessential hospitality has made us the preferred choice for Business, Leisure, Pilgrim and Wedding clientele. Our commitment to exceptional service attracts guests from around the globe.
                        </p>

                        <p className="text-lg md:text-xl text-foreground text-center leading-relaxed mb-10 max-w-3xl mx-auto">
                            Our vision is to deliver unparalleled <span className="font-semibold text-secondary">"True Value Hospitality"</span> transforming ordinary stays into extraordinary WOW experiences, underpinned by a rich Indian Heritage and the timeless tenet, where guests love coming back to our hotels.
                        </p>

                        {/* CTA Button */}
                        <div className="flex justify-center">
                            <Button
                                asChild
                                size="lg"
                                className="h-14 rounded-full px-10 bg-primary text-primary-foreground hover:bg-primary/90 text-lg font-semibold shadow-lg"
                            >
                                <Link href="https://wa.me/919319020033" target="_blank" rel="noopener noreferrer">
                                    <span>Get in touch</span>
                                    <ChevronRight className="ml-2 size-5" />
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* Cards Grid - Properly Arranged */}
                    <div className="mb-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {benefitsCards.map((card, index) => {
                                const Icon = card.icon
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.5,
                                            delay: index * 0.1,
                                            ease: "easeOut"
                                        }}
                                        className="bg-background rounded-2xl p-6 shadow-lg border border-border/60 hover:shadow-2xl transition-all duration-300 cursor-pointer hover:scale-105"
                                    >
                                        <div className="flex items-start gap-3">
                                            <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                                                <Icon className="w-6 h-6 text-primary" />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-semibold text-foreground text-base mb-2">
                                                    {card.title}
                                                </h4>
                                                <p className="text-sm text-foreground/70 leading-relaxed">
                                                    {card.description}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </div>

                    {/* Bottom Text Section */}
                    <div className="text-center mt-20">
                        <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                            We are more than Consultant - Partner
                        </h3>
                        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
                            Experience the advantages of partnering with a dynamic hospitality brand
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

