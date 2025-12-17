"use client";

import React from "react";
import { motion, useScroll, useSpring, useTransform, MotionValue } from "framer-motion";

// Ramnagar hotel images from the public directory
const images = [
    "/bedroom1-ramnagar.jpeg",
    "/bedroom3-ramnagar.jpeg",
    "/chilling-ramnagar.jpeg",
    "/terrace-ramnagar.jpeg",
    "/IMG_4628.jpg",
    "/IMG_4631.jpg",
    "/IMG_4632.jpg",
    "/IMG_4634.jpg",
    "/IMG_4639.jpg",
    "/IMG_4642.jpg",
    "/IMG_4648.jpg",
    "/IMG_4677.jpg",
    "/IMG_4694.jpg",
    "/IMG_4696.jpg",
    "/IMG_4702.jpg",
];

interface KineticGridItemProps {
    image: string;
    scrollVelocity: MotionValue<number>;
}

const KineticGridItem = ({ image, scrollVelocity }: KineticGridItemProps) => {
    // Smooth the velocity value for a more gradual effect
    const smoothedVelocity = useSpring(scrollVelocity, {
        mass: 0.1,
        stiffness: 80,
        damping: 40,
    });

    // Transform the smoothed velocity into a skew value.
    // The faster the scroll, the more it skews.
    const skew = useTransform(smoothedVelocity, [-1500, 0, 1500], [-15, 0, 15]);

    return (
        <motion.div
            className="relative h-72 w-full overflow-hidden rounded-xl shadow-lg border border-border/60 bg-background"
            style={{ skewX: skew }}
        >
            <img
                src={image}
                alt="Arya Ramnagar gallery"
                className="absolute inset-0 h-full w-full object-cover"
                style={{
                    transform: "scale(1.12)" // Slight zoom to prevent edges showing on skew
                }}
            />
        </motion.div>
    );
};

export default function KineticScrollGallery() {
    const { scrollYProgress } = useScroll();
    
    // Framer Motion's useScroll provides scrollYVelocity, which is a MotionValue
    // representing the velocity of the scroll in pixels per second.
    const scrollYVelocity = useTransform(
        scrollYProgress,
        [0, 1],
        [0, 1000], 
        { clamp: false }
    );

    return (
        <div className="bg-background text-foreground">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12 text-center space-y-3">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                        Aarya Ramnagar Gallery
                    </h2>
                    <p className="text-foreground/80 max-w-2xl mx-auto">
                        Scroll to explore moments from our Ramnagar property.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {images.map((img, index) => (
                        <KineticGridItem
                            key={index}
                            image={img}
                            scrollVelocity={scrollYVelocity}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

