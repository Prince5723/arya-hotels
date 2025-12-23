"use client";

import React from "react";
import { MapPin, Navigation, Compass, Map } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HotelLocationMapSection() {
    const destinationLat = 29.357062475276887;
    const destinationLng = 79.08461257552771;

    const handleGetDirections = () => {
        if (typeof window === "undefined") return;

        // Direct link to Aarya Hotel with place ID
        const placeId = "ChIJ1WzohphaCTkRgeJBAvRLdqU";
        
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    const url = `https://www.google.com/maps/dir/${latitude},${longitude}/Aarya+Hotel,+Ramnagar/@${destinationLat},${destinationLng}`;
                    window.open(url, "_blank");
                },
                () => {
                    // Fallback: Direct link to Aarya Hotel
                    const fallbackUrl = `https://www.google.com/maps/place/Aarya+Hotel/@${destinationLat},${destinationLng},17z/data=!3m1!4b1!4m6!3m5!1s${placeId}!8m2!3d${destinationLat}!4d${destinationLng}!16s%2Fg%2F11y3l5g3nm`;
                    window.open(fallbackUrl, "_blank");
                }
            );
        } else {
            // Fallback: Direct link to Aarya Hotel
            const fallbackUrl = `https://www.google.com/maps/place/Aarya+Hotel/@${destinationLat},${destinationLng},17z/data=!3m1!4b1!4m6!3m5!1s${placeId}!8m2!3d${destinationLat}!4d${destinationLng}!16s%2Fg%2F11y3l5g3nm`;
            window.open(fallbackUrl, "_blank");
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
        },
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as any },
        },
    };

    return (
        <section className="relative w-full bg-background py-16 md:py-24 overflow-hidden">


            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/3 rounded-full blur-3xl opacity-50" />

            <div className="relative mx-auto max-w-7xl px-6">
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* Left Content */}
                    <motion.div variants={itemVariants}>
                        <motion.div
                            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/20 border border-primary/30"
                            variants={itemVariants}
                        >
                            <MapPin className="w-4 h-4 text-primary" />
                            <span className="text-xs tracking-[0.2em] text-foreground/90 font-semibold uppercase">
                                Find Us Here
                            </span>
                        </motion.div>

                        <motion.h2
                            className="text-4xl md:text-5xl lg:text-5xl font-bold text-primary mb-6 leading-tight tracking-tight"
                            variants={itemVariants}
                        >
                            Visit Our Ramnagar Property
                        </motion.h2>

                        <motion.div className="relative mb-8" variants={itemVariants}>
                            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent rounded-full" />
                            <p className="text-foreground/80 text-base md:text-lg leading-relaxed pl-4">
                                Strategically located near the gateway of Jim Corbett National Park, our Ramnagar property offers effortless access to wildlife safaris, lush forest surroundings, key transport hubs, and popular local attractions.
                            </p>
                        </motion.div>

                        {/* Feature Cards */}
                        <motion.div
                            className="grid grid-cols-2 gap-4 mb-8"
                            variants={itemVariants}
                        >
                            <div className="flex items-start gap-3 p-4 rounded-xl bg-primary/5 border border-primary/20 hover:bg-primary/10 transition-colors">
                                <div className="p-2 rounded-lg bg-primary/20">
                                    <Compass className="w-4 h-4 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-foreground mb-1">
                                        Easy Access
                                    </h3>
                                    <p className="text-xs text-foreground/60">
                                        Well-connected location
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 rounded-xl bg-primary/5 border border-primary/20 hover:bg-primary/10 transition-colors">
                                <div className="p-2 rounded-lg bg-primary/20">
                                    <Map className="w-4 h-4 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-foreground mb-1">
                                        Near Corbett
                                    </h3>
                                    <p className="text-xs text-foreground/60">
                                        Gateway to wildlife
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <Button
                                onClick={handleGetDirections}
                                className="
      group
      flex
      items-center
      gap-2
      rounded-none
      border
      border-primary
      bg-primary
      px-6
      py-5
      text-sm
      font-medium
      tracking-wide
      text-background
      transition-all
      hover:cursor-pointer
      hover:text-primary-foreground
    "
                            >
                                <Navigation
                                    className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45"
                                />
                                GET DIRECTIONS
                            </Button>
                        </motion.div>

                    </motion.div>

                    {/* Right Map */}
                    <motion.div
                        className="relative"
                        variants={itemVariants}
                    >
                        {/* Decorative Elements */}
                        <motion.div
                            className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/30 rounded-2xl -z-10"
                            animate={{
                                rotate: [0, 5, 0],
                                scale: [1, 1.05, 1],
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                        <motion.div
                            className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-primary/20 rounded-2xl -z-10"
                            animate={{
                                rotate: [0, -5, 0],
                                scale: [1, 1.05, 1],
                            }}
                            transition={{
                                duration: 7,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 0.5,
                            }}
                        />

                        {/* Map Container */}
                        <motion.div
                            className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl shadow-primary/10"
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent z-10 pointer-events-none mix-blend-overlay" />

                            <iframe
                                title="Jim Corbett Ramnagar Hotel Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3477.4516380772884!2d79.08461257552771!3d29.357062475276887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390a15986ee86cd5%3A0xa5764b0f0241e581!2sAarya%20Hotel!5e0!3m2!1sen!2sin!4v1766474299785!5m2!1sen!2sin"
                                className="w-full h-full"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}