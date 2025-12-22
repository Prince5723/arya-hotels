
"use client";

import React from "react";
import { motion, HTMLMotionProps, Variants } from "framer-motion";
import { MapPin, Phone, ArrowRight } from "lucide-react";

interface BhojsalaHeroProps extends HTMLMotionProps<"section"> {
    heading: React.ReactNode;
    subtitle: string;
    backgroundImage: string;
    phone: string;
    location: string;
}

const cn = (...classes: (string | undefined)[]) => classes.filter(Boolean).join(" ");

const Button = ({ children, asChild, size, ...props }: any) => (
    <a className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-md hover:opacity-90 transition-opacity" {...props}>
        {children}
    </a>
);

const BhojsalaHero = React.forwardRef<HTMLElement, BhojsalaHeroProps>(
    (
        {
            className,
            heading,
            subtitle,
            backgroundImage,
            phone,
            location,
            ...props
        },
        ref
    ) => {
        const containerVariants = {
            hidden: { opacity: 0 },
            visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 },
            },
        };

        const itemVariants: Variants = {
            hidden: { y: 20, opacity: 0 },
            visible: {
                y: 0,
                opacity: 1,
                transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
            },
        };

        return (
            <motion.section
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className={cn(
                    "relative flex w-full flex-col bg-background text-foreground md:flex-row min-h-screen items-center overflow-hidden",
                    className
                )}
                {...props}
            >
                {/* Decorative Elements */}
                <motion.div
                    className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Content */}
                <div className="flex w-full flex-col justify-center px-6 py-16 md:w-1/2 md:px-10 lg:w-3/5 lg:px-16 z-10">
                    <motion.div variants={containerVariants} className="max-w-2xl">
                        <motion.div
                            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/20 border border-primary/30"
                            variants={itemVariants}
                        >
                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            <p className="text-xs tracking-[0.2em] text-foreground/90 font-semibold uppercase">
                                Speciality Restaurant
                            </p>
                        </motion.div>

                        <motion.h1
                            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-primary mb-8 tracking-tight"
                            variants={itemVariants}
                        >
                            {heading}
                        </motion.h1>

                        <motion.div
                            className="relative mb-8"
                            variants={itemVariants}
                        >
                            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent rounded-full" />
                            <p className="text-lg md:text-xl leading-relaxed text-foreground/80 pl-4">
                                {subtitle}
                            </p>
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <Button asChild size="sm">
                                <a
                                    href="https://wa.me/919319020033"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Book a Table
                                </a>
                            </Button>
                        </motion.div>

                        {/* Footer Info */}
                        <motion.footer
                            className="flex flex-col gap-4 sm:flex-row sm:gap-8 md:gap-10 mt-8"
                            variants={itemVariants}
                        >
                            <motion.div
                                className="flex items-center gap-3 text-foreground group cursor-pointer"
                                whileHover={{ x: 4 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                    <Phone className="h-4 w-4 text-primary" />
                                </div>
                                <span className="font-medium">{phone}</span>
                            </motion.div>
                            <motion.div
                                className="flex items-center gap-3 text-foreground group cursor-pointer"
                                whileHover={{ x: 4 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                    <MapPin className="h-4 w-4 text-primary" />
                                </div>
                                <span className="font-medium">{location}</span>
                            </motion.div>
                        </motion.footer>
                    </motion.div>
                </div>

                {/* Image with Enhanced Animation */}
                <motion.div
                    className="relative w-full md:w-1/2 lg:w-2/5 h-[400px] md:h-screen"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Gradient Overlay */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent z-10 mix-blend-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    />

                    {/* Main Image */}
                    <motion.div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${backgroundImage})` }}
                        initial={{
                            clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
                            scale: 1.1,
                        }}
                        animate={{
                            clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)",
                            scale: 1,
                        }}
                        transition={{
                            clipPath: { duration: 1.4, ease: [0.76, 0, 0.24, 1] },
                            scale: { duration: 1.6, ease: [0.16, 1, 0.3, 1] }
                        }}
                    />

                    {/* Decorative Frame */}
                    <motion.div
                        className="absolute inset-4 md:inset-8 border-2 border-primary/30 rounded-lg pointer-events-none z-20"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1, duration: 0.8 }}
                    />
                </motion.div>
            </motion.section>
        );
    }
);

BhojsalaHero.displayName = "BhojsalaHero";

export { BhojsalaHero };

